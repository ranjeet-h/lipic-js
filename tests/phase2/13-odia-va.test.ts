import { describe, expect, it } from "vitest";
import odiaExpanded from "../../maps/odia/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

type MapEntry = { type: string; glyph: string; matra?: string };
const od = odiaExpanded as Record<string, MapEntry>;

describe("Fix 13 — Odia v Mapping", () => {
  it("or: 'v' maps to a valid Odia consonant", () => {
    expect(od["v"].glyph).toMatch(/[\u0B00-\u0B7F]/);
    expect(od["v"].glyph.length).toBeGreaterThan(0);
  });

  it("or: 'va' engine output stays in Odia block", () => {
    const engine = createTransliterationEngine({ expandedMap: od });
    const edit = engine.processText("va");
    const indicChars = edit.insert.replace(/[a-zA-Z\s]/g, "");
    expect(indicChars).toMatch(/^[\u0B00-\u0B7F]+$/);
  });
});
