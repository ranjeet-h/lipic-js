import { describe, expect, it } from "vitest";

import marathiExpanded from "../maps/marathi/phonetic.expanded.json";
import { createTransliterationEngine } from "../src/engine/transliteration-engine";

function applyInput(input: string, options?: Parameters<typeof createTransliterationEngine>[0]["rules"]): string {
  const engine = createTransliterationEngine({ expandedMap: marathiExpanded, rules: options });
  let host = "";
  for (const ch of input) {
    const edit = engine.processChar(ch);
    host = `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
  }
  return host;
}

describe("ligature rule", () => {
  it("collapses ksh to क्ष", () => {
    expect(applyInput("ksh")).toBe("क्ष");
  });

  it("supports gy to ज्ञ", () => {
    expect(applyInput("gy")).toBe("ज्ञ");
  });

  it("collapses ty to त्य", () => {
    expect(applyInput("ty")).toBe("त्य");
  });

  it("can disable ligature collapse", () => {
    expect(applyInput("ksh", { enableLigatureCollapse: false })).toBe("क्श");
  });
});
