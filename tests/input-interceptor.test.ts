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
});
