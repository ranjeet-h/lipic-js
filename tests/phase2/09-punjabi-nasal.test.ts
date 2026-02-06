import { describe, expect, it } from "vitest";
import punjabiExpanded from "../../maps/punjabi/phonetic.expanded.json";
import { inferScriptRuleConfig } from "../../src/engine/rules/script-config";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

type MapEntry = { type: string; glyph: string; matra?: string };
const pa = punjabiExpanded as Record<string, MapEntry>;

describe("Fix 9 — Punjabi Anusvara/Tippi Consistency", () => {
  it("pa: map 'M' glyph matches script-config anusvara", () => {
    const config = inferScriptRuleConfig(pa);
    expect(pa["M"].glyph).toBe(config.anusvara);
  });

  it("pa: 'kaM' produces valid Gurmukhi with nasal mark", () => {
    const engine = createTransliterationEngine({ expandedMap: pa });
    const edit = engine.processText("kaM");
    expect(edit.insert).toMatch(/[ੰਂ]/);
  });

  it("pa: anusvara mode uses Gurmukhi nasal mark (not Devanagari)", () => {
    const engine = createTransliterationEngine({
      expandedMap: pa,
      rules: { nasalizationMode: "anusvara" }
    });
    const edit = engine.processText("nka");
    expect(edit.insert).not.toMatch(/[\u0900-\u097F]/);
  });
});
