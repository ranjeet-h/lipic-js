import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";

import bengaliExpanded from "../../maps/bengali/phonetic.expanded.json";
import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";
import { createTransliterationEngine, type Edit, type TransliterationEngine } from "../../src/engine/transliteration-engine";
import { createHybridTransliterationEngine } from "../../src/engine/hybrid-transliteration-engine";

type Action =
  | { kind: "char"; value: string }
  | { kind: "text"; value: string }
  | { kind: "backspace" }
  | { kind: "commit" }
  | { kind: "reset" };

function applyEdit(host: string, edit: Edit): string {
  return `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
}

function runActions(engine: TransliterationEngine, actions: Action[]): { edits: Array<Edit | null>; host: string } {
  let host = "";
  const edits: Array<Edit | null> = [];

  for (const action of actions) {
    if (action.kind === "char") {
      const edit = engine.processChar(action.value);
      host = applyEdit(host, edit);
      edits.push(edit);
      continue;
    }

    if (action.kind === "text") {
      const edit = engine.processText(action.value);
      host = applyEdit(host, edit);
      edits.push(edit);
      continue;
    }

    if (action.kind === "backspace") {
      const edit = engine.backspace();
      host = applyEdit(host, edit);
      edits.push(edit);
      continue;
    }

    if (action.kind === "commit") {
      const edit = engine.commit();
      host = applyEdit(host, edit);
      edits.push(edit);
      continue;
    }

    engine.reset();
    edits.push(null);
  }

  return { edits, host };
}

describe("wasm engine state-machine parity", () => {
  const wasmNodeModulePath = new URL("../../rust-core/pkg-node/rust_core.js", import.meta.url);

  (existsSync(wasmNodeModulePath) ? it : it.skip)(
    "matches JS engine edit stream for mixed state transitions",
    async () => {
    const moduleLoader = async () => {
      const modulePath = "../../rust-core/pkg-node/rust_core.js";
      return import(modulePath);
    };

    const wasmEngine = await createHybridTransliterationEngine(
      { expandedMap: marathiExpanded },
      { moduleLoader, fallbackToJs: false, preferWasm: true }
    );

    const jsEngine = createTransliterationEngine({ expandedMap: marathiExpanded });

    const actions: Action[] = [
      { kind: "char", value: "k" },
      { kind: "char", value: "h" },
      { kind: "backspace" },
      { kind: "char", value: "a" },
      { kind: "char", value: " " },
      { kind: "char", value: "g" },
      { kind: "char", value: "a" },
      { kind: "char", value: "n" },
      { kind: "char", value: "g" },
      { kind: "char", value: "a" },
      { kind: "commit" },
      { kind: "text", value: "kartos" },
      { kind: "backspace" },
      { kind: "reset" },
      { kind: "char", value: "q" },
      { kind: "char", value: "a" }
    ];

    const wasmRun = runActions(wasmEngine, actions);
    const jsRun = runActions(jsEngine, actions);

    expect(wasmRun.edits).toEqual(jsRun.edits);
    expect(wasmRun.host).toBe(jsRun.host);
    }
  );

  (existsSync(wasmNodeModulePath) ? it : it.skip)(
    "matches JS engine across repeated commit/reset/processText with rule overrides",
    async () => {
      const moduleLoader = async () => {
        const modulePath = "../../rust-core/pkg-node/rust_core.js";
        return import(modulePath);
      };

      const rules = {
        enableNukta: true,
        nasalizationMode: "panchamakshar" as const,
        enableLigatureCollapse: true,
        enableSchwaDeletion: true
      };

      const wasmEngine = await createHybridTransliterationEngine(
        { expandedMap: marathiExpanded, rules },
        { moduleLoader, fallbackToJs: false, preferWasm: true }
      );
      const jsEngine = createTransliterationEngine({ expandedMap: marathiExpanded, rules });

      const actions: Action[] = [
        { kind: "text", value: "ganga kartos" },
        { kind: "commit" },
        { kind: "char", value: "k" },
        { kind: "char", value: "s" },
        { kind: "char", value: "h" },
        { kind: "backspace" },
        { kind: "char", value: "h" },
        { kind: "commit" },
        { kind: "text", value: "qa anka" },
        { kind: "reset" },
        { kind: "char", value: "q" },
        { kind: "char", value: "a" }
      ];

      const wasmRun = runActions(wasmEngine, actions);
      const jsRun = runActions(jsEngine, actions);

      expect(wasmRun.edits).toEqual(jsRun.edits);
      expect(wasmRun.host).toBe(jsRun.host);
    }
  );

  (existsSync(wasmNodeModulePath) ? it : it.skip)(
    "matches JS engine for non-Devanagari language flow (bengali)",
    async () => {
      const moduleLoader = async () => {
        const modulePath = "../../rust-core/pkg-node/rust_core.js";
        return import(modulePath);
      };

      const wasmEngine = await createHybridTransliterationEngine(
        { expandedMap: bengaliExpanded },
        {
          moduleLoader,
          fallbackToJs: false,
          preferWasm: true,
          scriptId: "bengali",
          languageId: "bengali"
        }
      );
      const jsEngine = createTransliterationEngine({ expandedMap: bengaliExpanded });

      const actions: Action[] = [
        { kind: "char", value: "k" },
        { kind: "char", value: "A" },
        { kind: "char", value: " " },
        { kind: "char", value: "n" },
        { kind: "char", value: "a" },
        { kind: "char", value: "m" },
        { kind: "char", value: "a" },
        { kind: "char", value: "s" },
        { kind: "char", value: "t" },
        { kind: "char", value: "e" },
        { kind: "commit" },
        { kind: "text", value: "kta qa anka" },
        { kind: "backspace" }
      ];

      const wasmRun = runActions(wasmEngine, actions);
      const jsRun = runActions(jsEngine, actions);

      expect(wasmRun.edits).toEqual(jsRun.edits);
      expect(wasmRun.host).toBe(jsRun.host);
      expect(/[\u0900-\u097F]/u.test(wasmRun.host)).toBe(false);
    }
  );
});
