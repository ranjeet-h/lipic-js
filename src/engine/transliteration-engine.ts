import { buildTrie, walkLongest, type TrieNode } from "./trie";
import { createInputStack } from "./input-stack";
import { runRulePipeline } from "./rules";
import { getScriptRuleConfig, inferScriptRuleConfig } from "./rules/script-config";
import type {
  EngineRuleOptions,
  NasalizationMode,
  NasalizationProfile,
  RuleContext,
  Token
} from "./rules/types";

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
  scriptId?: string;
  languageId?: string;
}

export interface TransliterationEngine {
  processChar(char: string): Edit;
  processText(text: string): Edit;
  backspace(): Edit;
  commit(): Edit;
  reset(): void;
}

export type EngineRuntime = "js" | "wasm" | "hybrid";

export interface RuntimeAwareTransliterationEngine extends TransliterationEngine {
  getRuntime(): EngineRuntime;
}

export function getEngineRuntime(engine: TransliterationEngine): EngineRuntime {
  const runtimeAware = engine as Partial<RuntimeAwareTransliterationEngine>;
  if (typeof runtimeAware.getRuntime === "function") {
    return runtimeAware.getRuntime();
  }
  return "js";
}

type ContextState = "start" | "afterConsonant" | "afterVowel" | "other";

const DEFAULT_RULES: EngineRuleOptions = {
  enableNukta: true,
  nasalizationMode: "anusvara",
  enableLigatureCollapse: true,
  enableSchwaDeletion: true
};

const VARGA_KEY_GROUPS = [
  { stops: ["k", "kh", "g", "gh"], nasal: "ng" },
  { stops: ["c", "ch", "j", "jh"], nasal: "ny" },
  { stops: ["T", "Th", "D", "Dh"], nasal: "N" },
  { stops: ["t", "th", "d", "dh"], nasal: "n" },
  { stops: ["p", "ph", "b", "bh"], nasal: "m" }
] as const;

function maybeConsonantGlyph(
  expandedMap: Record<string, TransliterationEntry>,
  key: string
): string | null {
  const entry = expandedMap[key];
  if (!entry || entry.type !== "consonant" || !entry.glyph) {
    return null;
  }
  return entry.glyph;
}

function deriveNasalizationProfile(
  expandedMap: Record<string, TransliterationEntry>
): NasalizationProfile {
  const nasalConsonants = new Set<string>();
  const vargaConsonants = new Set<string>();
  const panchamaByConsonant = new Map<string, string>();

  for (const group of VARGA_KEY_GROUPS) {
    const nasal = maybeConsonantGlyph(expandedMap, group.nasal);
    if (!nasal) {
      continue;
    }
    nasalConsonants.add(nasal);

    for (const key of group.stops) {
      const stop = maybeConsonantGlyph(expandedMap, key);
      if (!stop) {
        continue;
      }
      vargaConsonants.add(stop);
      panchamaByConsonant.set(stop, nasal);
    }
  }

  return { nasalConsonants, vargaConsonants, panchamaByConsonant };
}

function languageDefaultRuleOverrides(
  languageId: string | undefined,
  scriptId: string
): Partial<EngineRuleOptions> {
  if (languageId === "sanskrit") {
    return {
      enableSchwaDeletion: false,
      nasalizationMode: "panchamakshar"
    };
  }

  if (languageId === "tamil" || scriptId === "tamil") {
    return {
      nasalizationMode: "panchamakshar"
    };
  }

  return {};
}

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

function insertHalants(tokens: Token[], halant: string): Token[] {
  const out: Token[] = [];

  for (let i = 0; i < tokens.length; i += 1) {
    const current = tokens[i];
    const next = tokens[i + 1];

    out.push(current);

    if (!isConsonantToken(current)) {
      continue;
    }

    if (next && isConsonantToken(next)) {
      out.push({ kind: "halant", glyph: halant });
    }
  }

  return out;
}

