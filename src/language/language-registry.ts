import hindiExpanded from "../../maps/hindi/phonetic.expanded.json";
import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";
import bengaliExpanded from "../../maps/bengali/phonetic.expanded.json";
import assameseExpanded from "../../maps/assamese/phonetic.expanded.json";
import gujaratiExpanded from "../../maps/gujarati/phonetic.expanded.json";
import punjabiExpanded from "../../maps/punjabi/phonetic.expanded.json";
import tamilExpanded from "../../maps/tamil/phonetic.expanded.json";
import teluguExpanded from "../../maps/telugu/phonetic.expanded.json";
import kannadaExpanded from "../../maps/kannada/phonetic.expanded.json";
import malayalamExpanded from "../../maps/malayalam/phonetic.expanded.json";
import odiaExpanded from "../../maps/odia/phonetic.expanded.json";
import nepaliExpanded from "../../maps/nepali/phonetic.expanded.json";
import sanskritExpanded from "../../maps/sanskrit/phonetic.expanded.json";
import type { TransliterationEngineOptions } from "../engine/transliteration-engine";

export type LanguageCode =
  | "hi"
  | "mr"
  | "ne"
  | "sa"
  | "bn"
  | "as"
  | "gu"
  | "pa"
  | "ta"
  | "te"
  | "kn"
  | "ml"
  | "or";

type LanguageStatus = "available" | "planned";

export interface LanguageRegistryItem {
  code: LanguageCode;
  name: string;
  script: string;
  status: LanguageStatus;
}

interface AvailableLanguage extends LanguageRegistryItem {
  status: "available";
  scriptId: string;
  languageId: string;
  expandedMap: TransliterationEngineOptions["expandedMap"];
}

interface PlannedLanguage extends LanguageRegistryItem {
  status: "planned";
}

type LanguageDefinition = AvailableLanguage | PlannedLanguage;

const LANGUAGE_REGISTRY: Record<LanguageCode, LanguageDefinition> = {
  hi: {
    code: "hi",
    name: "Hindi",
    script: "Devanagari",
    status: "available",
    scriptId: "devanagari",
    languageId: "hindi",
    expandedMap: hindiExpanded
  },
  mr: {
    code: "mr",
    name: "Marathi",
    script: "Devanagari",
    status: "available",
    scriptId: "devanagari",
    languageId: "marathi",
    expandedMap: marathiExpanded
  },
  ne: {
    code: "ne",
    name: "Nepali",
    script: "Devanagari",
    status: "available",
    scriptId: "devanagari",
    languageId: "nepali",
    expandedMap: nepaliExpanded
  },
  sa: {
    code: "sa",
    name: "Sanskrit",
    script: "Devanagari",
    status: "available",
    scriptId: "devanagari",
    languageId: "sanskrit",
    expandedMap: sanskritExpanded
  },
  bn: {
    code: "bn",
    name: "Bengali",
    script: "Bengali",
    status: "available",
    scriptId: "bengali",
    languageId: "bengali",
    expandedMap: bengaliExpanded
  },
  as: {
    code: "as",
    name: "Assamese",
    script: "Bengali",
    status: "available",
    scriptId: "bengali",
    languageId: "assamese",
    expandedMap: assameseExpanded
  },
  gu: {
    code: "gu",
    name: "Gujarati",
    script: "Gujarati",
    status: "available",
    scriptId: "gujarati",
    languageId: "gujarati",
    expandedMap: gujaratiExpanded
  },
  pa: {
    code: "pa",
    name: "Punjabi",
    script: "Gurmukhi",
    status: "available",
    scriptId: "gurmukhi",
    languageId: "punjabi",
    expandedMap: punjabiExpanded
  },
  ta: {
    code: "ta",
    name: "Tamil",
    script: "Tamil",
    status: "available",
    scriptId: "tamil",
    languageId: "tamil",
    expandedMap: tamilExpanded
  },
  te: {
    code: "te",
    name: "Telugu",
    script: "Telugu",
    status: "available",
    scriptId: "telugu",
    languageId: "telugu",
    expandedMap: teluguExpanded
  },
  kn: {
    code: "kn",
    name: "Kannada",
    script: "Kannada",
    status: "available",
    scriptId: "kannada",
    languageId: "kannada",
    expandedMap: kannadaExpanded
  },
  ml: {
    code: "ml",
    name: "Malayalam",
    script: "Malayalam",
    status: "available",
    scriptId: "malayalam",
    languageId: "malayalam",
    expandedMap: malayalamExpanded
  },
  or: {
    code: "or",
    name: "Odia",
    script: "Odia",
    status: "available",
    scriptId: "odia",
    languageId: "odia",
    expandedMap: odiaExpanded
  }
};

export function listLanguages(): LanguageRegistryItem[] {
  return Object.values(LANGUAGE_REGISTRY).map((lang) => ({
    code: lang.code,
    name: lang.name,
    script: lang.script,
    status: lang.status
  }));
}

export function getLanguage(code: LanguageCode): LanguageRegistryItem {
  const lang = LANGUAGE_REGISTRY[code];
  return {
    code: lang.code,
    name: lang.name,
    script: lang.script,
    status: lang.status
  };
}

export function isLanguageAvailable(code: LanguageCode): boolean {
  return LANGUAGE_REGISTRY[code].status === "available";
}

export function resolveLanguageEngineConfig(code: LanguageCode): {
  expandedMap: TransliterationEngineOptions["expandedMap"];
  scriptId: string;
  languageId: string;
} {
  const lang = LANGUAGE_REGISTRY[code];
  if (lang.status !== "available") {
    throw new Error(
      `Language "${code}" (${lang.name}) is planned but not available yet.`
    );
  }

  return {
    expandedMap: lang.expandedMap,
    scriptId: lang.scriptId,
    languageId: lang.languageId
  };
}
