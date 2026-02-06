# Performance & Size Improvements

> Baseline: `docs/perf/baseline.latest.json` (2026-02-06), Node v22.16.0

## Current State

### JS Engine Benchmarks

| Operation | p50 (μs) | p95 (μs) | avg (μs) | Notes |
|---|---|---|---|---|
| processChar | 0.292 | 0.791 | 0.373 | Per keystroke |
| backspace | 0.375 | 0.667 | 0.374 | Per keystroke |
| processText (7 chars) | 0.834 | 1.084 | 0.940 | Short paste |
| processText (124 chars) | 12.25 | 55.0 | 18.81 | **4.5x p95/p50 variance** |
| processText (1024 chars) | 97.71 | 305.88 | 133.79 | **3.1x p95/p50 variance** |

### Bundle Size

| File | Raw | Gzip |
|---|---|---|
| `dist/index.js` (ESM) | 116 KB | ~14 KB |
| `dist/index.cjs` (CJS) | 118 KB | ~14 KB |
| `dist/lipic-js.iife.js` | 117 KB | ~15 KB |

### Raw Map Data on Disk

| Category | Count | Total Size |
|---|---|---|
| Language expanded maps | 13 | ~74 KB |
| Language base maps | 13 | ~38 KB |
| Devanagari scheme maps | 8 | ~29 KB |
| **Total** | **34** | **~141 KB** |

---

## A. Bundle Size — Lazy-Load Language Maps

**Problem:** `src/index.ts` (lines 1–35) and `src/language/language-registry.ts` (lines 1–13) statically import **all 13 language maps + 8 Devanagari scheme maps**. A user who only needs Hindi pays for all 13 languages (~74 KB expanded JSON alone).

### A1. Lazy-load maps in `language-registry.ts`

**Impact:** ~80 KB off main bundle  
**Effort:** Medium

Replace static imports with dynamic `import()` loaders. The registry stores a loader function instead of the data:

```ts
// Before
import hindiExpanded from "../../maps/hindi/phonetic.expanded.json";
// ...
expandedMap: hindiExpanded

// After
loadMap: () => import("../../maps/hindi/phonetic.expanded.json").then(m => m.default)
```

`resolveLanguageEngineConfig` becomes async (it already feeds into the async `enableTransliteration`).

### A2. Remove bulk map re-exports from `index.ts`

**Impact:** ~80 KB off main bundle  
**Effort:** Low

Lines 1–35 import every map and lines 196–231 re-export them all. These are already accessible via subpath exports in `package.json` (e.g., `"./maps/hindi/phonetic.base"`). The top-level barrel should not bundle them.

### A3. Make `maps` const lazy or move to a separate entrypoint

**Impact:** Prevents all maps loading at import time  
**Effort:** Low

The `maps` object (lines 101–193 of `index.ts`) forces every map into the main chunk. Options:
- Move to a separate entrypoint: `lipic-js/maps`
- Or use getter-based lazy loading

---

## B. `processText` Performance — Reduce P95 Variance

**Problem:** Medium text (124 chars) p95 is 55 μs vs p50 12 μs (4.5x). Long text (1024 chars) p95 is 306 μs vs p50 98 μs (3.1x). The spikes come from GC pressure due to heavy allocation in the tokenize → rules pipeline.

### B1. Pre-compile all regexes as module-level constants

**Impact:** Eliminates per-call regex compilation, reduces p95 spikes  
**Effort:** Low

Affected locations:
- `transliteration-engine.ts` line 226: `text.split(/(\s+|[.,!?;:()[\]{}'"-])/)` — split regex created per call
- `transliteration-engine.ts` line 58: `isSeparator` — `/[\s.,!?;:()[\]{}"'-]/u` created per call
- `transliteration-engine.ts` line 62: `nextContextForRawChar` — `/\s/u` created per call
- `rules/types.ts` line 32: `isWordBoundaryToken` — `/[\s.,!?;:()[\]{}'"-]/u` created per call

```ts
// Before (inside function)
return /[\s.,!?;:()[\]{}"'-]/u.test(char);

// After (module-level)
const SEPARATOR_RE = /[\s.,!?;:()[\]{}"'-]/u;
// ...
return SEPARATOR_RE.test(char);
```