function tokenizeBuffer(
  buffer: string,
  trie: TrieNode<TransliterationEntry>,
  halant: string
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

  return insertHalants(rawTokens, halant);
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

const SCRIPT_UNICODE_RANGES: Record<string, [number, number]> = {
  devanagari: [0x0900, 0x097F],
  bengali: [0x0980, 0x09FF],
  gurmukhi: [0x0A00, 0x0A7F],
  gujarati: [0x0A80, 0x0AFF],
  odia: [0x0B00, 0x0B7F],
  tamil: [0x0B80, 0x0BFF],
  telugu: [0x0C00, 0x0C7F],
  kannada: [0x0C80, 0x0CFF],
  malayalam: [0x0D00, 0x0D7F],
  meitei: [0xABC0, 0xABFF],
  olchiki: [0x1C50, 0x1C7F],
  persoarabic: [0x0600, 0x06FF],
  sinhala: [0x0D80, 0x0DFF],
};

function enforceScriptSafety(rendered: string, raw: string, ruleContext: RuleContext): string {
  if (ruleContext.script.kind === "devanagari") {
    return rendered;
  }

  let candidate = rendered;
  if (ruleContext.script.nukta) {
    candidate = candidate.replace(/\u093C/gu, ruleContext.script.nukta);
  } else {
    candidate = candidate.replace(/\u093C/gu, "");
  }

  const expectedRange = SCRIPT_UNICODE_RANGES[ruleContext.script.scriptId];
  if (expectedRange) {
    for (let i = 0; i < candidate.length; i++) {
      const cp = candidate.codePointAt(i)!;
      if (cp >= 0x0900 && cp <= 0x0DFF) {
        if (cp < expectedRange[0] || cp > expectedRange[1]) {
          return raw;
        }
      }
    }
  } else {
    if (/[\u0900-\u097F]/u.test(candidate)) {
      return raw;
    }
  }

  return candidate;
}

function computeRendered(
  raw: string,
  trie: TrieNode<TransliterationEntry>,
  ruleOptions: EngineRuleOptions,
  ruleContext: RuleContext
): string {
  const baseTokens = tokenizeBuffer(raw, trie, ruleContext.script.halant);
  const ctx: RuleContext = {
    options: ruleOptions,
    script: ruleContext.script,
    languageId: ruleContext.languageId,
    nasalizationProfile: ruleContext.nasalizationProfile
  };
  const postProcessedTokens = runRulePipeline(baseTokens, ctx);
  return enforceScriptSafety(stringifyTokens(postProcessedTokens), raw, ruleContext);
}

export function createTransliterationEngine(options: TransliterationEngineOptions): TransliterationEngine {
  const trie = options.trie ?? buildTrie(options.expandedMap);
  const scriptConfig = (options.scriptId ? getScriptRuleConfig(options.scriptId) : null) ?? inferScriptRuleConfig(options.expandedMap);
  const inferredDefaults = languageDefaultRuleOverrides(options.languageId, scriptConfig.scriptId);
  const ruleOptions: EngineRuleOptions = {
    ...DEFAULT_RULES,
    ...inferredDefaults,
    ...(options.rules ?? {})
  };
  const ruleContext: RuleContext = {
    options: ruleOptions,
    script: scriptConfig,
    languageId: options.languageId,
    nasalizationProfile: deriveNasalizationProfile(options.expandedMap)
  };
  const inputStack = createInputStack();

  let renderedBuffer = "";

  function rewriteFromCurrentInput(): Edit {
    const nextRendered = computeRendered(inputStack.toString(), trie, ruleOptions, ruleContext);
    const edit: Edit = {
      backspace: renderedBuffer.length,
      insert: nextRendered
    };
    renderedBuffer = nextRendered;
    return edit;
  }

  const engine: RuntimeAwareTransliterationEngine = {
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
          result += computeRendered(chunk, trie, ruleOptions, ruleContext);
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
    },
    getRuntime(): EngineRuntime {
      return "js";
    }
  };
  return engine;
}
