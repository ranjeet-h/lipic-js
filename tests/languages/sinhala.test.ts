import { describe, expect, it } from "vitest";
import sinhalaExpanded from "../../maps/sinhala/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

type MapEntry = { type: string; glyph: string; matra?: string };

function transliterate(input: string): string {
  const engine = createTransliterationEngine({
    expandedMap: sinhalaExpanded as Record<string, MapEntry>
  });
  let host = "";
  for (const ch of input) {
    const edit = engine.processChar(ch);
    host = `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
  }
  return host;
}

describe("Sinhala transliteration", () => {
  it("transliterates basic vowels", () => {
    expect(transliterate("a")).toBe("අ");
    expect(transliterate("i")).toBe("ඉ");
    expect(transliterate("u")).toBe("උ");
  });

  it("transliterates consonants", () => {
    expect(transliterate("k")).toBe("ක");
    expect(transliterate("g")).toBe("ග");
    expect(transliterate("m")).toBe("ම");
  });

  it("transliterates consonant + vowel combinations", () => {
    expect(transliterate("ka")).toBe("ක");
    expect(transliterate("ki")).toBe("කි");
    expect(transliterate("ku")).toBe("කු");
  });

  it("does not produce Devanagari characters", () => {
    const result = transliterate("namaste");
    expect(result).not.toMatch(/[\u0900-\u097F]/);
  });
});
