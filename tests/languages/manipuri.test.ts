import { describe, expect, it } from "vitest";
import manipuriExpanded from "../../maps/manipuri/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

type MapEntry = { type: string; glyph: string; matra?: string };

function transliterate(input: string): string {
  const engine = createTransliterationEngine({
    expandedMap: manipuriExpanded as Record<string, MapEntry>
  });
  let host = "";
  for (const ch of input) {
    const edit = engine.processChar(ch);
    host = `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
  }
  return host;
}

describe("Manipuri (Meitei Mayek) transliteration", () => {
  it("transliterates basic vowels", () => {
    expect(transliterate("a")).toBe("ꯑ");
    expect(transliterate("i")).toBe("ꯏ");
    expect(transliterate("u")).toBe("ꯎ");
  });

  it("transliterates consonants", () => {
    expect(transliterate("k")).toBe("ꯀ");
    expect(transliterate("g")).toBe("ꯒ");
    expect(transliterate("m")).toBe("ꯃ");
    expect(transliterate("n")).toBe("ꯅ");
    expect(transliterate("p")).toBe("ꯄ");
  });

  it("transliterates consonant + vowel combinations", () => {
    expect(transliterate("ka")).toBe("ꯀ");
    expect(transliterate("ki")).toBe("ꯀꯤ");
    expect(transliterate("ku")).toBe("ꯀꯨ");
  });

  it("produces only Meitei Mayek output for basic input", () => {
    const result = transliterate("namaste");
    for (const ch of result) {
      const cp = ch.codePointAt(0)!;
      expect(cp >= 0xABC0 && cp <= 0xABFF).toBe(true);
    }
  });

  it("does not produce Devanagari characters", () => {
    const result = transliterate("ka");
    expect(result).not.toMatch(/[\u0900-\u097F]/);
  });
});
