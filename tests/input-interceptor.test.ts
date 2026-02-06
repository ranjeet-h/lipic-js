// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";

import { createTransliterationEngine } from "../src/engine/transliteration-engine";
import { createInputInterceptor } from "../src/integrations/input-interceptor";
import marathiExpanded from "../maps/marathi/phonetic.expanded.json";

function beforeInput(target: EventTarget, data: string): InputEvent {
  const evt = new InputEvent("beforeinput", {
    bubbles: true,
    cancelable: true,
    inputType: "insertText",
    data
  });
  target.dispatchEvent(evt);
  return evt;
}

function keydown(target: EventTarget, key: string, opts?: Partial<KeyboardEventInit>): KeyboardEvent {
  const evt = new KeyboardEvent("keydown", {
    bubbles: true,
    cancelable: true,
    key,
    ...opts
  });
  target.dispatchEvent(evt);
  return evt;
}

describe("input interceptor", () => {
  it("attaches and detaches", () => {
    const el = document.createElement("textarea");
    document.body.appendChild(el);

    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
    const interceptor = createInputInterceptor({ element: el, engine });

    expect(interceptor.isAttached()).toBe(false);
    interceptor.attach();
    expect(interceptor.isAttached()).toBe(true);
    interceptor.detach();
    expect(interceptor.isAttached()).toBe(false);
  });

  it("routes insertText through processChar", () => {
    const el = document.createElement("textarea");
    document.body.appendChild(el);
    el.value = "";
    el.setSelectionRange(0, 0);

    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
    const interceptor = createInputInterceptor({ element: el, engine });
    interceptor.attach();

    const evt = beforeInput(el, "k");
    expect(evt.defaultPrevented).toBe(true);
    expect(el.value).toBe("क");

    interceptor.detach();
  });

  it("routes Backspace through engine.backspace", () => {
    const el = document.createElement("textarea");
    document.body.appendChild(el);
    el.value = "";
    el.setSelectionRange(0, 0);

    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
    const interceptor = createInputInterceptor({ element: el, engine });
    interceptor.attach();

    beforeInput(el, "k");
    beforeInput(el, "h");
    expect(el.value).toBe("ख");

    const evt = keydown(el, "Backspace");
    expect(evt.defaultPrevented).toBe(true);
    expect(el.value).toBe("क");

    interceptor.detach();
  });

  it("bypasses modifier combos", () => {
    const el = document.createElement("textarea");
    document.body.appendChild(el);

    const onBypass = vi.fn();
    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
    const interceptor = createInputInterceptor({ element: el, engine, onBypass });
    interceptor.attach();

    const evt = keydown(el, "a", { ctrlKey: true });
    expect(evt.defaultPrevented).toBe(false);
    expect(onBypass).toHaveBeenCalledWith("modifier");

    interceptor.detach();
  });

  it("suspends during composition", () => {
    const el = document.createElement("textarea");
    document.body.appendChild(el);
    el.value = "";
    el.setSelectionRange(0, 0);

    const onBypass = vi.fn();
    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
    const interceptor = createInputInterceptor({ element: el, engine, onBypass });
    interceptor.attach();

    el.dispatchEvent(new CompositionEvent("compositionstart", { bubbles: true }));
    const during = beforeInput(el, "k");
    expect(during.defaultPrevented).toBe(false);
    expect(el.value).toBe("");

    el.dispatchEvent(new CompositionEvent("compositionend", { bubbles: true }));
    const after = beforeInput(el, "k");
    expect(after.defaultPrevented).toBe(true);
    expect(el.value).toBe("क");
    expect(onBypass).toHaveBeenCalledWith("composition");

    interceptor.detach();
  });

  it("commits on space keydown without blocking native insertion", () => {
    const el = document.createElement("textarea");
    document.body.appendChild(el);

    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
    const commitSpy = vi.spyOn(engine, "commit");
    const interceptor = createInputInterceptor({ element: el, engine });
    interceptor.attach();

    const evt = keydown(el, " ");
    expect(evt.defaultPrevented).toBe(false);
    expect(commitSpy).toHaveBeenCalledTimes(1);

    interceptor.detach();
  });

  it("does not block native Backspace when engine has no active composition", () => {
    const el = document.createElement("textarea");
    document.body.appendChild(el);
    el.value = "देलेते  ";
    el.setSelectionRange(el.value.length, el.value.length);

    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
    const interceptor = createInputInterceptor({ element: el, engine });
    interceptor.attach();

    const evt = keydown(el, "Backspace");
    expect(evt.defaultPrevented).toBe(false);

    interceptor.detach();
  });

  it("allows backspace after committed separator (space)", () => {
    const el = document.createElement("textarea");
    document.body.appendChild(el);
    el.value = "";
    el.setSelectionRange(0, 0);

    const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
    const interceptor = createInputInterceptor({ element: el, engine });
    interceptor.attach();

    beforeInput(el, "k");
    expect(el.value).toBe("क");

    beforeInput(el, " ");
    expect(el.value).toBe("क ");

    const evt = keydown(el, "Backspace");
    expect(evt.defaultPrevented).toBe(false);

    interceptor.detach();
  });

  describe("uppercase and paste support", () => {
    it("handles uppercase character input", () => {
      const el = document.createElement("textarea");
      document.body.appendChild(el);
      el.value = "";
      el.setSelectionRange(0, 0);

      const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
      const interceptor = createInputInterceptor({ element: el, engine });
      interceptor.attach();

      // Test uppercase R
      const evt1 = beforeInput(el, "R");
      expect(evt1.defaultPrevented).toBe(true);
      expect(el.value).toBe("र");

      // Test uppercase A
      const evt2 = beforeInput(el, "A");
      expect(evt2.defaultPrevented).toBe(true);
      expect(el.value).toBe("रा");

      interceptor.detach();
    });

    it("handles multi-character paste input", () => {
      const el = document.createElement("textarea");
      document.body.appendChild(el);
      el.value = "";
      el.setSelectionRange(0, 0);

      const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
      const interceptor = createInputInterceptor({ element: el, engine });
      interceptor.attach();

      // Simulate pasting multi-character text
      const evt = beforeInput(el, "namaste");
      expect(evt.defaultPrevented).toBe(true);
      expect(el.value).toBe("नमस्ते");

      interceptor.detach();
    });

    it("handles mixed case paste input", () => {
      const el = document.createElement("textarea");
      document.body.appendChild(el);
      el.value = "";
      el.setSelectionRange(0, 0);

      const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
      const interceptor = createInputInterceptor({ element: el, engine });
      interceptor.attach();

      // Simulate pasting mixed case text
      const evt = beforeInput(el, "My Name is RANJEET");
      expect(evt.defaultPrevented).toBe(true);
      const expected = createTransliterationEngine({ expandedMap: marathiExpanded })
        .processText("My Name is RANJEET").insert;
      expect(el.value).toBe(expected);

      interceptor.detach();
    });

    it("handles paste with punctuation and spaces", () => {
      const el = document.createElement("textarea");
      document.body.appendChild(el);
      el.value = "";
      el.setSelectionRange(0, 0);

      const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
      const interceptor = createInputInterceptor({ element: el, engine });
      interceptor.attach();

      // Simulate pasting text with punctuation
      const evt = beforeInput(el, "hello, world!");
      expect(evt.defaultPrevented).toBe(true);
      const expected = createTransliterationEngine({ expandedMap: marathiExpanded })
        .processText("hello, world!").insert;
      expect(el.value).toBe(expected);

      interceptor.detach();
    });

    it("distinguishes between single char and multi-char input", () => {
      const el = document.createElement("textarea");
      document.body.appendChild(el);
      el.value = "";
      el.setSelectionRange(0, 0);

      const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
      const processCharSpy = vi.spyOn(engine, "processChar");
      const processTextSpy = vi.spyOn(engine, "processText");
      const interceptor = createInputInterceptor({ element: el, engine });
      interceptor.attach();

      // Single character should use processChar
      beforeInput(el, "k");
      expect(processCharSpy).toHaveBeenCalledWith("k");
      expect(processTextSpy).not.toHaveBeenCalled();

      // Multi-character should use processText
      beforeInput(el, "hello");
      expect(processTextSpy).toHaveBeenCalledWith("hello");

      interceptor.detach();
    });

    it("handles typing followed by paste", () => {
      const el = document.createElement("textarea");
      document.body.appendChild(el);
      el.value = "";
      el.setSelectionRange(0, 0);

      const engine = createTransliterationEngine({ expandedMap: marathiExpanded });
      const interceptor = createInputInterceptor({ element: el, engine });
      interceptor.attach();

      // Type some characters
      beforeInput(el, "M");
      beforeInput(el, "y");
      const expectedTyped = (() => {
        const e = createTransliterationEngine({ expandedMap: marathiExpanded });
        let host = "";
        const apply = (edit: { backspace: number; insert: string }) =>
          `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
        host = apply(e.processChar("M"));
        host = apply(e.processChar("y"));
        return host;
      })();
      expect(el.value).toBe(expectedTyped);

      // Paste additional text
      const evt = beforeInput(el, " friend");
      expect(evt.defaultPrevented).toBe(true);
      const expectedAfterPaste = createTransliterationEngine({ expandedMap: marathiExpanded })
        .processText(" friend").insert;
      expect(el.value).toBe(expectedAfterPaste);

      interceptor.detach();
    });
  });
});
