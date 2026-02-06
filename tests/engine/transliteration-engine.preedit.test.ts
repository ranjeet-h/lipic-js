import { describe, expect, it } from "vitest";

import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

describe("preedit rendering", () => {
  it("morphs in-place k -> क -> kh -> ख", () => {
    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });

    expect(engine.processChar("k")).toEqual({ backspace: 0, insert: "क" });
    expect(engine.processChar("h")).toEqual({ backspace: 1, insert: "ख" });
  });

  it("commits composition on space and starts a fresh preedit", () => {
    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });

    expect(engine.processChar("k")).toEqual({ backspace: 0, insert: "क" });
    expect(engine.processChar("h")).toEqual({ backspace: 1, insert: "ख" });
    expect(engine.processChar(" ")).toEqual({ backspace: 0, insert: " " });
    expect(engine.processChar("k")).toEqual({ backspace: 0, insert: "क" });
  });
});
