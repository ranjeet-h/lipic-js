import { describe, expect, it } from "vitest";

import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

function applyInput(input: string): { final: string; edits: Array<{ backspace: number; insert: string }> } {
  const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
  let host = "";
  const edits: Array<{ backspace: number; insert: string }> = [];

  for (const ch of input) {
    const edit = engine.processChar(ch);
    edits.push(edit);
    host = `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
  }

  return { final: host, edits };
}

describe("transliteration engine", () => {
  it("maps k -> क", () => {
    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
    expect(engine.processChar("k")).toEqual({ backspace: 0, insert: "क" });
  });

  it("maps k then h -> ख using greedy longest match", () => {
    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
    expect(engine.processChar("k")).toEqual({ backspace: 0, insert: "क" });
    expect(engine.processChar("h")).toEqual({ backspace: 1, insert: "ख" });
  });

  it("maps n then g -> ङ with greedy rewrite", () => {
    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
    expect(engine.processChar("n")).toEqual({ backspace: 0, insert: "न" });
    expect(engine.processChar("g")).toEqual({ backspace: 1, insert: "ङ" });
  });

  it("keeps milestone-2 vowel context behavior", () => {
    const engineStart = createTransliterationEngine({ expandedMap: marathiExpanded });
    expect(engineStart.processChar("a")).toEqual({ backspace: 0, insert: "अ" });

    const engineAfterConsonantA = createTransliterationEngine({ expandedMap: marathiExpanded });
    expect(engineAfterConsonantA.processChar("k")).toEqual({ backspace: 0, insert: "क" });
    expect(engineAfterConsonantA.processChar("a")).toEqual({ backspace: 1, insert: "क" });

    const engineAfterConsonantLongA = createTransliterationEngine({ expandedMap: marathiExpanded });
    expect(engineAfterConsonantLongA.processChar("k")).toEqual({ backspace: 0, insert: "क" });
    expect(engineAfterConsonantLongA.processChar("A")).toEqual({ backspace: 1, insert: "का" });
  });

  it("passes through unknown input", () => {
    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
    expect(engine.processChar("z")).toEqual({ backspace: 0, insert: "z" });
  });

  it("is deterministic and never returns negative backspace", () => {
    const first = applyInput("kartay");
    const second = applyInput("kartay");

    expect(first.final).toBe(second.final);
    for (const edit of first.edits) {
      expect(edit.backspace).toBeGreaterThanOrEqual(0);
    }
  });
});
