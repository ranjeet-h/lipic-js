import { describe, expect, it } from "vitest";
import tamilExpanded from "../../maps/tamil/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

type MapEntry = { type: string; glyph: string; matra?: string };
const tam = tamilExpanded as Record<string, MapEntry>;

describe("Fix 8 — Tamil Missing Characters", () => {
  it("ta: 'zh' maps to ழ (retroflex L / zha)", () => {
    expect(tam["zh"]).toBeDefined();
    expect(tam["zh"].glyph).toBe("ழ");
  });

  it("ta: short 'e' maps to எ", () => {
    const hasShortE = Object.values(tam).some(e => e.glyph === "எ");
    expect(hasShortE).toBe(true);
  });

  it("ta: short 'o' maps to ஒ", () => {
    const hasShortO = Object.values(tam).some(e => e.glyph === "ஒ");
    expect(hasShortO).toBe(true);
  });

  it("ta: alveolar 'n' (ன) is available in map", () => {
    const hasAlveolarN = Object.values(tam).some(e => e.glyph === "ன");
    expect(hasAlveolarN).toBe(true);
  });

  it("ta: alveolar 'r' (ற) is available in map", () => {
    const hasAlveolarR = Object.values(tam).some(e => e.glyph === "ற");
    expect(hasAlveolarR).toBe(true);
  });

  it("ta: retroflex 'L' (ள) is available in map", () => {
    const hasRetroflexL = Object.values(tam).some(e => e.glyph === "ள");
    expect(hasRetroflexL).toBe(true);
  });

  it("ta: 'tamizh' produces output with ழ", () => {
    const engine = createTransliterationEngine({ expandedMap: tam });
    const edit = engine.processText("tamizh");
    expect(edit.insert).toContain("ழ");
  });
});
