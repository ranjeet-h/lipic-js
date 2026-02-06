import { describe, expect, it } from "vitest";

import marathiExpanded from "../maps/marathi/phonetic.expanded.json";
import { createTransliterationEngine } from "../src/engine/transliteration-engine";

type Edit = { backspace: number; insert: string };

function applyEdit(host: string, edit: Edit): string {
  return `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
}

function transliterate(input: string): string {
  const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
  let host = "";
  for (const ch of input) {
    host = applyEdit(host, engine.processChar(ch));
  }
  return host;
}

describe("marathi transliteration (extensive)", () => {
  it("covers independent vowels", () => {
    const cases: Array<[string, string]> = [
      ["a", "अ"],
      ["A", "आ"],
      ["i", "इ"],
      ["I", "ई"],
      ["u", "उ"],
      ["U", "ऊ"],
      ["ri", "ऋ"],
      ["e", "ए"],
      ["ai", "ऐ"],
      ["o", "ओ"],
      ["au", "औ"],
      ["ae", "ॲ"],
      ["aw", "ऑ"]
    ];

    for (const [input, expected] of cases) {
      expect(transliterate(input)).toBe(expected);
    }
  });

  it("covers consonants and aspirates", () => {
    const cases: Array<[string, string]> = [
      ["k", "क"], ["kh", "ख"], ["g", "ग"], ["gh", "घ"],
      ["ch", "च"], ["chh", "छ"], ["j", "ज"], ["jh", "झ"],
      ["T", "ट"], ["Th", "ठ"], ["D", "ड"], ["Dh", "ढ"],
      ["t", "त"], ["th", "थ"], ["d", "द"], ["dh", "ध"],
      ["p", "प"], ["ph", "फ"], ["b", "ब"], ["bh", "भ"],
      ["m", "म"], ["y", "य"], ["r", "र"], ["l", "ल"],
      ["v", "व"], ["sh", "श"], ["Sh", "ष"], ["s", "स"],
      ["h", "ह"], ["L", "ळ"]
    ];

    for (const [input, expected] of cases) {
      expect(transliterate(input)).toBe(expected);
    }
  });

  it("covers matra rendering after consonants", () => {
    const cases: Array<[string, string]> = [
      ["ka", "क"],
      ["kA", "का"],
      ["ki", "कि"],
      ["kI", "की"],
      ["ku", "कु"],
      ["kU", "कू"],
      ["kri", "कृ"],
      ["ke", "के"],
      ["kai", "कै"],
      ["ko", "को"],
      ["kau", "कौ"],
      ["kae", "कॅ"],
      ["kaw", "कॉ"]
    ];

    for (const [input, expected] of cases) {
      expect(transliterate(input)).toBe(expected);
    }
  });

  it("covers ligatures, nukta, and nasalization", () => {
    const cases: Array<[string, string]> = [
      ["ksh", "क्ष"],
      ["gy", "ज्ञ"],
      ["dny", "ज्ञ"],
      ["qa", "क़ा"],
      ["k*a", "क़ा"],
      ["g*a", "ग़ा"],
      ["f", "फ़"],
      ["ganga", "गंगा"],
      ["anka", "अंका"]
    ];

    for (const [input, expected] of cases) {
      expect(transliterate(input)).toBe(expected);
    }
  });

  it("covers Marathi-specific schwa outputs", () => {
    const cases: Array<[string, string]> = [
      ["kay", "काय"],
      ["kartay", "करताय"],
      ["kartos", "करतोस"]
    ];

    for (const [input, expected] of cases) {
      expect(transliterate(input)).toBe(expected);
    }
  });

  it("keeps separators and punctuation stable across words", () => {
    expect(transliterate("k h")).toBe("क ह");
    expect(transliterate("ka,ka")).toBe("क,क");
    expect(transliterate("ka.ka")).toBe("क.क");
  });

  it("supports smart backspace rewriting", () => {
    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
    let host = "";

    host = applyEdit(host, engine.processChar("k"));
    host = applyEdit(host, engine.processChar("h"));
    expect(host).toBe("ख");
    host = applyEdit(host, engine.backspace());
    expect(host).toBe("क");

    host = "";
    engine.reset();
    host = applyEdit(host, engine.processChar("k"));
    host = applyEdit(host, engine.processChar("i"));
    expect(host).toBe("कि");
    host = applyEdit(host, engine.backspace());
    expect(host).toBe("क");
  });
});
