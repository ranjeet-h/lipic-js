import { createTransliterationEngine } from "./transliteration-engine";
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
import type { TransliterationEngine, TransliterationEngineOptions } from "./transliteration-engine";

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
  preferWasm: boolean;
  fallbackToJs: boolean;
} {
  const requestedMode = options.isWasm ?? options.wasm;
  if (requestedMode === true) {
    return { preferWasm: true, fallbackToJs: false };
  }
  if (requestedMode === false) {
    return { preferWasm: false, fallbackToJs: true };
  }

  return {
    preferWasm: options.preferWasm ?? true,
    fallbackToJs: options.fallbackToJs ?? true
  };
}

export async function createHybridTransliterationEngine(
  options: TransliterationEngineOptions,
  factoryOptions: HybridEngineFactoryOptions = {}
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
  const { preferWasm, fallbackToJs } = resolveWasmMode(factoryOptions);

  if (!preferWasm) {
    return createTransliterationEngine(options);
  }

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
