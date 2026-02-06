import { describe, expect, it } from "vitest";

import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";
import { buildTrie, walkLongest } from "../../src/engine/trie";

describe("trie", () => {
  const trie = buildTrie(marathiExpanded);

  it("k is a valid prefix", () => {
    const result = walkLongest(trie, "k");
    expect(result.isPrefix).toBe(true);
  });

  it("kh resolves to a terminal leaf", () => {
    const result = walkLongest(trie, "kh");
    expect(result.matched).toBe(true);
    expect(result.key).toBe("kh");
    expect(result.value?.glyph).toBe("ख");
  });

  it("kz is invalid", () => {
    const result = walkLongest(trie, "kz");
    expect(result.isPrefix).toBe(false);
  });
});
