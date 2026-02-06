import { describe, expect, it } from "vitest";
import tamilExpanded from "../../maps/tamil/phonetic.expanded.json";
import { resolveLanguageEngineConfig } from "../../src/language/language-registry";

type MapEntry = { type: string; glyph: string; matra?: string };

const allExpandedMaps: Record<string, Record<string, MapEntry>> = {};
for (const code of ["hi", "mr", "ne", "sa", "bn", "as", "gu", "pa", "ta", "te", "kn", "ml", "or"] as const) {
  allExpandedMaps[code] = resolveLanguageEngineConfig(code).expandedMap as Record<string, MapEntry>;
}

describe("Fix 12 — Generator Array Variant Selection", () => {
  it("generator: Tamil glyphs do not contain transliteration artifacts", () => {
    for (const [key, entry] of Object.entries(tamilExpanded as Record<string, MapEntry>)) {
      if (entry.type === "raw") continue;
      expect(entry.glyph, `ta/${key} glyph`).not.toMatch(/['"³²¹]/);
      if (entry.matra) {
        expect(entry.matra, `ta/${key} matra`).not.toMatch(/['"³²¹]/);
      }
    }
  });

  it("generator: no map entry has Latin letters in glyphs", () => {
    for (const [lang, map] of Object.entries(allExpandedMaps)) {
      for (const [key, entry] of Object.entries(map)) {
        if (entry.type === "raw" || entry.type === "word") continue;
        expect(entry.glyph, `${lang}/${key}`).not.toMatch(/[a-zA-Z]/);
      }
    }
  });
});
