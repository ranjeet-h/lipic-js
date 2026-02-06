export type TextInputLike = HTMLInputElement | HTMLTextAreaElement;

function normalizeSelection(el: TextInputLike): { start: number; end: number } {
  const valueLength = el.value.length;
  const start = el.selectionStart ?? valueLength;
  const end = el.selectionEnd ?? valueLength;
  return {
    start: Math.max(0, Math.min(start, valueLength)),
    end: Math.max(0, Math.min(end, valueLength))
  };
}

function emitInputEvent(el: TextInputLike): void {
  try {
    const evt = new InputEvent("input", {
      bubbles: true,
      cancelable: false,
      inputType: "insertText",
      data: null
    });
    el.dispatchEvent(evt);
  } catch {
    const evt = new Event("input", { bubbles: true, cancelable: false });
    el.dispatchEvent(evt);
  }
}

export function deleteAndInsert(
  el: TextInputLike,
  backspace: number,
  insert: string
): { start: number; end: number } {
  const { start, end } = normalizeSelection(el);
  const deleteStart = Math.max(0, start - Math.max(0, backspace));

  if (typeof el.setRangeText === "function") {
    el.setRangeText(insert, deleteStart, end, "end");
  } else {
    const next = `${el.value.slice(0, deleteStart)}${insert}${el.value.slice(end)}`;
    el.value = next;
    const caret = deleteStart + insert.length;
    el.setSelectionRange(caret, caret);
  }

  emitInputEvent(el);
  const caret = deleteStart + insert.length;
  return { start: caret, end: caret };
}

export class DOMIntegrator {
  private readonly element?: TextInputLike;

  constructor(element?: TextInputLike) {
    this.element = element;
  }

  deleteAndInsert(el: TextInputLike, backspace: number, insert: string): { start: number; end: number };
  deleteAndInsert(backspace: number, insert: string): { start: number; end: number };
  deleteAndInsert(
    arg1: TextInputLike | number,
    arg2: number | string,
    arg3?: string
  ): { start: number; end: number } {
    if (typeof arg1 === "number") {
      if (!this.element || typeof arg2 !== "string") {
        throw new Error("DOMIntegrator requires a bound element for deleteAndInsert(backspace, insert).");
      }
      return deleteAndInsert(this.element, arg1, arg2);
    }

    if (typeof arg2 !== "number" || typeof arg3 !== "string") {
      throw new Error("deleteAndInsert(el, backspace, insert) requires all arguments.");
    }

    return deleteAndInsert(arg1, arg2, arg3);
  }
}
