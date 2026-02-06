export interface ContentEditableEditResult {
  collapsed: boolean;
  applied: boolean;
}

function ensureSingleTextNode(root: HTMLElement): Text {
  if (root.childNodes.length === 0) {
    const text = root.ownerDocument.createTextNode("");
    root.appendChild(text);
    return text;
  }

  if (root.childNodes.length === 1 && root.firstChild?.nodeType === Node.TEXT_NODE) {
    return root.firstChild as Text;
  }

  const flattened = root.textContent ?? "";
  root.textContent = "";
  const text = root.ownerDocument.createTextNode(flattened);
  root.appendChild(text);
  return text;
}

export function deleteAndInsertContentEditable(
  root: HTMLElement,
  backspace: number,
  insert: string
): ContentEditableEditResult {
  const selection = root.ownerDocument.getSelection();
  if (!selection || selection.rangeCount === 0) {
    return { collapsed: false, applied: false };
  }

  const range = selection.getRangeAt(0);
  if (!range.collapsed || !root.contains(range.startContainer)) {
    return { collapsed: false, applied: false };
  }

  const textNode = ensureSingleTextNode(root);
  const value = textNode.data;

  let caret = value.length;
  if (range.startContainer === textNode) {
    caret = Math.max(0, Math.min(range.startOffset, value.length));
  }

  const deleteStart = Math.max(0, caret - Math.max(0, backspace));
  const next = `${value.slice(0, deleteStart)}${insert}${value.slice(caret)}`;
  textNode.data = next;

  const nextCaret = deleteStart + insert.length;
  const nextRange = root.ownerDocument.createRange();
  nextRange.setStart(textNode, nextCaret);
  nextRange.collapse(true);
  selection.removeAllRanges();
  selection.addRange(nextRange);

  return { collapsed: true, applied: true };
}
