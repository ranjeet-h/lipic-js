import { describe, expect, it } from "vitest";

import assameseExpanded from "../../maps/assamese/phonetic.expanded.json";
import bengaliExpanded from "../../maps/bengali/phonetic.expanded.json";
import gujaratiExpanded from "../../maps/gujarati/phonetic.expanded.json";
import hindiExpanded from "../../maps/hindi/phonetic.expanded.json";
import kannadaExpanded from "../../maps/kannada/phonetic.expanded.json";
import malayalamExpanded from "../../maps/malayalam/phonetic.expanded.json";
import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";
import nepaliExpanded from "../../maps/nepali/phonetic.expanded.json";
import odiaExpanded from "../../maps/odia/phonetic.expanded.json";
import punjabiExpanded from "../../maps/punjabi/phonetic.expanded.json";
import sanskritExpanded from "../../maps/sanskrit/phonetic.expanded.json";
import tamilExpanded from "../../maps/tamil/phonetic.expanded.json";
import teluguExpanded from "../../maps/telugu/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

type MapEntry = { type: string; glyph: string; matra?: string };
type Edit = { backspace: number; insert: string };
type ScriptProfile = { ranges: RegExp[]; excludeDevanagari: boolean };

function applyEdit(host: string, edit: Edit): string {
  return `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
}

function transliterate(input: string, map: Record<string, MapEntry>): string {
  const engine = createTransliterationEngine({ expandedMap: map });
  let host = "";
  for (const ch of input) {
    host = applyEdit(host, engine.processChar(ch));
  }
  return host;
}

function hasDevanagari(text: string): boolean {
  return /[\u0900-\u097F]/u.test(text);
}

const SCRIPT_PROFILES: Record<string, ScriptProfile> = {
  hi: { ranges: [/[\u0900-\u097F]/u], excludeDevanagari: false },
  mr: { ranges: [/[\u0900-\u097F]/u], excludeDevanagari: false },
  ne: { ranges: [/[\u0900-\u097F]/u], excludeDevanagari: false },
  sa: { ranges: [/[\u0900-\u097F]/u], excludeDevanagari: false },
  bn: { ranges: [/[\u0980-\u09FF]/u], excludeDevanagari: true },
  as: { ranges: [/[\u0980-\u09FF]/u], excludeDevanagari: true },
  gu: { ranges: [/[\u0A80-\u0AFF]/u], excludeDevanagari: true },
  pa: { ranges: [/[\u0A00-\u0A7F]/u], excludeDevanagari: true },
  ta: { ranges: [/[\u0B80-\u0BFF]/u], excludeDevanagari: true },
  te: { ranges: [/[\u0C00-\u0C7F]/u], excludeDevanagari: true },
  kn: { ranges: [/[\u0C80-\u0CFF]/u], excludeDevanagari: true },
  ml: { ranges: [/[\u0D00-\u0D7F]/u], excludeDevanagari: true },
  or: { ranges: [/[\u0B00-\u0B7F]/u], excludeDevanagari: true }
};

describe("all language maps", () => {
  const cases: Array<[string, Record<string, MapEntry>]> = [
    ["hi", hindiExpanded],
    ["mr", marathiExpanded],
    ["ne", nepaliExpanded],
    ["sa", sanskritExpanded],
    ["bn", bengaliExpanded],
    ["as", assameseExpanded],
    ["gu", gujaratiExpanded],
    ["pa", punjabiExpanded],
    ["ta", tamilExpanded],
    ["te", teluguExpanded],
    ["kn", kannadaExpanded],
    ["ml", malayalamExpanded],
    ["or", odiaExpanded]
  ];

  it("has non-empty expanded maps", () => {
    for (const [code, map] of cases) {
      expect(Object.keys(map).length, `map ${code}`).toBeGreaterThan(30);
    }
  });

  it("produces output for basic transliteration tokens", () => {
    for (const [code, map] of cases) {
      expect(transliterate("k", map).length, `k in ${code}`).toBeGreaterThan(0);
      expect(transliterate("kA", map).length, `kA in ${code}`).toBeGreaterThan(0);
      expect(transliterate("namaste", map).length, `namaste in ${code}`).toBeGreaterThan(0);
    }
  });

  it("prevents Devanagari leakage in non-Devanagari language output", () => {
    const nonDevanagariCases = cases.filter(([code]) => !["hi", "mr", "ne", "sa"].includes(code));
    for (const [code, map] of nonDevanagariCases) {
      const output = transliterate("kta qa g*a anka", map);
      expect(hasDevanagari(output), `no Devanagari leakage in ${code}: ${output}`).toBe(false);
    }
  });

  it("produces script-correct output across all languages", () => {
    for (const [code, map] of cases) {
      const sample = transliterate("kA namaste", map);
      const profile = SCRIPT_PROFILES[code];
      const hasExpectedScript = profile.ranges.some((range) => range.test(sample));
      expect(hasExpectedScript, `expected script chars for ${code}: ${sample}`).toBe(true);
      if (profile.excludeDevanagari) {
        expect(hasDevanagari(sample), `unexpected Devanagari chars in ${code}: ${sample}`).toBe(false);
      }
    }
  });
});
