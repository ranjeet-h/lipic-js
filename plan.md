# lipic-js — Indian Language Support Plan

## Currently Supported (13 languages, 9 scripts)

| # | Language | Code | Script | Status |
|---|----------|------|--------|--------|
| 1 | Hindi | hi | Devanagari | ✅ Done |
| 2 | Marathi | mr | Devanagari | ✅ Done |
| 3 | Nepali | ne | Devanagari | ✅ Done |
| 4 | Sanskrit | sa | Devanagari | ✅ Done |
| 5 | Bengali | bn | Bengali | ✅ Done |
| 6 | Assamese | as | Bengali | ✅ Done |
| 7 | Gujarati | gu | Gujarati | ✅ Done |
| 8 | Punjabi | pa | Gurmukhi | ✅ Done |
| 9 | Tamil | ta | Tamil | ✅ Done |
| 10 | Telugu | te | Telugu | ✅ Done |
| 11 | Kannada | kn | Kannada | ✅ Done |
| 12 | Malayalam | ml | Malayalam | ✅ Done |
| 13 | Odia | or | Odia | ✅ Done |

---

## Phase 1 — Devanagari Script Languages (same script, new phonetic maps)

These languages use the Devanagari script which is already supported. They need language-specific phonetic maps and possibly language-specific rules (schwa deletion behavior, conjuncts, etc.).

- [x] **Konkani (kok)** — Official language of Goa, 8th Schedule. Uses Devanagari. Has some unique conjuncts and vowel usage patterns.
- [x] **Maithili (mai)** — 8th Schedule language, ~35M speakers. Uses Devanagari. Has its own phonological patterns distinct from Hindi.
- [x] **Dogri (doi)** — 8th Schedule language, ~3M speakers. Uses Devanagari. Spoken in Jammu region.
- [x] **Bodo (brx)** — 8th Schedule language, ~1.5M speakers. Uses Devanagari. Spoken in Assam. Has tonal features.
- [x] **Sindhi (sd)** — 8th Schedule language, ~2.7M speakers. Can use Devanagari (has special nukta characters for Sindhi-specific sounds like implosives).
- [x] **Chhattisgarhi (hne)** — ~18M speakers. Uses Devanagari. Regional language of Chhattisgarh.
- [x] **Bhojpuri (bho)** — ~50M speakers. Uses Devanagari. Major regional language across Bihar/UP.
- [x] **Rajasthani (raj)** — ~50M speakers. Uses Devanagari. Covers dialects like Marwari, Mewari, etc.
- [x] **Awadhi (awa)** — ~38M speakers. Uses Devanagari. Spoken in central UP.

## Phase 2 — New Script: Meitei Mayek (Manipuri)

Meitei (Manipuri) is an 8th Schedule language that has its own unique script — Meitei Mayek (Unicode block U+ABC0–U+ABFF). This requires a new script implementation.

- [x] **Add Meitei Mayek script support to engine** — Unicode block U+ABC0–U+ABFF, define halant, anusvara, script config.
- [x] **Create Meitei Mayek base map** — `maps/meitei/base.json` with consonants, vowels, and marks.
- [x] **Create Manipuri phonetic maps** — `maps/manipuri/phonetic.base.json` and `phonetic.expanded.json`.
- [x] **Add Manipuri (mni) to language registry** — Register with scriptId `meitei`, languageId `manipuri`.
- [x] **Add Manipuri to playground** — Add option in playground dropdown.
- [x] **Add tests for Manipuri transliteration**.

## Phase 3 — New Script: Ol Chiki (Santali)

Santali is an 8th Schedule language with its own script — Ol Chiki (Unicode block U+1C50–U+1C7F). Unique because it's an alphabet (not an abugida), so the engine may need adjustments.

- [x] **Evaluate engine compatibility with alphabetic scripts** — Ol Chiki is not an abugida; it has no inherent vowel or matra system. Determine what engine changes are needed.
- [x] **Add Ol Chiki script support to engine** — Unicode block U+1C50–U+1C7F.
- [x] **Create Ol Chiki base map** — `maps/olchiki/base.json`.
- [x] **Create Santali phonetic maps** — `maps/santali/phonetic.base.json` and `phonetic.expanded.json`.
- [x] **Add Santali (sat) to language registry**.
- [x] **Add Santali to playground**.
- [x] **Add tests for Santali transliteration**.

## Phase 4 — Perso-Arabic Script Languages

These languages use a right-to-left Perso-Arabic script variant. This is a significant engine change since the current engine assumes left-to-right Brahmic abugida scripts.

- [x] **Evaluate RTL and Perso-Arabic script support in engine** — Determine architectural changes needed for RTL scripts, joining behavior, etc.
- [x] **Add Urdu (ur)** — ~70M speakers in India, 8th Schedule. Uses Nastaliq/Naskh Perso-Arabic script (Unicode block U+0600–U+06FF + Arabic Presentation Forms).
- [x] **Add Kashmiri (ks)** — 8th Schedule, ~7M speakers. Can use Perso-Arabic script.
- [ ] **Add Sindhi Perso-Arabic variant** — Sindhi is also written in a modified Arabic script in Pakistan; optional variant. (Deferred — needs separate Sindhi-Arabic TOML mapping.)

## Phase 5 — Sinhala Script (Bonus — South Asian)

Not an Indian scheduled language, but Sinhala (Sri Lanka) uses a Brahmic script similar to the ones already supported.

- [x] **Add Sinhala script support** — Unicode block U+0D80–U+0DFF. Very close to the existing Brahmic engine model.
- [x] **Create Sinhala phonetic maps**.
- [x] **Add Sinhala (si) to language registry**.
- [x] **Add tests for Sinhala transliteration**.

## Phase 6 — Engine Improvements for Better Multi-Language Support

Cross-cutting improvements that benefit all languages.

- [x] **Language-specific schwa deletion rules** — Currently Devanagari-only. Some languages (Hindi, Marathi) delete schwa differently. Sanskrit doesn't delete schwa at all. Fine-tune per languageId.
- [x] **Language-specific nasalization presets** — Different languages prefer anusvara vs panchama differently. E.g., Sanskrit prefers explicit nasals; Hindi/Marathi prefer anusvara.
- [x] **Tamil-specific nasalization handling** — Tamil anusvara (ஂ/āytam) behaves differently from other scripts. Should not blindly apply anusvara substitution for Tamil.
- [x] **Gurmukhi tippi/bindi distinction** — Punjabi uses tippi (ੰ) vs bindi (ਂ) based on the preceding vowel, not just nasal+stop rules. Needs dedicated logic.
- [x] **Derive varga/panchama sets from transliteration maps** — Instead of hardcoded Unicode offsets, infer consonant groups from the map data. More robust for edge cases and future scripts.
- [x] **Sync Rust/WASM core with all JS engine changes** — Keep parity for every new rule or script added.

---

## How to Use This Plan

1. Pick a task, work on it, and mark it `[x]` when complete.
2. Each language task includes: create phonetic maps → register in language-registry → add to playground → add tests.
3. Phase 1 is lowest effort (reuses existing Devanagari script support).
4. Phases 2–3 need new script support but stay within the Brahmic abugida model.
5. Phase 4 (Perso-Arabic) is the most architecturally different and should be tackled last.
