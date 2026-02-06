// @vitest-environment jsdom
import { describe, expect, it } from "vitest";

import { deleteAndInsert, DOMIntegrator } from "../../src/integrations/dom-integrator";

function createInput(value: string): HTMLInputElement {
  const el = document.createElement("input");
  el.value = value;
  document.body.appendChild(el);
  return el;
}

describe("DOM integrator", () => {
  it("deletes UTF-16 units and inserts replacement while keeping caret stable", () => {
    const el = createInput("ख");
    el.setSelectionRange(1, 1);

    const caret = deleteAndInsert(el, 1, "क");

    expect(el.value).toBe("क");
    expect(caret).toEqual({ start: 1, end: 1 });
    expect(el.selectionStart).toBe(1);
    expect(el.selectionEnd).toBe(1);
  });

  it("handles selection replacement", () => {
    const el = createInput("abcdef");
    el.setSelectionRange(2, 5);

    deleteAndInsert(el, 1, "X");

    expect(el.value).toBe("aXf");
    expect(el.selectionStart).toBe(2);
    expect(el.selectionEnd).toBe(2);
  });

  it("uses UTF-16 unit semantics (surrogate pair boundary)", () => {
    const el = createInput("a😀");
    el.setSelectionRange(el.value.length, el.value.length);

    deleteAndInsert(el, 2, "");

    expect(el.value).toBe("a");
  });

  it("helper and class method produce equivalent output", () => {
    const el1 = createInput("abc");
    el1.setSelectionRange(3, 3);

    const el2 = createInput("abc");
    el2.setSelectionRange(3, 3);

    deleteAndInsert(el1, 1, "X");

    const integrator = new DOMIntegrator();
    integrator.deleteAndInsert(el2, 1, "X");

    expect(el1.value).toBe(el2.value);
    expect(el1.selectionStart).toBe(el2.selectionStart);
    expect(el1.selectionEnd).toBe(el2.selectionEnd);
  });

  it("supports bound-element class usage", () => {
    const el = createInput("abc");
    el.setSelectionRange(3, 3);

    const integrator = new DOMIntegrator(el);
    integrator.deleteAndInsert(1, "X");

    expect(el.value).toBe("abX");
    expect(el.selectionStart).toBe(3);
    expect(el.selectionEnd).toBe(3);
  });
});
