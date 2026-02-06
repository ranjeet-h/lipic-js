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
import bengaliPhoneticBase from "../maps/bengali/phonetic.base.json";
import bengaliPhoneticExpanded from "../maps/bengali/phonetic.expanded.json";
import assamesePhoneticBase from "../maps/assamese/phonetic.base.json";
import assamesePhoneticExpanded from "../maps/assamese/phonetic.expanded.json";
import gujaratiPhoneticBase from "../maps/gujarati/phonetic.base.json";
import gujaratiPhoneticExpanded from "../maps/gujarati/phonetic.expanded.json";
import punjabiPhoneticBase from "../maps/punjabi/phonetic.base.json";
import punjabiPhoneticExpanded from "../maps/punjabi/phonetic.expanded.json";
import tamilPhoneticBase from "../maps/tamil/phonetic.base.json";
import tamilPhoneticExpanded from "../maps/tamil/phonetic.expanded.json";
import teluguPhoneticBase from "../maps/telugu/phonetic.base.json";
import teluguPhoneticExpanded from "../maps/telugu/phonetic.expanded.json";
import kannadaPhoneticBase from "../maps/kannada/phonetic.base.json";
import kannadaPhoneticExpanded from "../maps/kannada/phonetic.expanded.json";
import malayalamPhoneticBase from "../maps/malayalam/phonetic.base.json";
import malayalamPhoneticExpanded from "../maps/malayalam/phonetic.expanded.json";
import odiaPhoneticBase from "../maps/odia/phonetic.base.json";
import odiaPhoneticExpanded from "../maps/odia/phonetic.expanded.json";
import nepaliPhoneticBase from "../maps/nepali/phonetic.base.json";
import nepaliPhoneticExpanded from "../maps/nepali/phonetic.expanded.json";
import sanskritPhoneticBase from "../maps/sanskrit/phonetic.base.json";
import sanskritPhoneticExpanded from "../maps/sanskrit/phonetic.expanded.json";
export { buildTrie, walkLongest } from "./engine/trie";
export { createWasmTrie } from "./engine/wasm-trie";
export { createInputStack } from "./engine/input-stack";
export { createTransliterationEngine } from "./engine/transliteration-engine";
export { getEngineRuntime } from "./engine/transliteration-engine";
export { createHybridTransliterationEngine } from "./engine/hybrid-transliteration-engine";
export { createWasmTransliterationEngine } from "./engine/wasm-transliteration-engine";
export {
  compileWasmLanguageOverlayPack,
  compileWasmLanguagePack,
  compileWasmScriptBasePack,
  createWasmEngineFromLanguagePack,
  createWasmEngineFromLanguagePacks,
  inspectWasmLanguagePack
} from "./engine/wasm-language-pack";
export { deleteAndInsert, DOMIntegrator } from "./integrations/dom-integrator";
export { createInputInterceptor } from "./integrations/input-interceptor";
export { enableTransliteration } from "./integrations/enable-transliteration";
export { deleteAndInsertContentEditable } from "./integrations/contenteditable-edit";
export {
  getLanguage,
  isLanguageAvailable,
  listLanguages,
  resolveLanguageEngineConfig
} from "./language/language-registry";
export type { EngineRuleOptions, NasalizationMode } from "./engine/rules/types";
export type { InputStack } from "./engine/input-stack";
export type {
  InputInterceptor,
  InputInterceptorOptions,
  InterceptTarget
} from "./integrations/input-interceptor";
export type {
  EnableTransliterationOptions,
  EnabledTransliteration
} from "./integrations/enable-transliteration";
export type {
  LanguageCode,
  LanguageRegistryItem
} from "./language/language-registry";
export type {
  ContentEditableEditResult
} from "./integrations/contenteditable-edit";
export type {
  LongestMatchResult,
  TrieNode
} from "./engine/trie";
export type { TrieWalker, WasmTrieFactoryOptions } from "./engine/wasm-trie";
export type { HybridEngineFactoryOptions } from "./engine/hybrid-transliteration-engine";
export type {
  LanguagePackSummary,
  WasmLanguagePackFactoryOptions
} from "./engine/wasm-language-pack";
export type {
  EngineRuntime,
  RuntimeAwareTransliterationEngine,
  TransliterationEngine,
  TransliterationEngineOptions,
  TransliterationEntry
} from "./engine/transliteration-engine";
export type { WasmEngineFactoryOptions } from "./engine/wasm-transliteration-engine";
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
  },
  bengali: {
    phonetic: {
      base: bengaliPhoneticBase,
      expanded: bengaliPhoneticExpanded
    }
  },
  assamese: {
    phonetic: {
      base: assamesePhoneticBase,
      expanded: assamesePhoneticExpanded
    }
  },
  gujarati: {
    phonetic: {
      base: gujaratiPhoneticBase,
      expanded: gujaratiPhoneticExpanded
    }
  },
  punjabi: {
    phonetic: {
      base: punjabiPhoneticBase,
      expanded: punjabiPhoneticExpanded
    }
  },
  tamil: {
    phonetic: {
      base: tamilPhoneticBase,
      expanded: tamilPhoneticExpanded
    }
  },
  telugu: {
    phonetic: {
      base: teluguPhoneticBase,
      expanded: teluguPhoneticExpanded
    }
  },
  kannada: {
    phonetic: {
      base: kannadaPhoneticBase,
      expanded: kannadaPhoneticExpanded
    }
  },
  malayalam: {
    phonetic: {
      base: malayalamPhoneticBase,
      expanded: malayalamPhoneticExpanded
    }
  },
  odia: {
    phonetic: {
      base: odiaPhoneticBase,
      expanded: odiaPhoneticExpanded
    }
  },
  nepali: {
    phonetic: {
      base: nepaliPhoneticBase,
      expanded: nepaliPhoneticExpanded
    }
  },
  sanskrit: {
    phonetic: {
      base: sanskritPhoneticBase,
      expanded: sanskritPhoneticExpanded
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
  marathiPhoneticExpanded,
  bengaliPhoneticBase,
  bengaliPhoneticExpanded,
  assamesePhoneticBase,
  assamesePhoneticExpanded,
  gujaratiPhoneticBase,
  gujaratiPhoneticExpanded,
  punjabiPhoneticBase,
  punjabiPhoneticExpanded,
  tamilPhoneticBase,
  tamilPhoneticExpanded,
  teluguPhoneticBase,
  teluguPhoneticExpanded,
  kannadaPhoneticBase,
  kannadaPhoneticExpanded,
  malayalamPhoneticBase,
  malayalamPhoneticExpanded,
  odiaPhoneticBase,
  odiaPhoneticExpanded,
  nepaliPhoneticBase,
  nepaliPhoneticExpanded,
  sanskritPhoneticBase,
  sanskritPhoneticExpanded
};
