import { describe, expect, it } from "vitest";
import hindiExpanded from "../../maps/hindi/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

type MapEntry = { type: string; glyph: string; matra?: string };

describe("Fix 11 — Nukta Rule Completeness", () => {
  it("hi: 'z' produces ज़ via map entry", () => {
    const engine = createTransliterationEngine({ expandedMap: hindiExpanded as Record<string, MapEntry> });
    const edit = engine.processText("za");
    expect(edit.insert).toContain("ज़");
  });

  it("hi: 'qa' produces क़ा", () => {
    const engine = createTransliterationEngine({
      expandedMap: hindiExpanded as Record<string, MapEntry>,
      rules: { enableNukta: true }
    });
    const edit = engine.processText("qa");
    expect(edit.insert).toContain("\u0958");
  });

  it("hi: 'fa' produces फ़ा", () => {
    const engine = createTransliterationEngine({
      expandedMap: hindiExpanded as Record<string, MapEntry>,
      rules: { enableNukta: true }
    });
    const edit = engine.processText("fa");
    expect(edit.insert).toContain("फ़");
  });
});
