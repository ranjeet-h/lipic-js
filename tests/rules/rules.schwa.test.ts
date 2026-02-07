import { describe, expect, it } from "vitest";

import hindiExpanded from "../../maps/hindi/phonetic.expanded.json";
import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";
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

describe("schwa rule", () => {
  it("renders kay", () => {
    expect(applyInput("kay", marathiExpanded, undefined, "marathi")).toBe("काय");
  });

  it("renders kartay", () => {
    expect(applyInput("kartay", marathiExpanded, undefined, "marathi")).toBe("करताय");
  });

  it("renders kartos", () => {
    expect(applyInput("kartos", marathiExpanded, undefined, "marathi")).toBe("करतोस");
  });

  it("can disable schwa deletion", () => {
    expect(applyInput("kartay", marathiExpanded, { enableSchwaDeletion: false }, "marathi")).toBe("कर्तय");
  });

  it("keeps Marathi-specific endings disabled for Hindi profile", () => {
    expect(applyInput("kartay", hindiExpanded, undefined, "hindi")).toBe("कर्तय");
  });
});
