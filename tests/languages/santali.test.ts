import { describe, expect, it } from "vitest";
import santaliExpanded from "../../maps/santali/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

type MapEntry = { type: string; glyph: string; matra?: string };

function transliterate(input: string): string {
  const engine = createTransliterationEngine({
    expandedMap: santaliExpanded as Record<string, MapEntry>
  });
  let host = "";
  for (const ch of input) {
    const edit = engine.processChar(ch);
    host = `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
  }
  return host;
}

describe("Santali (Ol Chiki) transliteration", () => {
  it("transliterates basic vowels", () => {
    expect(transliterate("a")).toBe("ᱚ");
    expect(transliterate("i")).toBe("ᱤ");
    expect(transliterate("u")).toBe("ᱩ");
  });

  it("transliterates consonants", () => {
    expect(transliterate("k")).toBe("ᱠᱚ");
    expect(transliterate("g")).toBe("ᱜᱚ");
    expect(transliterate("m")).toBe("ᱢᱚ");
    expect(transliterate("n")).toBe("ᱱᱚ");
    expect(transliterate("p")).toBe("ᱯᱚ");
  });

  it("does not produce Devanagari characters", () => {
    const result = transliterate("ka");
    expect(result).not.toMatch(/[\u0900-\u097F]/);
  });
});
