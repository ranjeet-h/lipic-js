import { createTransliterationEngine, getEngineRuntime } from "./transliteration-engine";
import {
  compileWasmLanguageOverlayPack,
  compileWasmLanguagePack,
  compileWasmScriptBasePack,
  createWasmEngineFromLanguagePacks,
  createWasmEngineFromLanguagePack
} from "./wasm-language-pack";
import {
  createWasmTransliterationEngine,
} from "./wasm-transliteration-engine";
import type {
  RuntimeAwareTransliterationEngine,
  TransliterationEngine,
  TransliterationEngineOptions
} from "./transliteration-engine";

const defaultPackCache = new Map<string, Uint8Array>();
type WasmMode = "auto" | boolean;

export interface HybridEngineFactoryOptions {
  wasm?: WasmMode;
  isWasm?: WasmMode;
  preferWasm?: boolean;
  fallbackToJs?: boolean;
  moduleLoader?: () => Promise<unknown>;
  scriptId?: string;
  languageId?: string;
  scriptBaseMap?: TransliterationEngineOptions["expandedMap"];
  languageOverlayMap?: TransliterationEngineOptions["expandedMap"];
  packCache?: Map<string, Uint8Array>;
  packCacheKey?: string;
}

function resolveWasmMode(options: HybridEngineFactoryOptions): {
  mode: WasmMode;
  fallbackToJs: boolean;
} {
  const requestedMode = options.isWasm ?? options.wasm;
  if (requestedMode !== undefined) {
    return {
      mode: requestedMode,
      // WASM is optional in distribution; always keep a JS fail-safe unless caller explicitly disables it.
      fallbackToJs: options.fallbackToJs ?? true
    };
  }

  if (options.preferWasm === false) {
    return { mode: false, fallbackToJs: true };
  }
  if (options.fallbackToJs === false) {
    return { mode: true, fallbackToJs: false };
  }

  return { mode: "auto", fallbackToJs: true };
}

async function createWasmBackedEngine(
  options: TransliterationEngineOptions,
  factoryOptions: HybridEngineFactoryOptions,
  fallbackToJs: boolean
): Promise<TransliterationEngine> {
  const {
    moduleLoader,
    scriptId,
    languageId,
    scriptBaseMap,
    languageOverlayMap,
    packCache = defaultPackCache,
    packCacheKey
  } = factoryOptions;

  if (scriptId && languageId) {
    if (scriptBaseMap && languageOverlayMap) {
      const baseKey = `${scriptId}:__base__:${Object.keys(scriptBaseMap).length}`;
      const overlayKey =
        packCacheKey ??
        `${scriptId}:${languageId}:__overlay__:${JSON.stringify(options.rules ?? {})}:${Object.keys(
          languageOverlayMap
        ).length}`;

      try {
        let basePackBytes = packCache.get(baseKey);
        if (!basePackBytes) {
          basePackBytes = await compileWasmScriptBasePack(
            { expandedMap: scriptBaseMap, scriptId },
            { moduleLoader: moduleLoader as (() => Promise<any>) | undefined, fallbackToJs }
          );
          packCache.set(baseKey, basePackBytes);
        }

        let overlayPackBytes = packCache.get(overlayKey);
        if (!overlayPackBytes) {
          overlayPackBytes = await compileWasmLanguageOverlayPack(
            {
              expandedMap: languageOverlayMap,
              scriptId,
              languageId,
              rules: options.rules
            },
            { moduleLoader: moduleLoader as (() => Promise<any>) | undefined, fallbackToJs }
          );
          packCache.set(overlayKey, overlayPackBytes);
        }

        return createWasmEngineFromLanguagePacks(basePackBytes, overlayPackBytes, options, {
          moduleLoader: moduleLoader as (() => Promise<any>) | undefined,
          fallbackToJs
        });
      } catch (error) {
        if (!fallbackToJs) {
          throw error;
        }
      }
    }

    const key =
      packCacheKey ??
      `${scriptId}:${languageId}:${JSON.stringify(options.rules ?? {})}:${Object.keys(options.expandedMap).length}`;

    try {
      let packBytes = packCache.get(key);
      if (!packBytes) {
        packBytes = await compileWasmLanguagePack(
          { ...options, scriptId, languageId },
          { moduleLoader: moduleLoader as (() => Promise<any>) | undefined, fallbackToJs }
        );
        packCache.set(key, packBytes);
      }

      return createWasmEngineFromLanguagePack(packBytes, options, {
        moduleLoader: moduleLoader as (() => Promise<any>) | undefined,
        fallbackToJs
      });
    } catch (error) {
      if (!fallbackToJs) {
        throw error;
      }
    }
  }

  return createWasmTransliterationEngine(options, {
    moduleLoader: moduleLoader as (() => Promise<any>) | undefined,
    fallbackToJs
  });
}

export async function createHybridTransliterationEngine(
  options: TransliterationEngineOptions,
  factoryOptions: HybridEngineFactoryOptions = {}
): Promise<TransliterationEngine> {
  const { mode, fallbackToJs } = resolveWasmMode(factoryOptions);

  if (mode === false) {
    return createTransliterationEngine(options);
  }

  if (mode === true) {
    return createWasmBackedEngine(options, factoryOptions, fallbackToJs);
  }

  const jsEngine = createTransliterationEngine(options);
  let wasmEngine: TransliterationEngine | null = null;
  try {
    wasmEngine = await createWasmBackedEngine(options, factoryOptions, true);
  } catch {
    wasmEngine = null;
  }

  if (!wasmEngine || getEngineRuntime(wasmEngine) === "js") {
    return jsEngine;
  }

  const engine: RuntimeAwareTransliterationEngine = {
    processChar(ch) {
      return jsEngine.processChar(ch);
    },
    processText(text) {
      const jsEdit = jsEngine.processText(text);
      try {
        const wasmEdit = wasmEngine.processText(text);
        return { backspace: jsEdit.backspace, insert: wasmEdit.insert };
      } catch {
        return jsEdit;
      }
    },
    backspace() {
      return jsEngine.backspace();
    },
    commit() {
      const edit = jsEngine.commit();
      try {
        wasmEngine.commit();
      } catch {
        // Ignore sync failures in auto mode; JS engine remains source of truth.
      }
      return edit;
    },
    reset() {
      jsEngine.reset();
      try {
        wasmEngine.reset();
      } catch {
        // Ignore sync failures in auto mode; JS engine remains source of truth.
      }
    },
    getRuntime() {
      return "hybrid";
    }
  };
  return engine;
}
