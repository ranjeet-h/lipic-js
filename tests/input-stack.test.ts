import { describe, expect, it } from "vitest";

import { createInputStack } from "../src/engine/input-stack";

describe("input stack", () => {
  it("push/pop follows LIFO order", () => {
    const stack = createInputStack();
    stack.push("k");
    stack.push("h");

    expect(stack.pop()).toBe("h");
    expect(stack.pop()).toBe("k");
  });

  it("pop on empty returns undefined", () => {
    const stack = createInputStack();
    expect(stack.pop()).toBeUndefined();
  });

  it("clear resets content", () => {
    const stack = createInputStack();
    stack.push("k");
    stack.push("i");
    stack.clear();

    expect(stack.toString()).toBe("");
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  it("toString/size/isEmpty reflect current state", () => {
    const stack = createInputStack();
    expect(stack.isEmpty()).toBe(true);

    stack.push("k");
    stack.push("a");

    expect(stack.toString()).toBe("ka");
    expect(stack.size()).toBe(2);
    expect(stack.isEmpty()).toBe(false);
  });
});
