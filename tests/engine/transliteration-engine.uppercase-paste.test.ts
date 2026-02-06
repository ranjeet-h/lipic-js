import { describe, expect, it } from "vitest";

import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

type Edit = { backspace: number; insert: string };

function applyEdit(host: string, edit: Edit): string {
  return `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
}

describe("transliteration engine - uppercase and paste support", () => {
  describe("uppercase support", () => {
    it("maps supported uppercase aliases", () => {
      const cases: Array<[string, string]> = [
        ["R", "र"],
        ["K", "क"],
        ["G", "ग"],
        ["J", "ज"],
        ["P", "प"],
        ["V", "व"],
        ["Y", "य"],
        ["E", "ए"],
        ["I", "ई"],
        ["O", "ओ"],
        ["U", "ऊ"]
      ];

      for (const [input, expected] of cases) {
        const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
        expect(engine.processChar(input)).toEqual({ backspace: 0, insert: expected });
      }
    });

    it("keeps unknown uppercase characters as raw passthrough", () => {
      const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
      expect(engine.processChar("C")).toEqual({ backspace: 0, insert: "C" });
    });

    it("supports mixed-case word transliteration deterministically", () => {
      const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
      let host = "";

      for (const ch of "Ranjeet") {
        host = applyEdit(host, engine.processChar(ch));
      }

      expect(host).toBe("रंजीत");
    });
  });

  describe("paste support (processText)", () => {
    it("processes multi-character strings", () => {
      const engine = createTransliterationEngine({ expandedMap: marathiExpanded });

      const result1 = engine.processText("namaste");
      expect(result1).toEqual({ backspace: 0, insert: "नमस्ते" });

      const result2 = engine.processText("pune");
      expect(result2.insert).toBe("पुने");
      expect(result2.backspace).toBe(result1.insert.length);
    });

    it("handles mixed case in pasted text", () => {
      const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
      const result = engine.processText("My Name is RANJEET");
      const expected = "My Name is RANJEET"
        .split(/(\s+|[.,!?;:()[\]{}'"-])/)
        .map((chunk) => {
          if (/^[\s.,!?;:()[\]{}'"-]+$/u.test(chunk) || chunk === "") return chunk;
          const e = createTransliterationEngine({ expandedMap: marathiExpanded });
          return e.processText(chunk).insert;
        })
        .join("");

      expect(result.insert).toBe(expected);
    });

    it("preserves separators and punctuation", () => {
      const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
      const result = engine.processText("hello, world! how are you?");

      expect(result.insert.includes(",")).toBe(true);
      expect(result.insert.includes("!")).toBe(true);
      expect(result.insert.includes("?")).toBe(true);
      expect(result.insert.includes(" ")).toBe(true);
    });

    it("handles empty and whitespace-only strings", () => {
      const engine = createTransliterationEngine({ expandedMap: marathiExpanded });

      expect(engine.processText("")).toEqual({ backspace: 0, insert: "" });
      expect(engine.processText("   ")).toEqual({ backspace: 0, insert: "   " });
      expect(engine.processText("\t\n")).toEqual({ backspace: 3, insert: "\t\n" });
    });

    it("handles unknown characters in pasted text", () => {
      const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
      const result = engine.processText("hello @world #test $123");

      expect(result.insert.includes("@")).toBe(true);
      expect(result.insert.includes("#")).toBe(true);
      expect(result.insert.includes("$123")).toBe(true);
    });

    it("clears composition buffer before processing pasted text", () => {
      const engine = createTransliterationEngine({ expandedMap: marathiExpanded });

      engine.processChar("n");
      engine.processChar("a");
      engine.processChar("m");

      const result = engine.processText("pune");
      expect(result.insert).toBe("पुने");
      expect(result.backspace).toBe(2);
    });
  });

  describe("integration", () => {
    it("handles type then paste scenarios", () => {
      const engine = createTransliterationEngine({ expandedMap: marathiExpanded });

      engine.processChar("M");
      engine.processChar("y");
      const pasteResult = engine.processText(" name is John");
      expect(pasteResult.insert.length).toBeGreaterThan(0);

      engine.reset();
      const sentenceResult = engine.processText("Welcome to Maharashtra!");
      expect(sentenceResult.insert.includes("!")).toBe(true);
    });

    it("is consistent between processChar and processText for same input", () => {
      const engine1 = createTransliterationEngine({ expandedMap: marathiExpanded });
      const engine2 = createTransliterationEngine({ expandedMap: marathiExpanded });

      let host = "";
      for (const ch of "Ranjeet") {
        host = applyEdit(host, engine1.processChar(ch));
      }

      const pasteResult = engine2.processText("Ranjeet");
      expect(host).toBe(pasteResult.insert);
    });
  });
});
