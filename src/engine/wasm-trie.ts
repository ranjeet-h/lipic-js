import { buildTrie, type LongestMatchResult, walkLongest } from "./trie";

interface WasmTrieBindings {
  walk_longest(input: string, startIndex: number): unknown;
}

interface WasmTrieModule {
  WasmTrie: new (expandedMap: Record<string, unknown>) => WasmTrieBindings;
  default?: () => Promise<unknown> | unknown;
}

export interface WasmTrieFactoryOptions {
  moduleLoader?: () => Promise<WasmTrieModule>;
  fallbackToJs?: boolean;
}

export interface TrieWalker<TValue> {
  walkLongest(input: string, startIndex?: number): LongestMatchResult<TValue>;
}

function normalizeLongestResult<TValue>(raw: unknown): LongestMatchResult<TValue> {
  const value = raw as Partial<LongestMatchResult<TValue>> | null | undefined;
  return {
    isPrefix: Boolean(value?.isPrefix),
    matched: Boolean(value?.matched),
    key: typeof value?.key === "string" ? value.key : "",
    value: (value?.value ?? null) as TValue | null,
    length: Number.isFinite(value?.length) ? Math.max(0, Number(value?.length)) : 0
  };
}

async function defaultWasmModuleLoader(): Promise<WasmTrieModule> {
  const candidates = ["@lipic/rust-core", "../../rust-core/pkg/rust_core.js"];
  let lastError: unknown;

  for (const moduleId of candidates) {
    try {
      return await import(moduleId) as Promise<WasmTrieModule>;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError ?? new Error("No WASM trie module could be loaded");
}

export async function createWasmTrie<TValue>(
  expandedMap: Record<string, TValue>,
  options: WasmTrieFactoryOptions = {}
): Promise<TrieWalker<TValue>> {
  const { moduleLoader = defaultWasmModuleLoader, fallbackToJs = true } = options;

  try {
    const wasmModule = await moduleLoader();
    if (typeof wasmModule.default === "function") {
      await wasmModule.default();
    }

    const trie = new wasmModule.WasmTrie(expandedMap as Record<string, unknown>);
    return {
      walkLongest(input: string, startIndex = 0): LongestMatchResult<TValue> {
        return normalizeLongestResult<TValue>(trie.walk_longest(input, startIndex));
      }
    };
  } catch (error) {
    if (!fallbackToJs) {
      throw error;
    }

    const trie = buildTrie(expandedMap);
    return {
      walkLongest(input: string, startIndex = 0): LongestMatchResult<TValue> {
        return walkLongest(trie, input, startIndex);
      }
    };
  }
}
