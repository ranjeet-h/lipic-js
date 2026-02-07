import { describe, expect, it } from "vitest";

import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";
import punjabiExpanded from "../../maps/punjabi/phonetic.expanded.json";
import tamilExpanded from "../../maps/tamil/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

function applyInput(
  input: string,
  map: Record<string, { type: string; glyph: string; matra?: string }>,
  options?: Parameters<typeof createTransliterationEngine>[0]["rules"],
  languageId?: string
): string {
  const engine = createTransliterationEngine({ expandedMap: map, rules: options, languageId });
  let host = "";
  for (const ch of input) {
    const edit = engine.processChar(ch);
    host = `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
  }
  return host;
}

describe("nasalization rule", () => {
  it("renders ganga with anusvara by default", () => {
    expect(applyInput("ganga", marathiExpanded)).toBe("गंगा");
  });

  it("renders anka with anusvara by default", () => {
    expect(applyInput("anka", marathiExpanded)).toBe("अंका");
  });

  it("supports panchamakshar mode", () => {
    expect(applyInput("anka", marathiExpanded, { nasalizationMode: "panchamakshar" })).toBe("अङ्क");
  });

  it("defaults Sanskrit to panchamakshar", () => {
    expect(applyInput("anka", marathiExpanded, undefined, "sanskrit")).toBe("अङ्क");
  });

  it("uses tippi for Punjabi short-vowel clusters", () => {
    const out = applyInput("anka", punjabiExpanded);
    expect(out).toContain("ੰ");
    expect(out).not.toContain("ਂ");
  });

  it("uses bindi for Punjabi long-vowel clusters", () => {
    const out = applyInput("aanka", punjabiExpanded);
    expect(out).toContain("ਂ");
    expect(out).not.toContain("ੰ");
  });

  it("avoids Tamil anusvara substitution by default", () => {
    const out = applyInput("anka", tamilExpanded, undefined, "tamil");
    expect(out).not.toContain("ஂ");
    expect(out).toContain("ங");
  });
});
