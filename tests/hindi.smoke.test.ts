import { describe, expect, it } from "vitest";

import hindiExpanded from "../maps/hindi/phonetic.expanded.json";
import { createTransliterationEngine } from "../src/engine/transliteration-engine";

type Edit = { backspace: number; insert: string };

function applyEdit(host: string, edit: Edit): string {
  return `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
}

function transliterate(input: string): string {
  const engine = createTransliterationEngine({ expandedMap: hindiExpanded });
  let host = "";
  for (const ch of input) {
    host = applyEdit(host, engine.processChar(ch));
  }
  return host;
}

describe("hindi transliteration", () => {
  it("covers vowels and consonants", () => {
    expect(transliterate("a")).toBe("अ");
    expect(transliterate("A")).toBe("आ");
    expect(transliterate("ri")).toBe("ऋ");
    expect(transliterate("k")).toBe("क");
    expect(transliterate("kh")).toBe("ख");
    expect(transliterate("Sh")).toBe("ष");
  });

  it("covers conjunct aliases", () => {
    expect(transliterate("ksh")).toBe("क्ष");
    expect(transliterate("gy")).toBe("ज्ञ");
    expect(transliterate("dny")).toBe("ज्ञ");
    expect(transliterate("tr")).toBe("त्र");
    expect(transliterate("shr")).toBe("श्र");
  });

  it("covers nuqta letters policy", () => {
    expect(transliterate("za")).toBe("ज़");
    expect(transliterate("fa")).toBe("फ़");
    expect(transliterate("qa")).toBe("क़ा");
    expect(transliterate("k*a")).toBe("क़ा");
    expect(transliterate("g*a")).toBe("ग़ा");
  });

  it("supports high-value dictionary words from dataset", () => {
    const cases: Array<[string, string]> = [
      ["namaste", "नमस्ते"],
      ["bharat", "भारत"],
      ["gyan", "ज्ञान"],
      ["rishi", "ऋषि"],
      ["mausam", "मौसम"],
      ["prithvi", "पृथ्वी"],
      ["waqt", "वक़्त"],
      ["zindagi", "ज़िंदगी"],
      ["ishq", "इश्क़"],
      ["swagat", "स्वागत"]
    ];

    for (const [input, expected] of cases) {
      expect(transliterate(input)).toBe(expected);
    }
  });
});
