import { describe, expect, it } from "vitest";
import { resolveLanguageEngineConfig } from "../../src/language/language-registry";

type MapEntry = { type: string; glyph: string; matra?: string };

const allExpandedMaps: Record<string, Record<string, MapEntry>> = {};
for (const code of ["hi", "mr", "ne", "sa", "bn", "as", "gu", "pa", "ta", "te", "kn", "ml", "or"] as const) {
  allExpandedMaps[code] = resolveLanguageEngineConfig(code).expandedMap as Record<string, MapEntry>;
}

describe("Fix 14 — Build-Time Map Validation", () => {
  it("validation: no empty glyphs in any shipped map", () => {
    for (const [lang, map] of Object.entries(allExpandedMaps)) {
      for (const [key, entry] of Object.entries(map)) {
        if (["vowel", "consonant", "conjunct", "mark"].includes(entry.type)) {
          expect(entry.glyph, `${lang}/${key}`).not.toBe("");
        }
      }
    }
  });

  it("validation: all glyphs are NFC-normalized", () => {
    for (const [lang, map] of Object.entries(allExpandedMaps)) {
      for (const [key, entry] of Object.entries(map)) {
        if (entry.glyph) {
          expect(entry.glyph, `${lang}/${key} glyph`).toBe(entry.glyph.normalize("NFC"));
        }
        if (entry.matra) {
          expect(entry.matra, `${lang}/${key} matra`).toBe(entry.matra.normalize("NFC"));
        }
      }
    }
  });

  it("validation: non-Devanagari maps have zero Devanagari codepoints", () => {
    const devaRange = /[\u0900-\u097F]/;
    const nonDeva: Record<string, string> = {
      bn: "bengali", as: "assamese", gu: "gujarati", pa: "punjabi",
      ta: "tamil", te: "telugu", kn: "kannada", ml: "malayalam", or: "odia"
    };
    for (const [code, name] of Object.entries(nonDeva)) {
      const map = allExpandedMaps[code];
      for (const [key, entry] of Object.entries(map)) {
        if (entry.glyph) {
          expect(entry.glyph, `${name}/${key} glyph has Devanagari`).not.toMatch(devaRange);
        }
        if (entry.matra) {
          expect(entry.matra, `${name}/${key} matra has Devanagari`).not.toMatch(devaRange);
        }
      }
    }
  });

  it("validation: no ASCII artifacts in any glyph/matra", () => {
    const forbidden = /['"`¹²³⁴⁵⁶⁷⁸⁹⁰]/;
    for (const [lang, map] of Object.entries(allExpandedMaps)) {
      for (const [key, entry] of Object.entries(map)) {
        if (entry.type === "raw" || entry.type === "word") continue;
        expect(entry.glyph, `${lang}/${key} glyph`).not.toMatch(forbidden);
        if (entry.matra) {
          expect(entry.matra, `${lang}/${key} matra`).not.toMatch(forbidden);
        }
      }
    }
  });

  it("validation: glyphs stay within target script Unicode block", () => {
    const blocks: Record<string, [number, number]> = {
      hi: [0x0900, 0x097F], mr: [0x0900, 0x097F], ne: [0x0900, 0x097F], sa: [0x0900, 0x097F],
      bn: [0x0980, 0x09FF], as: [0x0980, 0x09FF], gu: [0x0A80, 0x0AFF], pa: [0x0A00, 0x0A7F],
      ta: [0x0B80, 0x0BFF], te: [0x0C00, 0x0C7F], kn: [0x0C80, 0x0CFF], ml: [0x0D00, 0x0D7F],
      or: [0x0B00, 0x0B7F]
    };
    for (const [code, [lo, hi]] of Object.entries(blocks)) {
      const map = allExpandedMaps[code];
      for (const [key, entry] of Object.entries(map)) {
        if (entry.type === "raw" || entry.type === "word" || !entry.glyph) continue;
        for (const ch of entry.glyph) {
          const cp = ch.codePointAt(0)!;
          if (cp >= 0x0900 && cp <= 0x0DFF) {
            expect(cp, `${code}/${key} char U+${cp.toString(16)} outside block`).toBeGreaterThanOrEqual(lo);
            expect(cp, `${code}/${key} char U+${cp.toString(16)} outside block`).toBeLessThanOrEqual(hi);
          }
        }
      }
    }
  });
});
