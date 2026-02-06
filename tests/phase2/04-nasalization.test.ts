import { describe, expect, it } from "vitest";
import bengaliExpanded from "../../maps/bengali/phonetic.expanded.json";
import teluguExpanded from "../../maps/telugu/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

type MapEntry = { type: string; glyph: string; matra?: string };

describe("Fix 4 — Nasalization Cross-Script", () => {
  it("bn: anusvara mode uses Bengali anusvara ং", () => {
    const engine = createTransliterationEngine({
      expandedMap: bengaliExpanded as Record<string, MapEntry>,
      rules: { nasalizationMode: "anusvara" }
    });
    const edit = engine.processText("nka");
    expect(edit.insert).toContain("ং");
  });

  it("te: anusvara mode uses Telugu anusvara ం", () => {
    const engine = createTransliterationEngine({
      expandedMap: teluguExpanded as Record<string, MapEntry>,
      rules: { nasalizationMode: "anusvara" }
    });
    const edit = engine.processText("nka");
    expect(edit.insert).toContain("ం");
  });
});
