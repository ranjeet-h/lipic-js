import { describe, expect, it } from "vitest";

import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";
import { getEngineRuntime } from "../../src/engine/transliteration-engine";
import { createWasmTransliterationEngine } from "../../src/engine/wasm-transliteration-engine";

describe("wasm transliteration wrapper", () => {
  it("adapts wasm exports to the standard engine interface", async () => {
    let receivedRules: Record<string, unknown> | undefined;

    class MockEngine {
      private buffer = "";

      constructor(_expandedMap: Record<string, unknown>, rules?: Record<string, unknown>) {
        receivedRules = rules;
      }

      process_char(ch: string) {
        this.buffer += ch;
        return { backspace: Math.max(0, this.buffer.length - 1), insert: this.buffer.toUpperCase() };
      }

      process_text(text: string) {
        this.buffer = text;
        return { backspace: 0, insert: text.toUpperCase() };
      }

      backspace() {
        if (this.buffer.length === 0) return { backspace: 0, insert: "" };
        this.buffer = this.buffer.slice(0, -1);
        return { backspace: 1, insert: this.buffer.toUpperCase() };
      }

      commit() {
        this.buffer = "";
        return { backspace: 0, insert: "" };
      }

      reset() {
        this.buffer = "";
      }
    }

    const engine = await createWasmTransliterationEngine(
      { expandedMap: marathiExpanded, rules: { enableNukta: false } },
      { moduleLoader: async () => ({ Engine: MockEngine }) }
    );

    expect(engine.processChar("k")).toEqual({ backspace: 0, insert: "K" });
    expect(engine.processChar("h")).toEqual({ backspace: 1, insert: "KH" });
    expect(engine.processText("test")).toEqual({ backspace: 0, insert: "TEST" });
    expect(engine.backspace()).toEqual({ backspace: 1, insert: "TES" });
    expect(engine.commit()).toEqual({ backspace: 0, insert: "" });
    expect(receivedRules).toEqual({ enableNukta: false });
  });

  it("falls back to JS engine when wasm loading fails", async () => {
    const engine = await createWasmTransliterationEngine(
      { expandedMap: marathiExpanded },
      { moduleLoader: async () => { throw new Error("module missing"); } }
    );

    expect(engine.processChar("k")).toEqual({ backspace: 0, insert: "क" });
    expect(engine.processChar("h")).toEqual({ backspace: 1, insert: "ख" });
  });

  it("throws when fallback is disabled", async () => {
    await expect(
      createWasmTransliterationEngine(
        { expandedMap: marathiExpanded },
        { moduleLoader: async () => { throw new Error("module missing"); }, fallbackToJs: false }
      )
    ).rejects.toThrow("module missing");
  });

  it("falls back to JS engine when wasm runtime throws during calls", async () => {
    class RuntimeFailingEngine {
      constructor(_expandedMap: Record<string, unknown>, _rules?: Record<string, unknown>) {}
      process_char(_ch: string) {
        throw new Error("runtime fail");
      }
      process_text(_text: string) {
        throw new Error("runtime fail");
      }
      backspace() {
        throw new Error("runtime fail");
      }
      commit() {
        throw new Error("runtime fail");
      }
      reset() {
        throw new Error("runtime fail");
      }
    }

    const engine = await createWasmTransliterationEngine(
      { expandedMap: marathiExpanded },
      { moduleLoader: async () => ({ Engine: RuntimeFailingEngine }) }
    );
    expect(getEngineRuntime(engine)).toBe("wasm");

    expect(engine.processChar("k")).toEqual({ backspace: 0, insert: "क" });
    expect(getEngineRuntime(engine)).toBe("js");
    expect(engine.processChar("h")).toEqual({ backspace: 1, insert: "ख" });
    expect(engine.backspace()).toEqual({ backspace: 1, insert: "क" });
  });
});
