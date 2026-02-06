import { describe, expect, it } from "vitest";

import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

function applyInput(input: string, options?: Parameters<typeof createTransliterationEngine>[0]["rules"]): string {
  const engine = createTransliterationEngine({ expandedMap: marathiExpanded, rules: options });
  let host = "";
  for (const ch of input) {
    const edit = engine.processChar(ch);
    host = `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
  }
  return host;
}

describe("schwa rule", () => {
  it("renders kay", () => {
    expect(applyInput("kay")).toBe("काय");
  });

  it("renders kartay", () => {
    expect(applyInput("kartay")).toBe("करताय");
  });

  it("renders kartos", () => {
    expect(applyInput("kartos")).toBe("करतोस");
  });

  it("can disable schwa deletion", () => {
    expect(applyInput("kartay", { enableSchwaDeletion: false })).toBe("कर्तय");
  });
});
