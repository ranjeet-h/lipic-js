import { describe, expect, it } from "vitest";

import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

type Edit = { backspace: number; insert: string };

function applyEdit(host: string, edit: Edit): string {
  return `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
}

describe("transliteration engine backspace + state API", () => {
  it("k h backspace -> क", () => {
    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
    let host = "";

    host = applyEdit(host, engine.processChar("k"));
    host = applyEdit(host, engine.processChar("h"));
    expect(host).toBe("ख");

    host = applyEdit(host, engine.backspace());
    expect(host).toBe("क");
  });

  it("k i backspace -> क", () => {
    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
    let host = "";

    host = applyEdit(host, engine.processChar("k"));
    host = applyEdit(host, engine.processChar("i"));
    expect(host).toBe("कि");

    host = applyEdit(host, engine.backspace());
    expect(host).toBe("क");
  });

  it("backspace on empty is no-op", () => {
    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
    expect(engine.backspace()).toEqual({ backspace: 0, insert: "" });
  });

  it("commit on empty is no-op", () => {
    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
    expect(engine.commit()).toEqual({ backspace: 0, insert: "" });
  });

  it("commit clears composition state for fresh input", () => {
    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
    let host = "";

    host = applyEdit(host, engine.processChar("k"));
    host = applyEdit(host, engine.processChar("h"));
    expect(host).toBe("ख");

    expect(engine.commit()).toEqual({ backspace: 0, insert: "" });

    host = applyEdit(host, engine.processChar("k"));
    expect(host).toBe("खक");
  });

  it("reset clears state and subsequent typing behaves like new engine", () => {
    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });

    engine.processChar("k");
    engine.processChar("h");
    engine.reset();

    expect(engine.processChar("k")).toEqual({ backspace: 0, insert: "क" });
  });

  it("is deterministic for same sequence and never returns negative backspace", () => {
    const run = (): Edit[] => {
      const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
      return [
        engine.processChar("k"),
        engine.processChar("i"),
        engine.backspace(),
        engine.processChar("h"),
        engine.backspace()
      ];
    };

    const first = run();
    const second = run();
    expect(first).toEqual(second);

    for (const edit of first) {
      expect(edit.backspace).toBeGreaterThanOrEqual(0);
    }
  });
});
