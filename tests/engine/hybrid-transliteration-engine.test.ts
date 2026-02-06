import { describe, expect, it } from "vitest";

import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";
import { createHybridTransliterationEngine } from "../../src/engine/hybrid-transliteration-engine";

describe("hybrid transliteration engine", () => {
  it("uses JS for keystroke path and WASM for batch path in auto mode", async () => {
    class MockEngine {
      constructor(_expandedMap: Record<string, unknown>, _rules?: Record<string, unknown>) {}
      process_char(ch: string) {
        return { backspace: 0, insert: ch.toUpperCase() };
      }
      process_text(text: string) {
        return { backspace: 0, insert: text.toUpperCase() };
      }
      backspace() {
        return { backspace: 0, insert: "" };
      }
      commit() {
        return { backspace: 0, insert: "" };
      }
      reset() {}
    }

    const engine = await createHybridTransliterationEngine(
      { expandedMap: marathiExpanded },
      { moduleLoader: async () => ({ Engine: MockEngine }) }
    );

    expect(engine.processChar("k")).toEqual({ backspace: 0, insert: "क" });
    expect(engine.processText("ab")).toEqual({ backspace: 1, insert: "AB" });
  });

  it("can force JS engine", async () => {
    const engine = await createHybridTransliterationEngine(
      { expandedMap: marathiExpanded },
      { preferWasm: false }
    );

    expect(engine.processChar("k")).toEqual({ backspace: 0, insert: "क" });
    expect(engine.processChar("h")).toEqual({ backspace: 1, insert: "ख" });
  });

  it("supports isWasm=false to force JS engine", async () => {
    const engine = await createHybridTransliterationEngine(
      { expandedMap: marathiExpanded },
      { isWasm: false }
    );

    expect(engine.processChar("k")).toEqual({ backspace: 0, insert: "क" });
  });

  it("supports isWasm=true and uses wasm when available", async () => {
    class MockEngine {
      constructor(_expandedMap: Record<string, unknown>, _rules?: Record<string, unknown>) {}
      process_char(ch: string) {
        return { backspace: 0, insert: `W:${ch}` };
      }
      process_text(text: string) {
        return { backspace: 0, insert: `W:${text}` };
      }
      backspace() {
        return { backspace: 0, insert: "" };
      }
      commit() {
        return { backspace: 0, insert: "" };
      }
      reset() {}
    }

    const engine = await createHybridTransliterationEngine(
      { expandedMap: marathiExpanded },
      { isWasm: true, moduleLoader: async () => ({ Engine: MockEngine }) }
    );

    expect(engine.processChar("k")).toEqual({ backspace: 0, insert: "W:k" });
  });

  it("uses JS fail-safe when isWasm=true but wasm module is missing", async () => {
    const engine = await createHybridTransliterationEngine(
      { expandedMap: marathiExpanded },
      { isWasm: true, moduleLoader: async () => { throw new Error("missing wasm files"); } }
    );

    expect(engine.processChar("k")).toEqual({ backspace: 0, insert: "क" });
    expect(engine.processChar("h")).toEqual({ backspace: 1, insert: "ख" });
  });

  it("compiles language pack lazily and reuses cache for same language", async () => {
    const pack = Uint8Array.from([1, 2, 3, 4]);
    let compileCalls = 0;

    const moduleLoader = async () => ({
      compile_language_pack: () => {
        compileCalls += 1;
        return pack;
      },
      inspect_language_pack: () => ({
        schema_version: 1,
        script_id: "devanagari",
        language_id: "marathi",
        entries: 1,
        has_rules: false
      }),
      Engine: {
        fromLanguagePack: (_packBytes: Uint8Array) => ({
          process_char: (ch: string) => ({ backspace: 0, insert: ch.toUpperCase() }),
          process_text: (text: string) => ({ backspace: 0, insert: text.toUpperCase() }),
          backspace: () => ({ backspace: 0, insert: "" }),
          commit: () => ({ backspace: 0, insert: "" }),
          reset: () => {}
        })
      }
    });

    const packCache = new Map<string, Uint8Array>();
    const options = {
      expandedMap: marathiExpanded
    };
    const factoryOptions = {
      moduleLoader,
      scriptId: "devanagari",
      languageId: "marathi",
      packCache
    };

    const engine1 = await createHybridTransliterationEngine(options, factoryOptions);
    const engine2 = await createHybridTransliterationEngine(options, factoryOptions);

    expect(engine1.processChar("k")).toEqual({ backspace: 0, insert: "क" });
    expect(engine2.processChar("k")).toEqual({ backspace: 0, insert: "क" });
    expect(engine1.processText("ab")).toEqual({ backspace: 1, insert: "AB" });
    expect(compileCalls).toBe(1);
  });

  it("supports script-base + overlay pack path", async () => {
    let baseCompileCalls = 0;
    let overlayCompileCalls = 0;

    const moduleLoader = async () => ({
      compile_script_base_pack: () => {
        baseCompileCalls += 1;
        return Uint8Array.from([1]);
      },
      compile_language_overlay_pack: () => {
        overlayCompileCalls += 1;
        return Uint8Array.from([2]);
      },
      compile_language_pack: () => Uint8Array.from([3]),
      merge_language_packs: () => Uint8Array.from([4]),
      inspect_language_pack: () => ({
        schema_version: 1,
        kind: "full",
        script_id: "devanagari",
        language_id: "marathi",
        entries: 1,
        has_rules: false
      }),
      Engine: {
        fromLanguagePack: () => ({
          process_char: (ch: string) => ({ backspace: 0, insert: ch.toUpperCase() }),
          process_text: (text: string) => ({ backspace: 0, insert: text.toUpperCase() }),
          backspace: () => ({ backspace: 0, insert: "" }),
          commit: () => ({ backspace: 0, insert: "" }),
          reset: () => {}
        }),
        fromLanguagePacks: () => ({
          process_char: (ch: string) => ({ backspace: 0, insert: `${ch.toUpperCase()}!` }),
          process_text: (text: string) => ({ backspace: 0, insert: `${text.toUpperCase()}!` }),
          backspace: () => ({ backspace: 0, insert: "" }),
          commit: () => ({ backspace: 0, insert: "" }),
          reset: () => {}
        })
      }
    });

    const packCache = new Map<string, Uint8Array>();
    const engine = await createHybridTransliterationEngine(
      { expandedMap: marathiExpanded },
      {
        moduleLoader,
        scriptId: "devanagari",
        languageId: "marathi",
        scriptBaseMap: marathiExpanded as Record<string, unknown>,
        languageOverlayMap: marathiExpanded as Record<string, unknown>,
        packCache
      }
    );

    expect(engine.processChar("k")).toEqual({ backspace: 0, insert: "क" });
    expect(engine.processText("ab")).toEqual({ backspace: 1, insert: "AB!" });
    expect(baseCompileCalls).toBe(1);
    expect(overlayCompileCalls).toBe(1);
  });

  it("falls back to JS when pack-based wasm engine fails at runtime", async () => {
    const moduleLoader = async () => ({
      compile_language_pack: () => Uint8Array.from([1, 2, 3]),
      inspect_language_pack: () => ({
        schema_version: 1,
        kind: "full",
        script_id: "devanagari",
        language_id: "marathi",
        entries: 1,
        has_rules: false
      }),
      Engine: {
        fromLanguagePack: () => ({
          process_char: (_ch: string) => {
            throw new Error("runtime fail");
          },
          process_text: (_text: string) => {
            throw new Error("runtime fail");
          },
          backspace: () => {
            throw new Error("runtime fail");
          },
          commit: () => {
            throw new Error("runtime fail");
          },
          reset: () => {
            throw new Error("runtime fail");
          }
        })
      }
    });

    const engine = await createHybridTransliterationEngine(
      { expandedMap: marathiExpanded },
      { moduleLoader, scriptId: "devanagari", languageId: "marathi", fallbackToJs: true }
    );

    expect(engine.processChar("k")).toEqual({ backspace: 0, insert: "क" });
    expect(engine.processChar("h")).toEqual({ backspace: 1, insert: "ख" });
  });
});
