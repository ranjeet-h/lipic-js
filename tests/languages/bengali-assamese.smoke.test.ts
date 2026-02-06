import { describe, expect, it } from "vitest";

import bengaliExpanded from "../../maps/bengali/phonetic.expanded.json";
import assameseExpanded from "../../maps/assamese/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

type Edit = { backspace: number; insert: string };

function applyEdit(host: string, edit: Edit): string {
  return `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
}

function transliterate(input: string, map: Record<string, { type: string; glyph: string; matra?: string }>): string {
  const engine = createTransliterationEngine({ expandedMap: map });
  let host = "";
  for (const ch of input) {
    host = applyEdit(host, engine.processChar(ch));
  }
  return host;
}

describe("bengali transliteration", () => {
  it("covers core vowels and consonants", () => {
    expect(transliterate("a", bengaliExpanded)).toBe("অ");
    expect(transliterate("A", bengaliExpanded)).toBe("আ");
    expect(transliterate("k", bengaliExpanded)).toBe("ক");
    expect(transliterate("kh", bengaliExpanded)).toBe("খ");
    expect(transliterate("Sh", bengaliExpanded)).toBe("ষ");
  });
});

describe("assamese transliteration", () => {
  it("covers Assamese-specific ra/va forms", () => {
    expect(transliterate("ra", assameseExpanded)).toBe("ৰ");
    expect(transliterate("rA", assameseExpanded)).toBe("ৰা");
    expect(transliterate("va", assameseExpanded)).toBe("ৱ");
    expect(transliterate("vA", assameseExpanded)).toBe("ৱা");
  });
});
