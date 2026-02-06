import devanagariBase from "../maps/devanagari/base.json";
import marathiPhoneticBase from "../maps/marathi/phonetic.base.json";
import marathiPhoneticExpanded from "../maps/marathi/phonetic.expanded.json";
export { buildTrie, walkLongest } from "./engine/trie";
export { createInputStack } from "./engine/input-stack";
export { createTransliterationEngine } from "./engine/transliteration-engine";
export { deleteAndInsert, DOMIntegrator } from "./integrations/dom-integrator";
export { createInputInterceptor } from "./integrations/input-interceptor";
export { deleteAndInsertContentEditable } from "./integrations/contenteditable-edit";
export type { EngineRuleOptions, NasalizationMode } from "./engine/rules/types";
export type { InputStack } from "./engine/input-stack";
export type {
  InputInterceptor,
  InputInterceptorOptions,
  InterceptTarget
} from "./integrations/input-interceptor";
export type {
  ContentEditableEditResult
} from "./integrations/contenteditable-edit";
export type {
  LongestMatchResult,
  TrieNode
} from "./engine/trie";
export type {
  TransliterationEngine,
  TransliterationEngineOptions,
  TransliterationEntry
} from "./engine/transliteration-engine";
export type { TextInputLike } from "./integrations/dom-integrator";

export type Edit = { backspace: number; insert: string };

export const maps = {
  devanagari: {
    base: devanagariBase
  },
  marathi: {
    phonetic: {
      base: marathiPhoneticBase,
      expanded: marathiPhoneticExpanded
    }
  }
} as const;

export { devanagariBase, marathiPhoneticBase, marathiPhoneticExpanded };
