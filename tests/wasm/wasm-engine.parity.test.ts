import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";

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
});
