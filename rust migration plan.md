# Rust Migration Plan

## Goal
Ship `lipic-js` with correct, script-safe transliteration across all supported languages (`hi`, `mr`, `ne`, `sa`, `bn`, `as`, `gu`, `pa`, `ta`, `te`, `kn`, `ml`, `or`) for JS + WASM runtimes.

## Progress Legend
- `[x]` done
- `[ ]` pending

## Completed
- [x] Full potential-issues sweep completed across JS engine, Rust engine, generator, maps, playground wiring, and tests.

## Fix Plan (Do One at a Time)

### P0 Correctness
- [ ] Make rule pipeline script-aware in JS engine (remove hardcoded Devanagari constants and glyph checks).
- [ ] Make rule pipeline script-aware in Rust/WASM engine (same behavior as JS).
- [ ] Add runtime safety guard: non-Devanagari languages must not emit Devanagari codepoints.

### P1 Data Generation
- [ ] Fix generator TOML parsing to support both string values and array alias values.
- [ ] Regenerate language maps with proper nukta/alias normalization for each script.
- [ ] Remove Hindi-template lexical contamination from non-Hindi languages (or split template strategy per language).
- [ ] Pin `@indic-transliteration/common_maps` input version for reproducible generation.

### P1 Tests
- [ ] Add script-correctness tests for every language (not only non-empty output).
- [ ] Add negative tests for cross-script leakage (e.g., Bengali output must not contain Devanagari marks).
- [ ] Extend WASM parity coverage beyond Marathi to representative non-Devanagari languages.

### P2 Product Wiring
- [ ] Fix playground to pass correct `scriptId` per selected language instead of hardcoded `devanagari`.
- [ ] Add quick diagnostics in playground to show active script/runtime for easier manual validation.

## Release Gate for v0.0.1-beta
- [ ] All P0 items complete.
- [ ] All P1 items complete.
- [ ] P2 playground script wiring complete.
- [ ] Full test suite green (`npm run test:run`) and no script-leak failures.
