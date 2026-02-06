export interface TrieNode<TValue> {
  children: Map<string, TrieNode<TValue>>;
  terminal: null | {
    key: string;
    value: TValue;
  };
}

export interface LongestMatchResult<TValue> {
  isPrefix: boolean;
  matched: boolean;
  key: string;
  value: TValue | null;
  length: number;
}

function createNode<TValue>(): TrieNode<TValue> {
  return {
    children: new Map<string, TrieNode<TValue>>(),
    terminal: null
  };
}

export function buildTrie<TValue>(expandedMap: Record<string, TValue>): TrieNode<TValue> {
  const root = createNode<TValue>();

  for (const [key, value] of Object.entries(expandedMap)) {
    if (key.length === 0) {
      continue;
    }

    let node = root;
    for (const ch of key) {
      let child = node.children.get(ch);
      if (!child) {
        child = createNode<TValue>();
        node.children.set(ch, child);
      }
      node = child;
    }

    node.terminal = { key, value };
  }

  return root;
}

export function walkLongest<TValue>(
  root: TrieNode<TValue>,
  input: string,
  startIndex = 0
): LongestMatchResult<TValue> {
  let node: TrieNode<TValue> | undefined = root;
  let index = startIndex;
  let matchedLength = 0;
  let matchedKey = "";
  let matchedValue: TValue | null = null;

  while (node && index < input.length) {
    const ch = input[index];
    const next = node.children.get(ch);
    if (!next) {
      return {
        isPrefix: false,
        matched: matchedLength > 0,
        key: matchedKey,
        value: matchedValue,
        length: matchedLength
      };
    }

    node = next;
    index += 1;

    if (node.terminal) {
      matchedLength = index - startIndex;
      matchedKey = node.terminal.key;
      matchedValue = node.terminal.value;
    }
  }

  return {
    isPrefix: Boolean(node) && index === input.length,
    matched: matchedLength > 0,
    key: matchedKey,
    value: matchedValue,
    length: matchedLength
  };
}
