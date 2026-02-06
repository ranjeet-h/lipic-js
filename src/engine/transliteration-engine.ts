import { buildTrie, walkLongest, type TrieNode } from "./trie";
import { createInputStack } from "./input-stack";
import { runRulePipeline } from "./rules";
import type { EngineRuleOptions, NasalizationMode, RuleContext, Token } from "./rules/types";
import { HALANT } from "./rules/types";

export type Edit = { backspace: number; insert: string };

export interface TransliterationEntry {
  type: string;
  glyph: string;
  matra?: string;
}

export interface TransliterationEngineOptions {
  expandedMap: Record<string, TransliterationEntry>;
  trie?: TrieNode<TransliterationEntry>;
  rules?: {
    enableNukta?: boolean;
    nasalizationMode?: NasalizationMode;
    enableLigatureCollapse?: boolean;
    enableSchwaDeletion?: boolean;
  };
}

export interface TransliterationEngine {
  processChar(char: string): Edit;
  processText(text: string): Edit;
  backspace(): Edit;
  commit(): Edit;
  reset(): void;
}

type ContextState = "start" | "afterConsonant" | "afterVowel" | "other";

const DEFAULT_RULES: EngineRuleOptions = {
  enableNukta: true,
  nasalizationMode: "anusvara",
  enableLigatureCollapse: true,
  enableSchwaDeletion: true
};

function isSeparator(char: string): boolean {
  return /[\s.,!?;:()[\]{}"'-]/u.test(char);
}

function nextContextForRawChar(ch: string): ContextState {
  if (/\s/u.test(ch)) {
    return "start";
  }
  return "other";
}

function isConsonantToken(token: Token): token is Extract<Token, { kind: "consonant" }> {
  return token.kind === "consonant";
}

function renderEntryToTokens(entry: TransliterationEntry, context: ContextState): { tokens: Token[]; context: ContextState } {
  if (entry.type === "vowel") {
    if (context === "afterConsonant") {
      if ((entry.matra ?? "") === "") {
        return { tokens: [{ kind: "inherentA" }], context: "afterVowel" };
      }
      return { tokens: [{ kind: "matra", glyph: entry.matra ?? "" }], context: "afterVowel" };
    }

    return { tokens: [{ kind: "vowelIndependent", glyph: entry.glyph }], context: "afterVowel" };
  }

  if (entry.type === "consonant" || entry.type === "conjunct") {
    return { tokens: [{ kind: "consonant", glyph: entry.glyph }], context: "afterConsonant" };
  }

  if (entry.type === "mark") {
    return { tokens: [{ kind: "mark", glyph: entry.glyph }], context };
  }

  return { tokens: [{ kind: "raw", text: entry.glyph }], context };
}

function insertHalants(tokens: Token[]): Token[] {
  const out: Token[] = [];

  for (let i = 0; i < tokens.length; i += 1) {
    const current = tokens[i];
    const next = tokens[i + 1];

    out.push(current);

    if (!isConsonantToken(current)) {
      continue;
    }

    if (next && isConsonantToken(next)) {
      out.push({ kind: "halant", glyph: HALANT });
    }
  }

  return out;
}

function tokenizeBuffer(
  buffer: string,
  trie: TrieNode<TransliterationEntry>
): Token[] {
  const rawTokens: Token[] = [];
  let index = 0;
  let context: ContextState = "start";

  while (index < buffer.length) {
    const match = walkLongest(trie, buffer, index);
    if (match.matched && match.value) {
      const shouldSplitNg =
        match.key === "ng" &&
        index + match.length < buffer.length &&
        /[aAiIuUeEoOāīū]/u.test(buffer[index + match.length]);

      if (shouldSplitNg) {
        const nMatch = walkLongest(trie, "n");
        if (nMatch.matched && nMatch.value) {
          const renderedN = renderEntryToTokens(nMatch.value, context);
          rawTokens.push(...renderedN.tokens);
          context = renderedN.context;
          index += 1;
          continue;
        }
      }

      const rendered = renderEntryToTokens(match.value, context);
      rawTokens.push(...rendered.tokens);
      context = rendered.context;
      index += match.length;
      continue;
    }

    const raw = buffer[index];
      rawTokens.push({ kind: "raw", text: raw });
    context = nextContextForRawChar(raw);
    index += 1;
  }

  return insertHalants(rawTokens);
}

function stringifyTokens(tokens: Token[]): string {
  let out = "";

  for (const token of tokens) {
    if (token.kind === "inherentA") {
      continue;
    }

    if (token.kind === "raw") {
      out += token.text;
      continue;
    }

    out += token.glyph;
  }

  return out;
}

function computeRendered(
  raw: string,
  trie: TrieNode<TransliterationEntry>,
  ruleOptions: EngineRuleOptions
): string {
  const baseTokens = tokenizeBuffer(raw, trie);
  const ctx: RuleContext = { options: ruleOptions };
  const postProcessedTokens = runRulePipeline(baseTokens, ctx);
  return stringifyTokens(postProcessedTokens);
}

export function createTransliterationEngine(options: TransliterationEngineOptions): TransliterationEngine {
  const trie = options.trie ?? buildTrie(options.expandedMap);
  const ruleOptions: EngineRuleOptions = {
    ...DEFAULT_RULES,
    ...(options.rules ?? {})
  };
  const inputStack = createInputStack();

  let renderedBuffer = "";

  function rewriteFromCurrentInput(): Edit {
    const nextRendered = computeRendered(inputStack.toString(), trie, ruleOptions);
    const edit: Edit = {
      backspace: renderedBuffer.length,
      insert: nextRendered
    };
    renderedBuffer = nextRendered;
    return edit;
  }

  return {
    processChar(char: string): Edit {
      if (isSeparator(char)) {
        inputStack.clear();
        renderedBuffer = "";
        return { backspace: 0, insert: char };
      }

      inputStack.push(char);
      return rewriteFromCurrentInput();
    },
    processText(text: string): Edit {
      // For pasted text, we transliterate the entire string at once
      // Clear current buffer and process the full text
      inputStack.clear();
      
      // Split by separators and process each chunk
      const chunks = text.split(/(\s+|[.,!?;:()[\]{}'"-])/);
      let result = "";
      
      for (const chunk of chunks) {
        if (isSeparator(chunk) || chunk === "") {
          result += chunk;
        } else {
          // Transliterate the chunk
          result += computeRendered(chunk, trie, ruleOptions);
        }
      }
      
      const edit: Edit = { backspace: renderedBuffer.length, insert: result };
      renderedBuffer = result;
      return edit;
    },
    backspace(): Edit {
      if (inputStack.isEmpty()) {
        return { backspace: 0, insert: "" };
      }

      inputStack.pop();
      return rewriteFromCurrentInput();
    },
    commit(): Edit {
      if (inputStack.isEmpty()) {
        return { backspace: 0, insert: "" };
      }

      inputStack.clear();
      renderedBuffer = "";
      return { backspace: 0, insert: "" };
    },
    reset(): void {
      inputStack.clear();
      renderedBuffer = "";
    }
  };
}
