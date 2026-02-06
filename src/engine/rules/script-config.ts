import type { TransliterationEntry } from "../transliteration-engine";
import type { ScriptRuleConfig } from "./types";

const SCRIPT_CONFIGS: Array<{
  scriptId: string;
  match: RegExp;
  halant: string;
  anusvara: string;
  nukta: string;
}> = [
  { scriptId: "devanagari", match: /[\u0900-\u097F]/u, halant: "्", anusvara: "ं", nukta: "़" },
  { scriptId: "bengali", match: /[\u0980-\u09FF]/u, halant: "্", anusvara: "ং", nukta: "়" },
  { scriptId: "gurmukhi", match: /[\u0A00-\u0A7F]/u, halant: "੍", anusvara: "ਂ", nukta: "਼" },
  { scriptId: "gujarati", match: /[\u0A80-\u0AFF]/u, halant: "્", anusvara: "ં", nukta: "઼" },
  { scriptId: "odia", match: /[\u0B00-\u0B7F]/u, halant: "୍", anusvara: "ଂ", nukta: "଼" },
  { scriptId: "tamil", match: /[\u0B80-\u0BFF]/u, halant: "்", anusvara: "ஂ", nukta: "" },
  { scriptId: "telugu", match: /[\u0C00-\u0C7F]/u, halant: "్", anusvara: "ం", nukta: "" },
  { scriptId: "kannada", match: /[\u0C80-\u0CFF]/u, halant: "್", anusvara: "ಂ", nukta: "಼" },
  { scriptId: "malayalam", match: /[\u0D00-\u0D7F]/u, halant: "്", anusvara: "ം", nukta: "" }
];

export function getScriptRuleConfig(scriptId: string): ScriptRuleConfig | null {
  const matched = SCRIPT_CONFIGS.find((c) => c.scriptId === scriptId);
  if (!matched) {
    return null;
  }
  return {
    scriptId: matched.scriptId,
    kind: matched.scriptId === "devanagari" ? "devanagari" : "generic",
    halant: matched.halant,
    anusvara: matched.anusvara,
    nukta: matched.nukta
  };
}

export function inferScriptRuleConfig(expandedMap: Record<string, TransliterationEntry>): ScriptRuleConfig {
  for (const entry of Object.values(expandedMap)) {
    if (entry.type !== "consonant" && entry.type !== "conjunct" && entry.type !== "vowel") {
      continue;
    }
    const glyph = `${entry.glyph ?? ""}${entry.matra ?? ""}`;
    if (!glyph) {
      continue;
    }

    const matched = SCRIPT_CONFIGS.find((candidate) => candidate.match.test(glyph));
    if (!matched) {
      continue;
    }

    return {
      scriptId: matched.scriptId,
      kind: matched.scriptId === "devanagari" ? "devanagari" : "generic",
      halant: matched.halant,
      anusvara: matched.anusvara,
      nukta: matched.nukta
    };
  }

  return {
    scriptId: "unknown",
    kind: "generic",
    halant: "्",
    anusvara: "ं",
    nukta: ""
  };
}
