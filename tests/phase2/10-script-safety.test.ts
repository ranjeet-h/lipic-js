import { describe, expect, it } from "vitest";
import tamilExpanded from "../../maps/tamil/phonetic.expanded.json";
import bengaliExpanded from "../../maps/bengali/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";
import { resolveLanguageEngineConfig } from "../../src/language/language-registry";

type MapEntry = { type: string; glyph: string; matra?: string };

describe("Fix 10 — Script Safety Allowlist", () => {
  it("ta: engine output for 'namaste' contains zero Devanagari", () => {
    const engine = createTransliterationEngine({ expandedMap: tamilExpanded as Record<string, MapEntry> });
    const edit = engine.processText("namaste");
    expect(edit.insert).not.toMatch(/[\u0900-\u097F]/);
  });

  it("bn: engine output for 'namaste' contains zero Devanagari", () => {
    const engine = createTransliterationEngine({ expandedMap: bengaliExpanded as Record<string, MapEntry> });
    const edit = engine.processText("namaste");
    expect(edit.insert).not.toMatch(/[\u0900-\u097F]/);
  });

  it("ta: engine output contains no Bengali characters", () => {
    const engine = createTransliterationEngine({ expandedMap: tamilExpanded as Record<string, MapEntry> });
    const edit = engine.processText("ka");
    expect(edit.insert).not.toMatch(/[\u0980-\u09FF]/);
  });

  it("non-Devanagari: output never contains ASCII apostrophe", () => {
    const nonDeva = ["bn", "as", "gu", "pa", "ta", "te", "kn", "ml", "or"] as const;
    for (const code of nonDeva) {
      const { expandedMap } = resolveLanguageEngineConfig(code);
      const engine = createTransliterationEngine({ expandedMap });
      for (const input of ["ka", "sha", "tra"]) {
        const edit = engine.processText(input);
        expect(edit.insert, `${code}/${input}`).not.toContain("'");
      }
    }
  });
});
