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

describe("nasalization rule", () => {
  it("renders ganga with anusvara by default", () => {
    expect(applyInput("ganga")).toBe("गंगा");
  });

  it("renders anka with anusvara by default", () => {
    expect(applyInput("anka")).toBe("अंका");
  });

  it("supports panchamakshar mode", () => {
    expect(applyInput("anka", { nasalizationMode: "panchamakshar" })).toBe("अङ्क");
  });
});
