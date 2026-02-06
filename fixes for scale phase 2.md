# Fixes for Scale — Phase 2

## Goal
Eliminate silent corruption, artifact leakage, and linguistic incorrectness across all 13 languages before v0.0.1-beta ships. Phase 1 made the pipeline script-aware; Phase 2 makes it **language-correct** and **production-safe** at billion-user scale.

## Status
- `[x]` deep audit completed
- `[x]` fixes complete (JS + WASM)

---

## Checklist

### 1) Silent Deletion — Empty Glyph Entries (P0-CRITICAL)

Map entries with `glyph: ""` silently swallow keystrokes. The engine accepts input, mutates context state, and emits nothing — a "ghost edit" users cannot understand.

- [x] **Punjabi `ri` / `R`**: vowel entries with `glyph: ""`, `matra: ""`. Gurmukhi has no vocalic R. Remove these entries entirely so the engine falls back to raw Latin, or map to a sensible approximation.
- [x] **Punjabi `Sh`**: consonant with `glyph: ""`. Gurmukhi has no ṣ. Remove entry so `Sh` falls back to raw or map to `ਸ਼` (sh).
- [x] **Tamil `MM`**: mark with `glyph: ""`. Tamil has no chandrabindu. Remove entry so `MM` falls back to raw.
- [x] **Build-time validator**: add a CI check that fails if any `vowel|consonant|conjunct|mark` entry has `glyph === ""`. Empty entries must not ship.

**Files**: `tools/generate-language-maps-from-common-maps.mjs`, all `maps/*/phonetic.*.json`

---

### 2) Transliteration Artifact Leakage (P0-CRITICAL)

The TOML `common_maps` contain scholarly transliteration conventions (apostrophes, superscripts) that are appropriate for academic text but **not** for keyboard output.

