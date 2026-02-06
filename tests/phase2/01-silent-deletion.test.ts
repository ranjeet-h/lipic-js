import { describe, expect, it } from "vitest";
import punjabiExpanded from "../../maps/punjabi/phonetic.expanded.json";
import tamilExpanded from "../../maps/tamil/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";
import { resolveLanguageEngineConfig } from "../../src/language/language-registry";

type MapEntry = { type: string; glyph: string; matra?: string };

const allExpandedMaps: Record<string, Record<string, MapEntry>> = {};
for (const code of ["hi", "mr", "ne", "sa", "bn", "as", "gu", "pa", "ta", "te", "kn", "ml", "or"] as const) {
  allExpandedMaps[code] = resolveLanguageEngineConfig(code).expandedMap as Record<string, MapEntry>;
}

describe("Fix 1 — Silent Deletion (Empty Glyph Entries)", () => {
  it("pa: 'ri' entry removed — does not exist in map", () => {
    expect((punjabiExpanded as Record<string, MapEntry>)["ri"]).toBeUndefined();
  });

  it("pa: 'R' entry removed — does not exist in map", () => {
    expect((punjabiExpanded as Record<string, MapEntry>)["R"]).toBeUndefined();
  });

  it("pa: 'Sh' has non-empty glyph", () => {
    const entry = (punjabiExpanded as Record<string, MapEntry>)["Sh"];
    expect(entry).toBeDefined();
    expect(entry.glyph).toBe("ਸ਼");
  });

  it("ta: 'MM' entry removed — does not exist in map", () => {
    expect((tamilExpanded as Record<string, MapEntry>)["MM"]).toBeUndefined();
  });

  it("no language map has empty glyph for vowel/consonant/conjunct/mark entries", () => {
    for (const [lang, map] of Object.entries(allExpandedMaps)) {
      for (const [key, entry] of Object.entries(map)) {
        if (["vowel", "consonant", "conjunct", "mark"].includes(entry.type)) {
          expect(entry.glyph, `${lang}/${key} has empty glyph`).not.toBe("");
        }
      }
    }
  });
});
