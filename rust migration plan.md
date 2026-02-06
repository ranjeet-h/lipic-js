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
5. Perf and size gates in local release checks before shipping.
6. Latest stable Rust crates only (no prerelease dependencies in production).

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

## Rust Toolchain + Package Baseline (Updated: February 6, 2026)

### Toolchain Policy
- Rust channel: `stable` only.
- Required target: `wasm32-unknown-unknown`.
- Use `cargo add` without pinned old versions so new setup always resolves to latest stable crates.
- Disallow prerelease crates (`-alpha`, `-beta`, `-rc`) unless explicitly approved for a short-lived experiment.

### Core Crates (latest stable checked on February 6, 2026)
- `wasm-bindgen` `0.2.108`
- `js-sys` `0.3.85`
- `web-sys` `0.3.85` (only if browser APIs are needed in Rust)
- `serde` `1.0.228`
- `serde_json` `1.0.149`
- `serde-wasm-bindgen` `0.6.5`
- `thiserror` `2.0.18`
- `anyhow` `1.0.101` (non-hot-path/app boundary errors only)
- `hashbrown` `0.16.1`
- `ahash` `0.8.12` (optional; for `wasm32-unknown-unknown`, avoid `runtime-rng` feature path)
- `bincode` `3.0.0` currently hard-fails compile upstream; defer and re-check in M5 before adoption
- `unicode-segmentation` `1.12.0` (if grapheme-aware cursor/backspace behavior is needed)

### Dev/Test/Bench Crates (latest stable checked on February 6, 2026)
- `wasm-bindgen-test` `0.3.58`
- `proptest` `1.10.0`
- `criterion` `0.8.2`

### Scaffold Commands (M1)
```bash
mkdir -p rust-core
cd rust-core
cargo init --lib
rustup target add wasm32-unknown-unknown

# runtime deps
cargo add wasm-bindgen js-sys serde serde_json serde-wasm-bindgen thiserror anyhow hashbrown

# optional runtime deps
cargo add web-sys unicode-segmentation

# dev deps
cargo add --dev wasm-bindgen-test proptest criterion
```

---

## Milestones & Tasks

## Progress Tracker (Updated: February 6, 2026)
- `M0` Baseline & instrumentation: `DONE` (stabilized benchmark harness + local perf/size artifact generation implemented)
- `M1` Rust core skeleton + wasm bindings + TS wrapper: `DONE`
- `M2` Trie + tokenizer + pre-rule render in Rust: `DONE`
- `M3` Rule pipeline (Nukta, Nasalization, Ligature, Schwa) + toggles: `DONE`
- `M4` State machine parity: `DONE`
- `M5` Language-pack system: `DONE` (base/overlay/full pack compile + merge + lazy runtime caching implemented)
- `M6` Performance optimization pass: `IN PROGRESS` (hot-path trie/tokenizer optimization + rule-stage buffer reuse landed; release-profile benchmark deltas recorded)
- `M7` Production hardening: `IN PROGRESS` (WASM-preferred hybrid runtime + init/runtime JS fallback recovery implemented; browser matrix validation pending)

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
- Local scripts produce perf and size artifacts.
- Status: `DONE` (`bench:baseline` + `size:baseline` generate timestamped and latest artifacts under `docs/perf`)

---

## M1 — Rust Core Skeleton
### Tasks
- Create `rust-core/` crate with engine state struct.
- Add latest stable crates via `cargo add` (do not hand-pin older versions).
- Implement no-op methods with same API semantics.
- Expose WASM bindings via `wasm-bindgen`.
- Add JS wrapper that mirrors current engine interface.

### Done Criteria
- JS app can instantiate WASM engine via wrapper.
- Existing host code runs unchanged.
- Status: `DONE`

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
- Status: `DONE` (trie + tokenizer + pre-rule render ported to Rust with parity tests)

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
- Status: `DONE` (rule order/toggles ported and validated)

---

## M4 — State Machine Parity
### Tasks
- Port input stack and composition window logic.
- Match `backspace/commit/reset` behavior exactly.
- Match separator commit semantics and preedit morphing.

### Done Criteria
- Smart backspace tests pass on WASM core.
- Preedit tests pass (`k -> क -> kh -> ख`) and spacing behavior parity.
- Status: `DONE`

---

## M5 — Language Pack System (Scale to 21)
### Tasks
- [x] Define compact binary language-pack format.
- [x] Build pack compiler from JSON maps/rules -> binary artifacts.
- [x] Split script-base packs (e.g., Devanagari core) + per-language overlays.
- [x] Load packs lazily by language ID.

### Done Criteria
- Dynamic language pack loading works.
- At least 3 languages use new pack pipeline successfully.
- Status: `DONE` (binary schema v1 + full/base/overlay compile + merge + engine boot from one/two packs + lazy-by-language runtime caching)

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
- Current Progress:
  - switched hot path to char-slice trie traversal (`walk_longest_chars_value`)
  - added rendered-length caching in engine state to cut repeated scans/allocation pressure
  - refactored rule pipeline to reuse buffers across stages (`apply_*_into` + swap pipeline)
  - benchmark methodology stabilized (fixed warmup/rounds, round-median aggregation, release WASM packaging, engine reuse per round)
  - latest snapshot (February 6, 2026): WASM is still slower than JS on current harness (`processChar p95` ~2.46us vs ~1.33us; `processText long avg` ~260.8us vs ~158.5us), so milestone remains `IN PROGRESS`

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
- Current Progress:
  - hybrid selector supports WASM-preferred and JS-only modes
  - fallback now recovers on both WASM initialization failures and runtime method failures
  - pack-based WASM path also recovers to JS fallback when runtime calls throw
  - unit tests added for runtime fallback recovery paths
  - remaining: browser matrix validation in real Chrome/Firefox/Safari

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
- Local benchmark trend lines (`docs/perf/baseline.*.json`).
- Optional local release gate on hard regression thresholds.

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
2. Add broader WASM-vs-JS fixture parity for `commit/reset/processText` edge sequences (finish M4).
3. Add pack artifact loader path in TS app/runtime and lazy-load by language ID (M5).
4. Roll out pack pipeline for at least 3 languages (M5 done criteria).
5. Start perf profiling with CI thresholds (`processChar` p95 and `processText` throughput) (M6).
