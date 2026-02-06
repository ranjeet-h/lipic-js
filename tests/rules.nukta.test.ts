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

describe("nukta rule", () => {
  it("supports qa alias", () => {
    expect(applyInput("qa")).toBe("क़ा");
  });

  it("supports k* trigger", () => {
    expect(applyInput("k*a")).toBe("क़ा");
  });

  it("maps f to फ़", () => {
    expect(applyInput("f")).toBe("फ़");
  });

  it("can disable nukta", () => {
    expect(applyInput("q", { enableNukta: false })).toBe("q");
  });
});
