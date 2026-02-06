import { createTransliterationEngine } from "./transliteration-engine";
import type {
  EngineRuntime,
  RuntimeAwareTransliterationEngine,
  TransliterationEngine,
  TransliterationEngineOptions
} from "./transliteration-engine";

interface WasmLanguagePackModule {
  compile_language_pack(
    expandedMap: Record<string, unknown>,
    scriptId: string,
    languageId: string,
    rules?: Record<string, unknown>
  ): Uint8Array | number[];
  compile_script_base_pack(
    expandedMap: Record<string, unknown>,
    scriptId: string
  ): Uint8Array | number[];
  compile_language_overlay_pack(
    expandedMap: Record<string, unknown>,
    scriptId: string,
    languageId: string,
    rules?: Record<string, unknown>
  ): Uint8Array | number[];
  merge_language_packs(basePackBytes: Uint8Array, overlayPackBytes: Uint8Array): Uint8Array | number[];
  inspect_language_pack(packBytes: Uint8Array): unknown;
  Engine: {
    fromLanguagePack(packBytes: Uint8Array): {
      process_char(ch: string): unknown;
      process_text(text: string): unknown;
      backspace(): unknown;
      commit(): unknown;
      reset(): void;
    };
    fromLanguagePacks(basePackBytes: Uint8Array, overlayPackBytes: Uint8Array): {
      process_char(ch: string): unknown;
      process_text(text: string): unknown;
      backspace(): unknown;
      commit(): unknown;
      reset(): void;
    };
  };
  default?: () => Promise<unknown> | unknown;
}

export interface LanguagePackSummary {
  schema_version: number;
  kind: "full" | "script_base" | "language_overlay";
  script_id: string;
  language_id: string;
  entries: number;
  has_rules: boolean;
}

export interface WasmLanguagePackFactoryOptions {
  moduleLoader?: () => Promise<WasmLanguagePackModule>;
  fallbackToJs?: boolean;
}

function normalizeEdit(raw: unknown): { backspace: number; insert: string } {
  const value = raw as { backspace?: number; insert?: string } | null | undefined;
  const backspace = Number.isFinite(value?.backspace) ? Math.max(0, Number(value?.backspace)) : 0;
  const insert = typeof value?.insert === "string" ? value.insert : "";
  return { backspace, insert };
}

interface WasmEngineBindings {
  process_char(ch: string): unknown;
  process_text(text: string): unknown;
  backspace(): unknown;
  commit(): unknown;
  reset(): void;
}

function createResilientWasmEngine(
  wasmEngine: WasmEngineBindings,
  fallbackOptions: TransliterationEngineOptions | undefined,
  fallbackToJs: boolean
): TransliterationEngine {
  let runtime: EngineRuntime = "wasm";
  let jsEngine: TransliterationEngine | null = null;

  const ensureJsEngine = (cause: unknown): TransliterationEngine => {
    if (!fallbackToJs || !fallbackOptions) {
      throw cause;
    }
    if (!jsEngine) {
      jsEngine = createTransliterationEngine(fallbackOptions);
      runtime = "js";
    }
    return jsEngine;
  };

  const wrapped: RuntimeAwareTransliterationEngine = {
    processChar(ch: string) {
      if (jsEngine) {
        return jsEngine.processChar(ch);
      }
      try {
        return normalizeEdit(wasmEngine.process_char(ch));
      } catch (error) {
        return ensureJsEngine(error).processChar(ch);
      }
    },
    processText(text: string) {
      if (jsEngine) {
        return jsEngine.processText(text);
      }
      try {
        return normalizeEdit(wasmEngine.process_text(text));
      } catch (error) {
        return ensureJsEngine(error).processText(text);
      }
    },
    backspace() {
      if (jsEngine) {
        return jsEngine.backspace();
      }
      try {
        return normalizeEdit(wasmEngine.backspace());
      } catch (error) {
        return ensureJsEngine(error).backspace();
      }
    },
    commit() {
      if (jsEngine) {
        return jsEngine.commit();
      }
      try {
        return normalizeEdit(wasmEngine.commit());
      } catch (error) {
        return ensureJsEngine(error).commit();
      }
    },
    reset() {
      if (jsEngine) {
        jsEngine.reset();
        return;
      }
      try {
        wasmEngine.reset();
      } catch (error) {
        ensureJsEngine(error).reset();
      }
    },
    getRuntime() {
      return runtime;
    }
  };
  return wrapped;
}

