# Fixes for Scale

## Goal
Ensure `lipic-js` transliteration is script-correct and production-safe across JS and WASM for:
`hi`, `mr`, `ne`, `sa`, `bn`, `as`, `gu`, `pa`, `ta`, `te`, `kn`, `ml`, `or`.

## Status
- `[x]` issue audit completed
- `[ ]` fixes in progress

## Checklist

### 1) Engine Correctness (P0)
- [x] JS rule pipeline: remove Devanagari hardcoding and make script-aware.
- [x] Rust/WASM rule pipeline: match JS behavior with script-aware rules.
- [x] Add runtime guard to prevent Devanagari leakage in non-Devanagari languages.

### 2) Map Generation (P1)
- [x] Support TOML alias-array parsing in generator.
- [x] Regenerate maps with proper per-script nukta/alias normalization.
- [x] Remove Hindi lexical contamination from non-Hindi language maps.
- [x] Pin upstream `@indic-transliteration/common_maps` version for reproducible outputs.

### 3) Test Hardening (P1)
- [x] Add per-language script-correctness tests.
- [x] Add explicit cross-script leakage tests.
- [x] Expand WASM parity tests to non-Devanagari languages.

### 4) Integration Wiring (P2)
- [x] Fix playground `scriptId` by selected language.
- [x] Show script/runtime diagnostics in playground UI.

## Release Gate (v0.0.1-beta)
- [ ] P0 complete
- [ ] P1 complete
- [ ] P2 complete
- [ ] `npm run test:run` passes with no script-leak regressions
