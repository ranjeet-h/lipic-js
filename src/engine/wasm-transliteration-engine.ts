import { createTransliterationEngine } from "./transliteration-engine";
import type {
  Edit,
  EngineRuntime,
  RuntimeAwareTransliterationEngine,
  TransliterationEngine,
  TransliterationEngineOptions
} from "./transliteration-engine";

interface WasmEngineBindings {
  process_char(ch: string): unknown;
  process_text(text: string): unknown;
  backspace(): unknown;
  commit(): unknown;
  reset(): void;
}

interface WasmEngineModule {
  Engine: new (expandedMap: Record<string, unknown>, rules?: Record<string, unknown>) => WasmEngineBindings;
  default?: () => Promise<unknown> | unknown;
}

export interface WasmEngineFactoryOptions {
  moduleLoader?: () => Promise<WasmEngineModule>;
  fallbackToJs?: boolean;
}

function normalizeEdit(raw: unknown): Edit {
  const value = raw as Partial<Edit> | null | undefined;
  const backspace = Number.isFinite(value?.backspace) ? Math.max(0, Number(value?.backspace)) : 0;
  const insert = typeof value?.insert === "string" ? value.insert : "";
  return { backspace, insert };
}

async function defaultWasmModuleLoader(): Promise<WasmEngineModule> {
  const candidates = [
    "@lipic/rust-core",
    "./wasm/rust_core.js",
    "../wasm/rust_core.js",
    "../../rust-core/pkg/rust_core.js"
  ];
  let lastError: unknown;

  for (const moduleId of candidates) {
    try {
      return await import(moduleId) as Promise<WasmEngineModule>;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError ?? new Error("No WASM engine module could be loaded");
}

export async function createWasmTransliterationEngine(
  options: TransliterationEngineOptions,
  factoryOptions: WasmEngineFactoryOptions = {}
): Promise<TransliterationEngine> {
  const { moduleLoader = defaultWasmModuleLoader, fallbackToJs = true } = factoryOptions;

  try {
    const wasmModule = await moduleLoader();
    if (typeof wasmModule.default === "function") {
      await wasmModule.default();
    }

    const engine = new wasmModule.Engine(
      options.expandedMap as Record<string, unknown>,
      options.rules as Record<string, unknown> | undefined
    );
    let runtime: EngineRuntime = "wasm";
    let jsEngine: TransliterationEngine | null = null;

    const ensureJsEngine = (cause: unknown): TransliterationEngine => {
      if (!fallbackToJs) {
        throw cause;
      }
      if (!jsEngine) {
        jsEngine = createTransliterationEngine(options);
        runtime = "js";
      }
      return jsEngine;
    };

    const wrapped: RuntimeAwareTransliterationEngine = {
      processChar(ch: string): Edit {
        if (jsEngine) {
          return jsEngine.processChar(ch);
        }
        try {
          return normalizeEdit(engine.process_char(ch));
        } catch (error) {
          return ensureJsEngine(error).processChar(ch);
        }
      },
      processText(text: string): Edit {
        if (jsEngine) {
          return jsEngine.processText(text);
        }
        try {
          return normalizeEdit(engine.process_text(text));
        } catch (error) {
          return ensureJsEngine(error).processText(text);
        }
      },
      backspace(): Edit {
        if (jsEngine) {
          return jsEngine.backspace();
        }
        try {
          return normalizeEdit(engine.backspace());
        } catch (error) {
          return ensureJsEngine(error).backspace();
        }
      },
      commit(): Edit {
        if (jsEngine) {
          return jsEngine.commit();
        }
        try {
          return normalizeEdit(engine.commit());
        } catch (error) {
          return ensureJsEngine(error).commit();
        }
      },
      reset(): void {
        if (jsEngine) {
          jsEngine.reset();
          return;
        }
        try {
          engine.reset();
        } catch (error) {
          ensureJsEngine(error).reset();
        }
      },
      getRuntime(): EngineRuntime {
        return runtime;
      }
    };
    return wrapped;
  } catch (error) {
    if (!fallbackToJs) {
      throw error;
    }
    return createTransliterationEngine(options);
  }
}