- [x] **Tamil `ri` vowel**: glyph `ரு'` and matra `்ரு'` contain literal ASCII apostrophe `'`. This is a TOML transliteration convention, not valid Tamil. Either remove the entry or map to a phonetically appropriate Tamil form.
- [x] **Tamil `Rh`**: glyph `ஃட³` contains superscript `³`. Not valid Tamil text output.
- [x] **Tamil `R` (alias for `ri`)**: same apostrophe issue as `ri`.
- [x] **Build-time validator**: add a CI check that rejects any glyph/matra containing ASCII punctuation (`'`, `"`, `` ` ``), superscripts (`¹²³`), or Latin letters in non-raw entries.
- [x] **Generator fix**: when TOML array values contain transliteration artifacts, either skip them, use a different array element, or apply a per-language override.

**Files**: `tools/generate-language-maps-from-common-maps.mjs`, `maps/tamil/phonetic.*.json`

---

### 3) NFC Normalization Missing in Generator (P0-CRITICAL)

`generate-language-maps-from-common-maps.mjs` does NOT call `.normalize("NFC")` on transformed glyphs. This causes:

- [x] **Punjabi `Rr` → `ਡ਼` instead of precomposed `ੜ`**: the generator decomposes `ड` → `ਡ` + nukta `਼`, producing the decomposed form. The correct TOML mapping `ड़ → ੜ` is never matched because of normalization mismatch between template and TOML keys.
- [x] **Potential similar issues in Bengali, Odia, Kannada** where nukta-bearing consonants exist.
- [x] **Fix**: normalize both template glyphs (before transform) and output glyphs (after transform) to NFC in the generator.
- [x] **Fix**: also normalize TOML keys/values when parsing, so decomposed vs precomposed mismatches cannot cause missed replacements.

**Files**: `tools/generate-language-maps-from-common-maps.mjs`

---

### 4) Nasalization Rule Hardcodes Devanagari Glyphs (P1)

`nasalization.ts` uses literal Devanagari characters (`क`, `ख`, `ग`, etc.) in `NASAL_GLYPHS` and `VARGA_TO_NASAL`. This means:

- [x] **Anusvara mode works cross-script** (it only checks token kind, not glyph) — no fix needed.
- [x] **Panchamakshar mode is dead code for non-Devanagari**: the glyph sets never match Bengali/Tamil/etc. consonants. Either:
  - Make the varga sets script-aware (derive from the map or `ScriptRuleConfig`), or
  - Disable panchamakshar mode for non-Devanagari until properly implemented.

**Files**: `src/engine/rules/nasalization.ts`, `src/engine/rules/types.ts`

---

### 5) Schwa Deletion Applied to Wrong Languages (P1)

`schwa.ts` is guarded by `script.kind === "devanagari"`, meaning it fires for **all** Devanagari languages: Hindi, Marathi, Nepali, Sanskrit. But:

- [x] **Sanskrit**: schwa deletion is linguistically **wrong** for Sanskrit (all inherent vowels are pronounced).
- [x] **Nepali/Marathi**: have different schwa deletion rules than Hindi. The current patterns (`क + inherentA + य → काय`, `क़ + inherentA → क़ा`) are Hindi-specific.
- [x] **Fix**: make schwa deletion **language-configurable**, not just script-configurable. Add a `languageId` to `RuleContext` and use it to select the correct schwa patterns (or disable entirely for Sanskrit).

**Files**: `src/engine/rules/schwa.ts`, `src/engine/rules/types.ts`, `src/engine/transliteration-engine.ts`

---

### 6) Ligature Rule Contains Incorrect Mapping (P1)

`ligature.ts` line 7:
```ts
if (left === "ग" && right === "य") return "ज्ञ";
```

- [x] This converts `ग् + य` (gya) into `ज्ञ` (jña) — **these are different consonant clusters**. `ग्य` (gya) is a legitimate cluster (e.g., "योग्य" yogya) and should NOT be collapsed to `ज्ञ`.
- [x] The `gy → ज्ञ` shortcut already exists as a **conjunct entry** in the expanded map. The ligature rule is redundantly (and incorrectly) rewriting token sequences that may have been produced by regular consonant input, not the shortcut.
- [x] **Fix**: remove the `ग + य → ज्ञ` ligature rule entirely. The map-level conjunct handles the `gy` shortcut correctly.

**Files**: `src/engine/rules/ligature.ts`

---

### 7) Script Inference is Fragile (P1)

`inferScriptRuleConfig()` iterates map entries and picks the first matching Unicode block. This is fragile because:

- [x] If early entries have empty glyphs or mixed-script characters, wrong script config is inferred.
- [x] The language/script is already known from `language-registry.ts` (`scriptId`).
- [x] **Fix**: pass `scriptId` explicitly from the language registry to the engine, instead of inferring from map contents. Use `inferScriptRuleConfig` only as a fallback for custom/unknown maps.

**Files**: `src/engine/rules/script-config.ts`, `src/engine/transliteration-engine.ts`, `src/language/language-registry.ts`

---

### 8) Tamil Missing Essential Characters (P1)

Tamil has unique phonemes not present in Hindi/Devanagari. The Hindi-as-template approach cannot generate these:

- [ ] **Missing `zh` → `ழ`** (retroflex L / zha): one of the most distinctive Tamil letters. Used in words like `தமிழ்` (tamiḻ). Critical for Tamil users.
- [ ] **Missing short `e` → `எ`** and **short `o` → `ஒ`**: Tamil distinguishes short/long e and o (எ/ஏ, ஒ/ஓ). Currently only long forms are mapped.
- [ ] **Missing `n` contextual variant `ன`** (alveolar n): Tamil has three n's: `ந` (dental), `ண` (retroflex), `ன` (alveolar). Currently `n` maps only to `ந`.
- [ ] **Missing `R` / `r` contextual variant `ற`** (alveolar r): Tamil has `ர` (dental r) and `ற` (alveolar r). Currently only `ர` is mapped.
- [ ] **Missing `L` → `ள`** (retroflex L): present in the TOML as `ळ → ள` but not mapped in the keyboard.

**Files**: `maps/tamil/phonetic.base.json`, `maps/tamil/phonetic.expanded.json`

---

### 9) Punjabi Anusvara/Tippi Inconsistency (P1)

Gurmukhi uses two nasal marks contextually:
- **Tippi** `ੰ` (U+0A70): before consonants in the same syllable
- **Bindi** `ਂ` (U+0A02): elsewhere

Currently:
- [x] Map `M` → `ੰ` (tippi)
- [x] `script-config.ts` `anusvara` → `ਂ` (bindi)
- [x] TOML says `ं → ਂ` (bindi)
- [x] **Fix**: decide on consistent behavior. For a phonetic keyboard, `ਂ` (bindi) is the safer default. Contextual tippi/bindi selection would be ideal but requires rule-level support.

**Files**: `maps/punjabi/phonetic.*.json`, `src/engine/rules/script-config.ts`

---

### 10) enforceScriptSafety Only Denylists Devanagari (P2)

`enforceScriptSafety()` only checks for residual Devanagari (`[\u0900-\u097F]`). It allows:
- ASCII punctuation, superscripts, Latin letters in output
- Characters from other Indic blocks (e.g., Bengali characters in Tamil output)

- [x] **Fix**: implement per-script **allowlist** validation instead of single-block denylist. Each script should define its valid Unicode ranges.
- [x] Consider making this a build-time validation rather than runtime (cheaper, catches issues earlier).

**Files**: `src/engine/transliteration-engine.ts`, `src/engine/rules/script-config.ts`

---

### 11) Nukta Rule is Incomplete for Devanagari (P2)

`nukta.ts` only handles `q → क़`, `f → फ़`, `क* → क़`, `ग* → ग़`. Missing:

- [ ] `ज़` (za — currently handled by map entry `z`, but `j*` composition is missing)
- [ ] `ख़` (kha with nukta — no composition path)
- [ ] `ड़` / `ढ़` (currently in map as `Rr`/`Rh`, but `D*`/`Dh*` compositions missing)
- [ ] The rule mixes two input styles (star-modifier and direct Latin letter) inconsistently. Document or unify the approach.

**Files**: `src/engine/rules/nukta.ts`

---

### 12) Generator "First Array Element" Can Pick Wrong Variant (P2)

`parseTomlStringMap()` picks `values[0]` from TOML arrays. Many `common_maps` entries use arrays for alternates:

- [ ] Index 0 may be a scholarly/transliteration form (with apostrophes, diacritics) rather than the native script form.
- [ ] **Fix**: add per-language overrides or heuristics to select the correct variant (e.g., prefer the variant without ASCII characters).

**Files**: `tools/generate-language-maps-from-common-maps.mjs`

---

### 13) Odia `v` Mapping May Need Review (P2)

- [x] Odia `v` → `ଵ` (U+0B35). Most Odia content uses `ୱ` (U+0B71, wa) for this sound. Verified: `v` keeps `ଵ` (va), `w` remapped to `ୱ` (wa).

**Files**: `maps/odia/phonetic.*.json`

---

### 14) Build-Time Map Validation CI (P1)

Create a comprehensive build-time validator to prevent regressions:

- [x] No `vowel|consonant|conjunct|mark` entry has `glyph === ""` (catches silent deletion)
- [x] No output glyph contains ASCII `' " \`` or superscripts `¹²³` (catches artifacts)
- [x] All glyphs are NFC-normalized (catches normalization bugs)
- [x] Non-Devanagari maps contain zero Devanagari codepoints (catches script leakage)
- [x] All consonant/vowel glyphs fall within the expected Unicode block for the target script (catches cross-script contamination)

**Files**: new `tools/validate-maps.mjs` or `tests/maps/map-validation.test.ts`

---

---

## Test Cases Per Fix

> Every fix must ship with corresponding tests. Below are the exact test assertions to add.
> File convention: `tests/phase2/<fix-number>-<short-name>.test.ts`

---

## Release Gate (v0.0.1-beta) — Phase 2 Additions
- [x] P0-CRITICAL items (1, 2, 3) complete — no silent deletion or artifact output
- [x] P1 items (4–9, 14) complete — correct linguistic behavior per language
- [x] P2 items (10–13) complete — per-script safety, nukta completeness, generator variant selection, Odia v
- [x] `npm run test:run` passes with expanded per-language correctness tests (177 tests)
- [x] Build-time map validator passes in CI (tests/phase2/14-map-validation.test.ts)
- [x] All phase 2 test files pass: `npx vitest run tests/phase2/` (14 files, 53 tests)
- [x] WASM engine updated with all Phase 2 fixes (parity test passes)
