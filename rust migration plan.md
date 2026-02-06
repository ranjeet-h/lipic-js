# Rust Migration Plan (Hybrid JS + WASM)

## Goal
Build the fastest transliteration library while keeping JS integration ergonomics.

- Keep JS for DOM/events/integration.
- Move pure compute core to Rust/WASM.
- Scale cleanly to 21 languages.

## Principles
1. Hybrid architecture, not full rewrite.
2. One JS<->WASM call per user event.
3. Zero/low-allocation hot path in Rust.
4. Script-core + language-pack overlays.
5. Perf gates in CI before shipping.

---

## Target Architecture

### JS Layer (stays in JS/TS)
- Input interception (`beforeinput`, `keydown`, composition)
- DOM mutation (`deleteAndInsert`, contenteditable helpers)
- Host APIs and app adapters
- Fallback JS engine for non-WASM environments

### Rust/WASM Layer (move here)
- Trie build/load
- Tokenization + longest-match
- Rule pipeline
- Engine state machine (`process_char`, `process_text`, `backspace`, `commit`, `reset`)
- Compact language pack runtime

---

## Public API Contract (Stable)
Keep this API shape unchanged from JS host perspective:

```ts
type Edit = { backspace: number; insert: string };

interface Engine {
  processChar(ch: string): Edit;
  processText(text: string): Edit;
  backspace(): Edit;
  commit(): Edit;
  reset(): void;
}
```

WASM implementation must be swappable under same API.

---

## Milestones & Tasks

## M0 — Baseline & Instrumentation
### Tasks
- Add benchmark harness for:
  - `processChar` p50/p95
  - `processText` short/medium/long inputs
  - backspace stress
  - mixed punctuation/whitespace
- Record current JS baseline numbers.
- Add bundle-size baseline checks.

### Done Criteria
- Baseline report committed.
- CI job produces perf and size artifacts.

---

## M1 — Rust Core Skeleton
### Tasks
- Create `rust-core/` crate with engine state struct.
- Implement no-op methods with same API semantics.
- Expose WASM bindings via `wasm-bindgen`.
- Add JS wrapper that mirrors current engine interface.

### Done Criteria
- JS app can instantiate WASM engine via wrapper.
- Existing host code runs unchanged.

---

## M2 — Trie + Token Pipeline in Rust
### Tasks
- Port trie structure + longest-match traversal.
- Port tokenizer and context state transitions.
- Port core render pass (pre-rules).
- Keep output deterministic with JS reference tests.

### Done Criteria
- Golden tests match JS for covered cases.
- `processChar` parity for existing Milestone 2 scenarios.

---

## M3 — Rule Engine Port
### Tasks
- Port rules in current order:
  1. Nukta
  2. Nasalization
  3. Ligature
  4. Schwa
- Add rule toggle config parity with JS.
- Add language-specific rule hooks.

### Done Criteria
- Rule test suite parity passes (Marathi current coverage).
- No behavior regression against JS reference fixtures.

---

## M4 — State Machine Parity
### Tasks
- Port input stack and composition window logic.
- Match `backspace/commit/reset` behavior exactly.
- Match separator commit semantics and preedit morphing.

### Done Criteria
- Smart backspace tests pass on WASM core.
- Preedit tests pass (`k -> क -> kh -> ख`) and spacing behavior parity.

---

## M5 — Language Pack System (Scale to 21)
### Tasks
- Define compact binary language-pack format.
- Build pack compiler from JSON maps/rules -> binary artifacts.
- Split script-base packs (e.g., Devanagari core) + per-language overlays.
- Load packs lazily by language ID.

### Done Criteria
- Dynamic language pack loading works.
- At least 3 languages use new pack pipeline successfully.

---

## M6 — Performance Optimization Pass
### Tasks
- Profile Rust core (CPU + alloc hotspots).
- Eliminate per-event heap allocations where feasible.
- Use preallocated buffers/small-string optimizations.
- Reduce JS/WASM boundary overhead (single-call event path).

### Done Criteria
- `processChar` p95 improves measurably over JS baseline.
- `processText` throughput improves measurably.
- No regression in correctness suite.

---

## M7 — Production Hardening
### Tasks
- Add fallback selection logic:
  - Prefer WASM if supported
  - Fallback to JS otherwise
- Add error-handling and recovery rules.
- Add compatibility tests across modern browsers.

### Done Criteria
- Stable hybrid runtime in Chrome/Firefox/Safari desktop.
- Fallback path validated.

---

## Testing Strategy

## 1. Parity Tests
- Shared fixtures executed against:
  - JS reference engine
  - WASM engine
- Assert exact `Edit` equality for same call sequence.

## 2. Property Tests
- Determinism for repeated runs.
- No negative backspace.
- Reset invariants.

## 3. Regression Suites
- Existing Marathi extensive tests.
- Uppercase/paste/input-interceptor behavior tests.
- Future language-specific suites.

## 4. Perf Tests
- CI benchmark trend lines.
- Fail build on hard regression thresholds.

---

## Performance Gates (Initial)
- `processChar` p95: at least 20% better than JS baseline in benchmark harness.
- `processText` (>=128 chars): at least 2x faster than JS baseline.
- Bundle impact: document WASM+glue gzip size and keep under agreed budget.

(Adjust thresholds after first stable benchmark run.)

---

## Risks & Mitigations
1. JS<->WASM overhead cancels gains
- Mitigation: coarse-grained API calls, no chatty interop.

2. Behavior drift between JS and Rust
- Mitigation: golden parity tests and CI comparison.

3. Large WASM bundle size
- Mitigation: language-pack lazy loading and binary compaction.

4. Complex language rule scaling
- Mitigation: table-driven rule engine and per-language module boundaries.

---

## Immediate Next Tasks (Actionable)
1. Add benchmark harness and baseline report (M0).
2. Create Rust crate + wasm bindings scaffold (M1).
3. Port trie/longest-match with parity fixtures (M2 partial).
4. Set up dual-engine test runner (JS vs WASM).
5. Define binary language-pack schema draft.

