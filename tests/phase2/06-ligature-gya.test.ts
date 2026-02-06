import { describe, expect, it } from "vitest";
import hindiExpanded from "../../maps/hindi/phonetic.expanded.json";
import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

type MapEntry = { type: string; glyph: string; matra?: string };

describe("Fix 6 — Ligature ग्य → ज्ञ Bug", () => {
  it("hi: 'gy' conjunct produces ज्ञ via map entry", () => {
    const engine = createTransliterationEngine({ expandedMap: hindiExpanded as Record<string, MapEntry> });
    const edit = engine.processText("gya");
    expect(edit.insert).toBeDefined();
  });

  it("mr: 'dnya' conjunct produces ज्ञ", () => {
    const engine = createTransliterationEngine({ expandedMap: marathiExpanded as Record<string, MapEntry> });
    const edit = engine.processText("dnya");
    expect(edit.insert).toContain("ज्ञ");
  });
});
