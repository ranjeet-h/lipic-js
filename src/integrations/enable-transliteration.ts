import { createHybridTransliterationEngine, type HybridEngineFactoryOptions } from "../engine/hybrid-transliteration-engine";
import type { Edit, TransliterationEngineOptions } from "../engine/transliteration-engine";
import {
  resolveLanguageEngineConfig,
  type LanguageCode
} from "../language/language-registry";
import {
  createInputInterceptor,
  type InputInterceptor,
  type InterceptTarget
} from "./input-interceptor";

const DEFAULT_SELECTOR = "input[type='text'], textarea, [contenteditable='true']";

export interface EnableTransliterationOptions {
  language: LanguageCode;
  selector?: string;
  elements?: Iterable<InterceptTarget>;
  enabled?: boolean;
  rules?: TransliterationEngineOptions["rules"];
  engineFactoryOptions?: Omit<
    HybridEngineFactoryOptions,
    "scriptId" | "languageId" | "scriptBaseMap" | "languageOverlayMap"
  >;
  onEditApplied?: (edit: Edit) => void;
  onBypass?: (reason: "disabled" | "modifier" | "composition" | "unsupported-target" | "selection") => void;
}

export interface EnabledTransliteration {
  language: LanguageCode;
  attachedCount: number;
  detach(): void;
}

function resolveTargets(options: EnableTransliterationOptions): InterceptTarget[] {
  if (options.elements) {
    return Array.from(options.elements);
  }

  if (typeof document === "undefined") {
    return [];
  }

  const selector = options.selector ?? DEFAULT_SELECTOR;
  return Array.from(document.querySelectorAll(selector)) as InterceptTarget[];
}

export async function enableTransliteration(options: EnableTransliterationOptions): Promise<EnabledTransliteration> {
  const languageConfig = resolveLanguageEngineConfig(options.language);
  const targets = resolveTargets(options);
  const interceptors: InputInterceptor[] = [];

  for (const element of targets) {
    const engine = await createHybridTransliterationEngine(
      {
        expandedMap: languageConfig.expandedMap,
        rules: options.rules
      },
      {
        ...options.engineFactoryOptions,
        scriptId: languageConfig.scriptId,
        languageId: languageConfig.languageId
      }
    );

    const interceptor = createInputInterceptor({
      element,
      engine,
      enabled: options.enabled,
      onEditApplied: options.onEditApplied,
      onBypass: options.onBypass
    });
    interceptor.attach();
    interceptors.push(interceptor);
  }

  return {
    language: options.language,
    attachedCount: interceptors.length,
    detach() {
      for (const interceptor of interceptors) {
        interceptor.detach();
      }
    }
  };
}
