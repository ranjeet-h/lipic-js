// @vitest-environment jsdom
import { describe, expect, it } from "vitest";

import { deleteAndInsertContentEditable } from "../../src/integrations/contenteditable-edit";

describe("contenteditable edit", () => {
  it("applies collapsed-caret delete/insert", () => {
    const el = document.createElement("div");
    el.setAttribute("contenteditable", "true");
    el.textContent = "ख";
    document.body.appendChild(el);

    const selection = document.getSelection();
    const range = document.createRange();
    const text = el.firstChild as Text;
    range.setStart(text, text.data.length);
    range.collapse(true);
    selection?.removeAllRanges();
    selection?.addRange(range);

    const result = deleteAndInsertContentEditable(el, 1, "क");
    expect(result).toEqual({ collapsed: true, applied: true });
    expect(el.textContent).toBe("क");
  });

  it("returns not-applied on non-collapsed selection", () => {
    const el = document.createElement("div");
    el.setAttribute("contenteditable", "true");
    el.textContent = "abc";
    document.body.appendChild(el);

    const selection = document.getSelection();
    const range = document.createRange();
    const text = el.firstChild as Text;
    range.setStart(text, 0);
    range.setEnd(text, 2);
    selection?.removeAllRanges();
    selection?.addRange(range);

    const result = deleteAndInsertContentEditable(el, 1, "X");
    expect(result).toEqual({ collapsed: false, applied: false });
    expect(el.textContent).toBe("abc");
  });
});
