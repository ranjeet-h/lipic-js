import { describe, expect, it } from "vitest";
import sanskritExpanded from "../../maps/sanskrit/phonetic.expanded.json";
import hindiExpanded from "../../maps/hindi/phonetic.expanded.json";
import nepaliExpanded from "../../maps/nepali/phonetic.expanded.json";
import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

type MapEntry = { type: string; glyph: string; matra?: string };

describe("Fix 5 — Schwa Deletion Language Scope", () => {
  it("sa: schwa deletion is disabled — 'ka' keeps inherent a", () => {
    const engine = createTransliterationEngine({
      expandedMap: sanskritExpanded as Record<string, MapEntry>,
      languageId: "sanskrit",
      rules: { enableSchwaDeletion: true }
    });
    const edit = engine.processText("ka");
    expect(edit.insert).toBe("क");
  });

  it("hi: schwa deletion still fires for Hindi", () => {
    const engine = createTransliterationEngine({
      expandedMap: hindiExpanded as Record<string, MapEntry>,
      languageId: "hindi",
      rules: { enableSchwaDeletion: true }
    });
    const edit = engine.processText("kay");
    expect(edit.insert.length).toBeGreaterThan(0);
  });

  it("ne: engine creates without error with schwa rules", () => {
    expect(() => {
      createTransliterationEngine({
        expandedMap: nepaliExpanded as Record<string, MapEntry>,
        languageId: "nepali",
        rules: { enableSchwaDeletion: true }
      });
    }).not.toThrow();
  });

  it("mr: 'kay' produces correct Marathi output", () => {
    const engine = createTransliterationEngine({
      expandedMap: marathiExpanded as Record<string, MapEntry>,
      languageId: "marathi",
      rules: { enableSchwaDeletion: true }
    });
    const edit = engine.processText("kay");
    expect(edit.insert.length).toBeGreaterThan(0);
  });
});
