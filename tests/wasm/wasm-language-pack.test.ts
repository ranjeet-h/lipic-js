import { describe, expect, it } from "vitest";

import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";
import {
  compileWasmLanguageOverlayPack,
  compileWasmLanguagePack,
  compileWasmScriptBasePack,
  createWasmEngineFromLanguagePacks,
  createWasmEngineFromLanguagePack,
  mergeWasmLanguagePacks,
  inspectWasmLanguagePack
} from "../../src/engine/wasm-language-pack";

describe("wasm language-pack wrappers", () => {
  it("compiles and inspects language packs via wasm module", async () => {
    const fakePack = Uint8Array.from([1, 2, 3, 4]);

    const moduleLoader = async () => ({
      compile_language_pack: (
        _expandedMap: Record<string, unknown>,
        _scriptId: string,
        _languageId: string
      ) => fakePack,
      compile_script_base_pack: (_expandedMap: Record<string, unknown>, _scriptId: string) =>
        Uint8Array.from([5, 6, 7]),
      compile_language_overlay_pack: (
        _expandedMap: Record<string, unknown>,
        _scriptId: string,
        _languageId: string
      ) => Uint8Array.from([8, 9, 10]),
      merge_language_packs: (_basePack: Uint8Array, _overlayPack: Uint8Array) =>
        Uint8Array.from([11, 12, 13]),
      inspect_language_pack: (_packBytes: Uint8Array) => ({
        schema_version: 1,
        kind: "full",
        script_id: "devanagari",
        language_id: "marathi",
        entries: 10,
        has_rules: true
      }),
      Engine: {
        fromLanguagePack: (_packBytes: Uint8Array) => ({
          process_char: (ch: string) => ({ backspace: 0, insert: ch.toUpperCase() }),
          process_text: (text: string) => ({ backspace: 0, insert: text.toUpperCase() }),
          backspace: () => ({ backspace: 1, insert: "" }),
          commit: () => ({ backspace: 0, insert: "" }),
          reset: () => {}
        }),
        fromLanguagePacks: (_basePackBytes: Uint8Array, _overlayPackBytes: Uint8Array) => ({
          process_char: (ch: string) => ({ backspace: 0, insert: `${ch.toUpperCase()}!` }),
          process_text: (text: string) => ({ backspace: 0, insert: `${text.toUpperCase()}!` }),
          backspace: () => ({ backspace: 1, insert: "" }),
          commit: () => ({ backspace: 0, insert: "" }),
          reset: () => {}
        })
      }
    });

    const pack = await compileWasmLanguagePack(
      { expandedMap: marathiExpanded, scriptId: "devanagari", languageId: "marathi" },
      { moduleLoader }
    );
    expect(Array.from(pack)).toEqual([1, 2, 3, 4]);

    const summary = await inspectWasmLanguagePack(pack, { moduleLoader });
    expect(summary).toEqual({
      schema_version: 1,
      kind: "full",
      script_id: "devanagari",
      language_id: "marathi",
      entries: 10,
      has_rules: true
    });

    const engine = await createWasmEngineFromLanguagePack(pack, undefined, { moduleLoader });
    expect(engine.processChar("k")).toEqual({ backspace: 0, insert: "K" });
    expect(engine.backspace()).toEqual({ backspace: 1, insert: "" });

    const basePack = await compileWasmScriptBasePack(
      { expandedMap: marathiExpanded, scriptId: "devanagari" },
      { moduleLoader }
    );
    expect(Array.from(basePack)).toEqual([5, 6, 7]);

    const overlayPack = await compileWasmLanguageOverlayPack(
      { expandedMap: marathiExpanded, scriptId: "devanagari", languageId: "marathi" },
      { moduleLoader }
    );
    expect(Array.from(overlayPack)).toEqual([8, 9, 10]);

    const merged = await mergeWasmLanguagePacks(basePack, overlayPack, { moduleLoader });
    expect(Array.from(merged)).toEqual([11, 12, 13]);

    const overlayEngine = await createWasmEngineFromLanguagePacks(basePack, overlayPack, undefined, {
      moduleLoader
    });
    expect(overlayEngine.processChar("k")).toEqual({ backspace: 0, insert: "K!" });
  });

  it("falls back to JS when language-pack wasm runtime fails", async () => {
    const pack = Uint8Array.from([1, 2, 3]);
    const moduleLoader = async () => ({
      compile_language_pack: () => pack,
      compile_script_base_pack: () => pack,
      compile_language_overlay_pack: () => pack,
      merge_language_packs: () => pack,
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
        }),
        fromLanguagePacks: () => ({
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

    const engine = await createWasmEngineFromLanguagePack(
      pack,
      { expandedMap: marathiExpanded },
      { moduleLoader }
    );

    expect(engine.processChar("k")).toEqual({ backspace: 0, insert: "क" });
    expect(engine.processChar("h")).toEqual({ backspace: 1, insert: "ख" });
  });
});
