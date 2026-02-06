import { describe, expect, it } from "vitest";
import tamilExpanded from "../../maps/tamil/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";
import { resolveLanguageEngineConfig } from "../../src/language/language-registry";

type MapEntry = { type: string; glyph: string; matra?: string };

const allExpandedMaps: Record<string, Record<string, MapEntry>> = {};
for (const code of ["hi", "mr", "ne", "sa", "bn", "as", "gu", "pa", "ta", "te", "kn", "ml", "or"] as const) {
  allExpandedMaps[code] = resolveLanguageEngineConfig(code).expandedMap as Record<string, MapEntry>;
}

describe("Fix 2 — Transliteration Artifact Leakage", () => {
  it("ta: 'ri' entry removed (contained apostrophe artifact)", () => {
    expect((tamilExpanded as Record<string, MapEntry>)["ri"]).toBeUndefined();
  });

  it("ta: 'R' entry removed (contained apostrophe artifact)", () => {
    expect((tamilExpanded as Record<string, MapEntry>)["R"]).toBeUndefined();
  });

  it("ta: 'Rh' entry removed (contained superscript artifact)", () => {
    expect((tamilExpanded as Record<string, MapEntry>)["Rh"]).toBeUndefined();
  });

  it("no language map has glyphs with ASCII artifacts or superscripts", () => {
    const forbidden = /['"`¹²³⁴⁵⁶⁷⁸⁹⁰]/;
    for (const [lang, map] of Object.entries(allExpandedMaps)) {
      for (const [key, entry] of Object.entries(map)) {
        if (entry.type === "raw") continue;
        expect(entry.glyph, `${lang}/${key} glyph has artifact`).not.toMatch(forbidden);
        if (entry.matra) {
          expect(entry.matra, `${lang}/${key} matra has artifact`).not.toMatch(forbidden);
        }
      }
    }
  });

  it("ta: engine output for 'kri' does not contain ASCII apostrophe", () => {
    const engine = createTransliterationEngine({ expandedMap: tamilExpanded as Record<string, MapEntry> });
    const edit = engine.processText("kri");
    expect(edit.insert).not.toContain("'");
  });
});