async function defaultWasmModuleLoader(): Promise<WasmLanguagePackModule> {
  const candidates = [
    "@lipic/rust-core",
    "./wasm/rust_core.js",
    "../wasm/rust_core.js",
    "../../rust-core/pkg/rust_core.js"
  ];
  let lastError: unknown;

  for (const moduleId of candidates) {
    try {
      return await import(moduleId) as Promise<WasmLanguagePackModule>;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError ?? new Error("No WASM language-pack module could be loaded");
}

export async function compileWasmLanguagePack(
  options: TransliterationEngineOptions & { scriptId: string; languageId: string },
  factoryOptions: WasmLanguagePackFactoryOptions = {}
): Promise<Uint8Array> {
  const { moduleLoader = defaultWasmModuleLoader } = factoryOptions;
  const wasmModule = await moduleLoader();
  if (typeof wasmModule.default === "function") {
    await wasmModule.default();
  }

  const pack = wasmModule.compile_language_pack(
    options.expandedMap as Record<string, unknown>,
    options.scriptId,
    options.languageId,
    options.rules as Record<string, unknown> | undefined
  );

  return pack instanceof Uint8Array ? pack : Uint8Array.from(pack);
}

export async function compileWasmScriptBasePack(
  options: { expandedMap: Record<string, unknown>; scriptId: string },
  factoryOptions: WasmLanguagePackFactoryOptions = {}
): Promise<Uint8Array> {
  const { moduleLoader = defaultWasmModuleLoader } = factoryOptions;
  const wasmModule = await moduleLoader();
  if (typeof wasmModule.default === "function") {
    await wasmModule.default();
  }

  const pack = wasmModule.compile_script_base_pack(options.expandedMap, options.scriptId);
  return pack instanceof Uint8Array ? pack : Uint8Array.from(pack);
}

export async function compileWasmLanguageOverlayPack(
  options: TransliterationEngineOptions & { scriptId: string; languageId: string },
  factoryOptions: WasmLanguagePackFactoryOptions = {}
): Promise<Uint8Array> {
  const { moduleLoader = defaultWasmModuleLoader } = factoryOptions;
  const wasmModule = await moduleLoader();
  if (typeof wasmModule.default === "function") {
    await wasmModule.default();
  }

  const pack = wasmModule.compile_language_overlay_pack(
    options.expandedMap as Record<string, unknown>,
    options.scriptId,
    options.languageId,
    options.rules as Record<string, unknown> | undefined
  );
  return pack instanceof Uint8Array ? pack : Uint8Array.from(pack);
}

export async function mergeWasmLanguagePacks(
  basePackBytes: Uint8Array,
  overlayPackBytes: Uint8Array,
  factoryOptions: WasmLanguagePackFactoryOptions = {}
): Promise<Uint8Array> {
  const { moduleLoader = defaultWasmModuleLoader } = factoryOptions;
  const wasmModule = await moduleLoader();
  if (typeof wasmModule.default === "function") {
    await wasmModule.default();
  }

  const pack = wasmModule.merge_language_packs(basePackBytes, overlayPackBytes);
  return pack instanceof Uint8Array ? pack : Uint8Array.from(pack);
}

export async function inspectWasmLanguagePack(
  packBytes: Uint8Array,
  factoryOptions: WasmLanguagePackFactoryOptions = {}
): Promise<LanguagePackSummary> {
  const { moduleLoader = defaultWasmModuleLoader } = factoryOptions;
  const wasmModule = await moduleLoader();
  if (typeof wasmModule.default === "function") {
    await wasmModule.default();
  }

  return wasmModule.inspect_language_pack(packBytes) as LanguagePackSummary;
}

export async function createWasmEngineFromLanguagePack(
  packBytes: Uint8Array,
  fallbackOptions?: TransliterationEngineOptions,
  factoryOptions: WasmLanguagePackFactoryOptions = {}
): Promise<TransliterationEngine> {
  const { moduleLoader = defaultWasmModuleLoader, fallbackToJs = true } = factoryOptions;

  try {
    const wasmModule = await moduleLoader();
    if (typeof wasmModule.default === "function") {
      await wasmModule.default();
    }

    const engine = wasmModule.Engine.fromLanguagePack(packBytes);
    return createResilientWasmEngine(engine, fallbackOptions, fallbackToJs);
  } catch (error) {
    if (!fallbackToJs || !fallbackOptions) {
      throw error;
    }
    return createTransliterationEngine(fallbackOptions);
  }
}

export async function createWasmEngineFromLanguagePacks(
  basePackBytes: Uint8Array,
  overlayPackBytes: Uint8Array,
  fallbackOptions?: TransliterationEngineOptions,
  factoryOptions: WasmLanguagePackFactoryOptions = {}
): Promise<TransliterationEngine> {
  const { moduleLoader = defaultWasmModuleLoader, fallbackToJs = true } = factoryOptions;

  try {
    const wasmModule = await moduleLoader();
    if (typeof wasmModule.default === "function") {
      await wasmModule.default();
    }

    const engine = wasmModule.Engine.fromLanguagePacks(basePackBytes, overlayPackBytes);
    return createResilientWasmEngine(engine, fallbackOptions, fallbackToJs);
  } catch (error) {
    if (!fallbackToJs || !fallbackOptions) {
      throw error;
    }
    return createTransliterationEngine(fallbackOptions);
  }
}