### B2. Schwa rule: mutate in-place instead of cloning all tokens

**Impact:** Eliminates one full array clone + object spread per token  
**Effort:** Low

`rules/schwa.ts` line 26 does `tokens.map(t => ({...t} as Token))` cloning every token even though only a few are modified. Since schwa is the last rule in the pipeline, it can safely mutate the input array directly.

```ts
// Before
const out = tokens.map((t) => ({ ...t } as Token));

// After — mutate in-place
const out = tokens; // last rule, safe to mutate
```

### B3. Merge `tokenizeBuffer` and `insertHalants` into a single pass

**Impact:** Eliminates one intermediate `Token[]` allocation  
**Effort:** Medium

Currently `tokenizeBuffer` builds `rawTokens[]`, then `insertHalants` iterates it to produce another array. These can be merged: insert halant tokens inline during tokenization.

### B4. Use array + join for `stringifyTokens`

**Impact:** Faster for long token streams  
**Effort:** Low

`stringifyTokens` uses `out += token.glyph` in a loop. For long texts (many tokens), collecting glyphs into an array and calling `.join("")` once can be faster due to V8 string concat behavior.

```ts
// Before
let out = "";
for (const token of tokens) { out += token.glyph; }

// After
const parts: string[] = [];
for (const token of tokens) { parts.push(token.glyph); }
return parts.join("");
```

---

## C. Keystroke Path Micro-optimizations

### C1. Cache `inputStack.toString()` result

**Impact:** ~10–20% improvement on processChar  
**Effort:** Low

`input-stack.ts` calls `parts.join("")` on every `processChar` → `rewriteFromCurrentInput` → `computeRendered`. Maintain a cached string:

```ts
let cached = "";
push(char) { parts.push(char); cached += char; }
pop()      { const c = parts.pop(); if (c) cached = cached.slice(0, -c.length); return c; }
toString() { return cached; }
```

### C2. Replace `isSeparator` regex with a `Set` or charCode check

**Impact:** Marginal per-call, avoids regex engine overhead  
**Effort:** Low

```ts
const SEPARATORS = new Set([" ", "\t", "\n", ".", ",", "!", "?", ";", ":", "(", ")", "[", "]", "{", "}", "\"", "'", "-"]);
function isSeparator(char: string): boolean {
  return SEPARATORS.has(char);
}
```

### C3. Incremental backspace (avoid full re-tokenize)

**Impact:** Significant for long compositions  
**Effort:** High

Currently every `backspace()` calls `rewriteFromCurrentInput` which re-tokenizes the entire buffer and re-runs the full rule pipeline. For a 20-char composition, this means re-processing all 20 chars just to remove the last one.

Options:
- Cache the token stream and invalidate from the edit point
- Maintain a per-character rendered cache and only recompute the affected suffix
- Accept current behavior for now since backspace p50 is only 0.375 μs

---

## Priority Matrix

| # | Fix | Size Impact | Perf Impact | Effort |
|---|---|---|---|---|
| A1 | Lazy-load maps in registry | **~80 KB saved** | — | Medium |
| A2 | Remove bulk re-exports from index.ts | **~80 KB saved** | — | Low |
| B1 | Pre-compile regexes | — | **Reduce p95 spikes** | Low |
| C1 | Cache inputStack.toString() | — | **~10–20% keystroke** | Low |
| B2 | Schwa in-place mutation | — | **Reduce alloc** | Low |
| A3 | Lazy/separate maps entrypoint | **Prevents eager load** | — | Low |
| B3 | Merge tokenize + insertHalants | — | **1 fewer alloc pass** | Medium |
| B4 | Array join in stringifyTokens | — | **Faster long text** | Low |
| C2 | Set-based isSeparator | — | **Marginal** | Low |
| C3 | Incremental backspace | — | **Big for long words** | High |

### Suggested Order

1. **A2 + A1** — Biggest user-facing win (bundle size), low-to-medium effort
2. **B1 + C1 + C2** — Quick regex/cache wins, all low effort
3. **B2** — Schwa in-place, low effort
4. **B3 + B4** — Tokenizer merge and stringify, medium effort
5. **A3** — Maps entrypoint cleanup
6. **C3** — Incremental backspace (future)
