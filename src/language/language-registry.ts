import hindiExpanded from "../../maps/hindi/phonetic.expanded.json";
import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";
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
  ne: { code: "ne", name: "Nepali", script: "Devanagari", status: "planned" },
  sa: { code: "sa", name: "Sanskrit", script: "Devanagari", status: "planned" },
  bn: { code: "bn", name: "Bengali", script: "Bengali", status: "planned" },
  as: { code: "as", name: "Assamese", script: "Bengali", status: "planned" },
  gu: { code: "gu", name: "Gujarati", script: "Gujarati", status: "planned" },
  pa: { code: "pa", name: "Punjabi", script: "Gurmukhi", status: "planned" },
  ta: { code: "ta", name: "Tamil", script: "Tamil", status: "planned" },
  te: { code: "te", name: "Telugu", script: "Telugu", status: "planned" },
  kn: { code: "kn", name: "Kannada", script: "Kannada", status: "planned" },
  ml: { code: "ml", name: "Malayalam", script: "Malayalam", status: "planned" },
  or: { code: "or", name: "Odia", script: "Odia", status: "planned" }
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
