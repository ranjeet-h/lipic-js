import devanagariBase from "../maps/devanagari/base.json";
import devanagariHunterian from "../maps/devanagari/schemes/hunterian.json";
import devanagariHarvardKyoto from "../maps/devanagari/schemes/harvard_kyoto.json";
import devanagariIAST from "../maps/devanagari/schemes/iast.json";
import devanagariISO15919 from "../maps/devanagari/schemes/iso15919.json";
import devanagariITRANS from "../maps/devanagari/schemes/itrans.json";
import devanagariSLP1 from "../maps/devanagari/schemes/slp1.json";
import devanagariVelthuis from "../maps/devanagari/schemes/velthuis.json";
import devanagariWX from "../maps/devanagari/schemes/wx.json";
import hindiPhoneticBase from "../maps/hindi/phonetic.base.json";
import hindiPhoneticExpanded from "../maps/hindi/phonetic.expanded.json";
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
    base: devanagariBase,
    schemes: {
      iast: devanagariIAST,
      iso15919: devanagariISO15919,
      harvardKyoto: devanagariHarvardKyoto,
      itrans: devanagariITRANS,
      velthuis: devanagariVelthuis,
      slp1: devanagariSLP1,
      wx: devanagariWX,
      hunterian: devanagariHunterian
    }
  },
  hindi: {
    phonetic: {
      base: hindiPhoneticBase,
      expanded: hindiPhoneticExpanded
    }
  },
  marathi: {
    phonetic: {
      base: marathiPhoneticBase,
      expanded: marathiPhoneticExpanded
    }
  }
} as const;

export {
  devanagariBase,
  devanagariHunterian,
  devanagariHarvardKyoto,
  devanagariIAST,
  devanagariISO15919,
  devanagariITRANS,
  devanagariSLP1,
  devanagariVelthuis,
  devanagariWX,
  hindiPhoneticBase,
  hindiPhoneticExpanded,
  marathiPhoneticBase,
  marathiPhoneticExpanded
};
