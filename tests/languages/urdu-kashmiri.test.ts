import { describe, expect, it } from "vitest";
import urduExpanded from "../../maps/urdu/phonetic.expanded.json";
import kashmiriExpanded from "../../maps/kashmiri/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

type MapEntry = { type: string; glyph: string; matra?: string };

function transliterate(input: string, map: Record<string, MapEntry>): string {
  const engine = createTransliterationEngine({ expandedMap: map });
  let host = "";
  for (const ch of input) {
    const edit = engine.processChar(ch);
    host = `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
  }
  return host;
}

describe("Urdu (Perso-Arabic) transliteration", () => {
  const map = urduExpanded as Record<string, MapEntry>;

  it("transliterates basic vowels", () => {
    const result = transliterate("a", map);
    expect(result.length).toBeGreaterThan(0);
  });

  it("transliterates consonants", () => {
    const result = transliterate("k", map);
    expect(result.length).toBeGreaterThan(0);
  });

  it("does not produce Devanagari characters", () => {
    const result = transliterate("ka", map);
    expect(result).not.toMatch(/[\u0900-\u097F]/);
  });
});

describe("Kashmiri (Perso-Arabic) transliteration", () => {
  const map = kashmiriExpanded as Record<string, MapEntry>;

  it("transliterates basic vowels", () => {
    const result = transliterate("a", map);
    expect(result.length).toBeGreaterThan(0);
  });

  it("transliterates consonants", () => {
    const result = transliterate("k", map);
    expect(result.length).toBeGreaterThan(0);
  });

  it("does not produce Devanagari characters", () => {
    const result = transliterate("ka", map);
    expect(result).not.toMatch(/[\u0900-\u097F]/);
  });
});
