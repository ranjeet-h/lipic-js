import { describe, expect, it } from "vitest";
import punjabiExpanded from "../../maps/punjabi/phonetic.expanded.json";
import bengaliExpanded from "../../maps/bengali/phonetic.expanded.json";
import odiaExpanded from "../../maps/odia/phonetic.expanded.json";
import kannadaExpanded from "../../maps/kannada/phonetic.expanded.json";
import { resolveLanguageEngineConfig } from "../../src/language/language-registry";

type MapEntry = { type: string; glyph: string; matra?: string };

const allExpandedMaps: Record<string, Record<string, MapEntry>> = {};
for (const code of ["hi", "mr", "ne", "sa", "bn", "as", "gu", "pa", "ta", "te", "kn", "ml", "or"] as const) {
  allExpandedMaps[code] = resolveLanguageEngineConfig(code).expandedMap as Record<string, MapEntry>;
}

describe("Fix 3 — NFC Normalization", () => {
  it("pa: 'Rr' glyph is precomposed ੜ", () => {
    const entry = (punjabiExpanded as Record<string, MapEntry>)["Rr"];
    expect(entry.glyph).toBe("ੜ");
    expect(entry.glyph).toBe(entry.glyph.normalize("NFC"));
  });

  it("bn: 'Rr' glyph is NFC-normalized", () => {
    const entry = (bengaliExpanded as Record<string, MapEntry>)["Rr"];
    expect(entry.glyph).toBe(entry.glyph.normalize("NFC"));
  });

  it("all map glyphs are NFC-normalized", () => {
    for (const [lang, map] of Object.entries(allExpandedMaps)) {
      for (const [key, entry] of Object.entries(map)) {
        if (entry.glyph) {
          expect(entry.glyph, `${lang}/${key} glyph not NFC`).toBe(entry.glyph.normalize("NFC"));
        }
        if (entry.matra) {
          expect(entry.matra, `${lang}/${key} matra not NFC`).toBe(entry.matra.normalize("NFC"));
        }
      }
    }
  });

  it("or: nukta consonants are NFC-normalized", () => {
    for (const key of ["z", "f", "Rr", "Rh"]) {
      const entry = (odiaExpanded as Record<string, MapEntry>)[key];
      if (entry) {
        expect(entry.glyph, `or/${key}`).toBe(entry.glyph.normalize("NFC"));
      }
    }
  });

  it("kn: nukta consonants are NFC-normalized", () => {
    for (const key of ["z", "f", "Rr", "Rh"]) {
      const entry = (kannadaExpanded as Record<string, MapEntry>)[key];
      if (entry) {
        expect(entry.glyph, `kn/${key}`).toBe(entry.glyph.normalize("NFC"));
      }
    }
  });
});
