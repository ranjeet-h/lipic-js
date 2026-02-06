import { describe, expect, it } from "vitest";

import devanagariBase from "../../maps/devanagari/base.json";
import hindiExpanded from "../../maps/hindi/phonetic.expanded.json";
import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";

function asSet(values: string[]): Set<string> {
  return new Set(values);
}

describe("devanagari base coverage for language packs", () => {
  it("contains common script primitives needed by Hindi/Marathi/Nepali/Sanskrit", () => {
    const consonants = asSet(devanagariBase.consonants);
    const vowels = asSet(devanagariBase.vowelsIndependent);
    const matras = asSet(devanagariBase.vowelMatras);

    const requiredConsonants = ["क", "ग", "च", "ज", "ट", "ड", "त", "द", "प", "ब", "न", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह"];
    const requiredVowels = ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ"];
    const requiredMatras = ["ा", "ि", "ी", "ु", "ू", "ृ", "े", "ै", "ो", "ौ"];

    for (const glyph of requiredConsonants) expect(consonants.has(glyph)).toBe(true);
    for (const glyph of requiredVowels) expect(vowels.has(glyph)).toBe(true);
    for (const glyph of requiredMatras) expect(matras.has(glyph)).toBe(true);

    expect(devanagariBase.halant).toBe("्");
    expect(devanagariBase.marks.anusvara).toBe("ं");
    expect(devanagariBase.marks.chandrabindu).toBe("ँ");
    expect(devanagariBase.marks.visarga).toBe("ः");
  });

  it("contains Marathi-specific additions in base inventory", () => {
    expect(devanagariBase.consonants).toContain("ळ");
    expect(devanagariBase.vowelsIndependent).toContain("ॲ");
    expect(devanagariBase.vowelsIndependent).toContain("ऑ");
    expect(devanagariBase.vowelMatras).toContain("ॅ");
    expect(devanagariBase.vowelMatras).toContain("ॉ");
  });

  it("keeps Marathi expanded map glyphs in Devanagari block", () => {
    const glyphs: string[] = [];
    for (const entry of Object.values(marathiExpanded)) {
      if (typeof entry.glyph === "string") glyphs.push(entry.glyph);
      if (typeof entry.matra === "string" && entry.matra.length > 0) glyphs.push(entry.matra);
    }

    for (const glyph of glyphs) {
      for (const ch of glyph) {
        const cp = ch.codePointAt(0) ?? 0;
        expect(cp >= 0x0900 && cp <= 0x097f).toBe(true);
      }
    }
  });

  it("keeps Hindi expanded map glyphs in Devanagari block", () => {
    const glyphs: string[] = [];
    for (const entry of Object.values(hindiExpanded)) {
      if (typeof entry.glyph === "string") glyphs.push(entry.glyph);
      if (typeof entry.matra === "string" && entry.matra.length > 0) glyphs.push(entry.matra);
    }

    for (const glyph of glyphs) {
      for (const ch of glyph) {
        const cp = ch.codePointAt(0) ?? 0;
        expect(cp >= 0x0900 && cp <= 0x097f).toBe(true);
      }
    }
  });
});
