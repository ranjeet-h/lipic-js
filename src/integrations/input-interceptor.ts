import { deleteAndInsert, type TextInputLike } from "./dom-integrator";
import { deleteAndInsertContentEditable } from "./contenteditable-edit";
import type { Edit, TransliterationEngine } from "../engine/transliteration-engine";

export type InterceptTarget = TextInputLike | HTMLElement;

export interface InputInterceptorOptions {
  element: InterceptTarget;
  engine: TransliterationEngine;
  enabled?: boolean;
  onEditApplied?: (edit: Edit) => void;
  onBypass?: (reason: "disabled" | "modifier" | "composition" | "unsupported-target" | "selection") => void;
}

export interface InputInterceptor {
  attach(): void;
  detach(): void;
  isAttached(): boolean;
}

function isTextInputLike(el: Element): el is TextInputLike {
  if (el instanceof HTMLTextAreaElement) {
    return true;
  }

  if (el instanceof HTMLInputElement) {
    return el.type === "text";
  }

  return false;
}

function isSupportedContentEditable(el: Element): el is HTMLElement {
  return el instanceof HTMLElement && el.isContentEditable;
}

function hasModifier(evt: KeyboardEvent): boolean {
  return evt.ctrlKey || evt.altKey || evt.metaKey;
}

function isCommitKey(key: string): boolean {
  return key === " " || key === "Enter" || key === "Tab";
}

function isInsertInputType(inputType: string): boolean {
  return (
    inputType === "insertText" ||
    inputType === "insertReplacementText" ||
    inputType === "insertFromComposition" ||
    inputType === "insertCompositionText"
  );
}

export function createInputInterceptor(options: InputInterceptorOptions): InputInterceptor {
  const element = options.element;
  const engine = options.engine;
  const onEditApplied = options.onEditApplied;
  const onBypass = options.onBypass;
  let enabled = options.enabled ?? true;
  let attached = false;
  let isComposing = false;

  const applyEdit = (edit: Edit): boolean => {
    if (isTextInputLike(element)) {
      deleteAndInsert(element, edit.backspace, edit.insert);
      onEditApplied?.(edit);
      return true;
    }

    if (isSupportedContentEditable(element)) {
      const result = deleteAndInsertContentEditable(element, edit.backspace, edit.insert);
      if (!result.collapsed) {
        onBypass?.("selection");
        return false;
      }
      if (!result.applied) {
        return false;
      }
      onEditApplied?.(edit);
      return true;
    }

    onBypass?.("unsupported-target");
    return false;
  };

  const handleCompositionStart = (): void => {
    isComposing = true;
  };

  const handleCompositionEnd = (): void => {
    isComposing = false;
  };

  const handleKeydown = (evt: KeyboardEvent): void => {
    if (!enabled) {
      onBypass?.("disabled");
      return;
    }

    if (hasModifier(evt)) {
      onBypass?.("modifier");
      return;
    }

    if (isComposing) {
      onBypass?.("composition");
      return;
    }

    if (isCommitKey(evt.key)) {
      // Allow native insertion, but finalize current composition so next input starts fresh.
      engine.commit();
      return;
    }

    if (evt.key !== "Backspace") {
      return;
    }

    const edit = engine.backspace();
    if (edit.backspace === 0 && edit.insert === "") {
      // No active IME composition to rewrite; let native backspace behavior run.
      return;
    }

    if (!applyEdit(edit)) {
      return;
    }

    evt.preventDefault();
  };

  const handleBeforeInput = (evt: InputEvent): void => {
    if (!enabled) {
      onBypass?.("disabled");
      return;
    }

    if (isComposing && !isInsertInputType(evt.inputType)) {
      onBypass?.("composition");
      return;
    }

    if (!isInsertInputType(evt.inputType)) {
      return;
    }

    const text = evt.data;
    if (!text) {
      return;
    }

    // Use processText for multi-character input (paste), processChar for single character
    const edit = text.length > 1 ? engine.processText(text) : engine.processChar(text);
    if (!applyEdit(edit)) {
      return;
    }

    evt.preventDefault();
  };

  return {
    attach(): void {
      if (attached) {
        return;
      }

      element.addEventListener("compositionstart", handleCompositionStart);
      element.addEventListener("compositionend", handleCompositionEnd);
      element.addEventListener("keydown", handleKeydown as EventListener);
      element.addEventListener("beforeinput", handleBeforeInput as EventListener);
      attached = true;
    },
    detach(): void {
      if (!attached) {
        return;
      }

      element.removeEventListener("compositionstart", handleCompositionStart);
      element.removeEventListener("compositionend", handleCompositionEnd);
      element.removeEventListener("keydown", handleKeydown as EventListener);
      element.removeEventListener("beforeinput", handleBeforeInput as EventListener);
      attached = false;
    },
    isAttached(): boolean {
      return attached;
    }
  };
}
