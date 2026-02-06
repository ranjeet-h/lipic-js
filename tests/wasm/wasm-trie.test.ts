import { describe, expect, it } from "vitest";

import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";
import { buildTrie, walkLongest } from "../../src/engine/trie";
import { createWasmTrie } from "../../src/engine/wasm-trie";

describe("wasm trie wrapper", () => {
  it("adapts wasm trie results into JS longest-match shape", async () => {
    class MockWasmTrie {
      constructor(_expandedMap: Record<string, unknown>) {}

      walk_longest(input: string, startIndex: number) {
        return {
          isPrefix: input === "k",
          matched: true,
          key: input.slice(startIndex),
          value: { glyph: "ख", type: "consonant" },
          length: Math.max(0, input.length - startIndex)
        };
      }
    }

    const wasmTrie = await createWasmTrie(marathiExpanded, {
      moduleLoader: async () => ({ WasmTrie: MockWasmTrie })
    });

    expect(wasmTrie.walkLongest("k")).toEqual({
      isPrefix: true,
      matched: true,
      key: "k",
      value: { glyph: "ख", type: "consonant" },
      length: 1
    });
  });

  it("falls back to JS trie when wasm loading fails", async () => {
    const wasmTrie = await createWasmTrie(marathiExpanded, {
      moduleLoader: async () => {
        throw new Error("wasm missing");
      }
    });

    const jsTrie = buildTrie(marathiExpanded);
    expect(wasmTrie.walkLongest("kh")).toEqual(walkLongest(jsTrie, "kh"));
    expect(wasmTrie.walkLongest("kz")).toEqual(walkLongest(jsTrie, "kz"));
  });

  it("throws when fallback is disabled", async () => {
    await expect(
      createWasmTrie(marathiExpanded, {
        moduleLoader: async () => {
          throw new Error("wasm missing");
        },
        fallbackToJs: false
      })
    ).rejects.toThrow("wasm missing");
  });
});
