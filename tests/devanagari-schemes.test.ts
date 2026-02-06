import { describe, expect, it } from "vitest";

import hunterian from "../maps/devanagari/schemes/hunterian.json";
import harvardKyoto from "../maps/devanagari/schemes/harvard_kyoto.json";
import iast from "../maps/devanagari/schemes/iast.json";
import iso15919 from "../maps/devanagari/schemes/iso15919.json";
import itrans from "../maps/devanagari/schemes/itrans.json";
import slp1 from "../maps/devanagari/schemes/slp1.json";
import velthuis from "../maps/devanagari/schemes/velthuis.json";
import wx from "../maps/devanagari/schemes/wx.json";
import { createTransliterationEngine } from "../src/engine/transliteration-engine";

type Edit = { backspace: number; insert: string };

function applyEdit(host: string, edit: Edit): string {
  return `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
}

function transliterate(input: string, expandedMap: Record<string, { type: string; glyph: string; matra?: string }>): string {
  const engine = createTransliterationEngine({ expandedMap });
  let host = "";
  for (const ch of input) {
    host = applyEdit(host, engine.processChar(ch));
  }
  return host;
}

describe("devanagari transliteration schemes", () => {
  it("supports IAST examples", () => {
    expect(transliterate("ā", iast)).toBe("आ");
    expect(transliterate("kṣa", iast)).toBe("क्ष");
    expect(transliterate("za", iast)).toBe("ज़");
  });

  it("supports ISO 15919 examples", () => {
    expect(transliterate("r̥", iso15919)).toBe("ऋ");
    expect(transliterate("ṭha", iso15919)).toBe("ठ");
    expect(transliterate("k͟ha", iso15919)).toBe("ख़");
  });

  it("supports Harvard-Kyoto examples", () => {
    expect(transliterate("A", harvardKyoto)).toBe("आ");
    expect(transliterate("kSa", harvardKyoto)).toBe("क्ष");
    expect(transliterate("jJa", harvardKyoto)).toBe("ज्ञ");
  });

  it("supports ITRANS examples", () => {
    expect(transliterate("RRi", itrans)).toBe("ऋ");
    expect(transliterate("kSha", itrans)).toBe("क्ष");
    expect(transliterate("qa", itrans)).toBe("क़");
  });

  it("supports Velthuis examples", () => {
    expect(transliterate("aa", velthuis)).toBe("आ");
    expect(transliterate("ta", velthuis)).toBe("त");
    expect(transliterate("cha", velthuis)).toBe("छ");
  });

  it("supports SLP1 examples", () => {
    expect(transliterate("f", slp1)).toBe("ऋ");
    expect(transliterate("kza", slp1)).toBe("क्ष");
    expect(transliterate("jYa", slp1)).toBe("ज्ञ");
  });

  it("supports WX examples", () => {
    expect(transliterate("q", wx)).toBe("ऋ");
    expect(transliterate("kRa", wx)).toBe("क्ष");
    expect(transliterate("jZa", wx)).toBe("ज़");
  });

  it("supports Hunterian examples", () => {
    expect(transliterate("k", hunterian)).toBe("क");
    expect(transliterate("ksh", hunterian)).toBe("क्ष");
    expect(transliterate("z", hunterian)).toBe("ज़");
  });
});
