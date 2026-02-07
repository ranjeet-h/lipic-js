# System Structure

This document describes the current implemented mapping and runtime structure in `lipic-js`.

## Current Supported Count

- **27 available languages**
- **13 script groups**

## Script to Language Mapping

| Script | Languages |
|--------|-----------|
| Devanagari | Hindi (`hi`), Marathi (`mr`), Nepali (`ne`), Sanskrit (`sa`), Konkani (`kok`), Maithili (`mai`), Dogri (`doi`), Bodo (`brx`), Sindhi-Devanagari (`sd`), Chhattisgarhi (`hne`), Bhojpuri (`bho`), Rajasthani (`raj`), Awadhi (`awa`) |
| Bengali | Bengali (`bn`), Assamese (`as`) |
| Gujarati | Gujarati (`gu`) |
| Gurmukhi | Punjabi (`pa`) |
| Tamil | Tamil (`ta`) |
| Telugu | Telugu (`te`) |
| Kannada | Kannada (`kn`) |
| Malayalam | Malayalam (`ml`) |
| Odia | Odia (`or`) |
| Meitei Mayek | Manipuri (`mni`) |
| Ol Chiki | Santali (`sat`) |
| Perso-Arabic | Urdu (`ur`), Kashmiri (`ks`) |
| Sinhala | Sinhala (`si`) |

## Source of Truth

- Registry file: `src/language/language-registry.ts`
- Runtime helpers:
  - `listLanguages()`
  - `resolveLanguageEngineConfig(code)`

The playground and integration APIs should use the registry instead of hardcoded per-language tables.

## Maps Layout (Current)

Each language is currently stored as its own directory:

```text
maps/
  hindi/
    phonetic.base.json
    phonetic.expanded.json
  marathi/
    phonetic.base.json
    phonetic.expanded.json
  ...
```

Script-level base maps (where needed) are stored separately, for example:

```text
maps/devanagari/base.json
maps/meitei/base.json
maps/olchiki/base.json
```

## Playground Notes

- The language dropdown is dynamically generated from `listLanguages()`.
- Labels include native names for consistency.
- Keyboard reference uses the selected language's resolved `expandedMap`, so it works across all 27 languages.

## Engine Notes

- Engine selection uses JS/WASM hybrid runtime.
- Rule behavior is language-aware (for example Schwa and nasalization defaults) while staying script-safe.
- Rust/WASM core is kept in parity with JS rules.
