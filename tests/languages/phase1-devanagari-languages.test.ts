import { describe, expect, it } from "vitest";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

import konkaniExpanded from "../../maps/konkani/phonetic.expanded.json";
import maithiliExpanded from "../../maps/maithili/phonetic.expanded.json";
import dogriExpanded from "../../maps/dogri/phonetic.expanded.json";
import bodoExpanded from "../../maps/bodo/phonetic.expanded.json";
import sindhiExpanded from "../../maps/sindhi/phonetic.expanded.json";
import chhattisgarhiExpanded from "../../maps/chhattisgarhi/phonetic.expanded.json";
import bhojpuriExpanded from "../../maps/bhojpuri/phonetic.expanded.json";
import rajasthaniExpanded from "../../maps/rajasthani/phonetic.expanded.json";
import awadhiExpanded from "../../maps/awadhi/phonetic.expanded.json";

type MapEntry = { type: string; glyph: string; matra?: string };

const PHASE1_LANGUAGES: Array<{ name: string; code: string; expandedMap: Record<string, MapEntry> }> = [
  { name: "Konkani", code: "kok", expandedMap: konkaniExpanded as Record<string, MapEntry> },
  { name: "Maithili", code: "mai", expandedMap: maithiliExpanded as Record<string, MapEntry> },
  { name: "Dogri", code: "doi", expandedMap: dogriExpanded as Record<string, MapEntry> },
  { name: "Bodo", code: "brx", expandedMap: bodoExpanded as Record<string, MapEntry> },
  { name: "Sindhi", code: "sd", expandedMap: sindhiExpanded as Record<string, MapEntry> },
  { name: "Chhattisgarhi", code: "hne", expandedMap: chhattisgarhiExpanded as Record<string, MapEntry> },
  { name: "Bhojpuri", code: "bho", expandedMap: bhojpuriExpanded as Record<string, MapEntry> },
  { name: "Rajasthani", code: "raj", expandedMap: rajasthaniExpanded as Record<string, MapEntry> },
  { name: "Awadhi", code: "awa", expandedMap: awadhiExpanded as Record<string, MapEntry> },
];

function transliterate(input: string, expandedMap: Record<string, MapEntry>): string {
  const engine = createTransliterationEngine({ expandedMap });
  let host = "";
  for (const ch of input) {
    const edit = engine.processChar(ch);
    host = `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
  }
  return host;
}

describe("Phase 1 — Devanagari-script languages", () => {
  for (const lang of PHASE1_LANGUAGES) {
    describe(lang.name, () => {
      it("transliterates basic vowels", () => {
        expect(transliterate("a", lang.expandedMap)).toBe("अ");
        expect(transliterate("i", lang.expandedMap)).toBe("इ");
        expect(transliterate("u", lang.expandedMap)).toBe("उ");
      });

      it("transliterates consonants", () => {
        expect(transliterate("k", lang.expandedMap)).toBe("क");
        expect(transliterate("kh", lang.expandedMap)).toBe("ख");
        expect(transliterate("g", lang.expandedMap)).toBe("ग");
      });

      it("transliterates consonant + vowel combinations", () => {
        expect(transliterate("ka", lang.expandedMap)).toBe("क");
        expect(transliterate("ki", lang.expandedMap)).toBe("कि");
        expect(transliterate("ku", lang.expandedMap)).toBe("कु");
      });

      it("handles conjuncts with halant", () => {
        const result = transliterate("kta", lang.expandedMap);
        expect(result).toContain("क्त");
      });

      it("produces only Devanagari output", () => {
        const result = transliterate("namaste", lang.expandedMap);
        expect(result).toMatch(/^[\u0900-\u097F]+$/);
      });
    });
  }
});
