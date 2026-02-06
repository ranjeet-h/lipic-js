# Script to Languages Mapping

This document defines the mapping between writing scripts and the languages that use them for the lipic-js project.

## Script Groups

| Script | Languages |
|--------|-----------|
| Devanagari | Hindi, Marathi, Nepali, Sanskrit |
| Bengali | Bengali, Assamese |
| Gujarati | Gujarati |
| Gurmukhi | Punjabi |
| Tamil | Tamil |
| Telugu | Telugu |
| Kannada | Kannada |
| Malayalam | Malayalam |
| Odia | Odia |

## Current Integration Analysis

Based on the existing Marathi implementation, the current structure is:

```typescript
// Current maps structure in src/index.ts
export const maps = {
  devanagari: {
    base: devanagariBase  // Script-level character sets
  },
  marathi: {
    phonetic: {
      base: marathiPhoneticBase,      // Basic phonetic mappings
      expanded: marathiPhoneticExpanded  // Extended mappings with variants
    }
  }
} as const;
```

## Proposed Script-Based Mapping Structure

```typescript
export const scriptMaps = {
  devanagari: {
    base: devanagariBase,  // Script character sets (consonants, vowels, etc.)
    languages: {
      hindi: {
        phonetic: {
          base: hindiPhoneticBase,
          expanded: hindiPhoneticExpanded
        }
      },
      marathi: {
        phonetic: {
          base: marathiPhoneticBase,
          expanded: marathiPhoneticExpanded
        }
      },
      nepali: {
        phonetic: {
          base: nepaliPhoneticBase,
          expanded: nepaliPhoneticExpanded
        }
      },
      sanskrit: {
        phonetic: {
          base: sanskritPhoneticBase,
          expanded: sanskritPhoneticExpanded
        }
      }
    }
  },
  bengali: {
    base: bengaliBase,
    languages: {
      bengali: {
        phonetic: {
          base: bengaliPhoneticBase,
          expanded: bengaliPhoneticExpanded
        }
      },
      assamese: {
        phonetic: {
          base: assamesePhoneticBase,
          expanded: assamesePhoneticExpanded
        }
      }
    }
  },
  // ... other scripts
} as const;
```

## Implementation Strategy

### 1. Directory Structure
```
maps/
├── devanagari/
│   ├── base.json
│   ├── languages/
│   │   ├── hindi/
│   │   │   ├── phonetic.base.json
│   │   │   └── phonetic.expanded.json
│   │   ├── marathi/
│   │   │   ├── phonetic.base.json
│   │   │   └── phonetic.expanded.json
│   │   ├── nepali/
│   │   │   ├── phonetic.base.json
│   │   │   └── phonetic.expanded.json
│   │   └── sanskrit/
│   │       ├── phonetic.base.json
│   │       └── phonetic.expanded.json
├── bengali/
│   ├── base.json
│   └── languages/
│       ├── bengali/
│       └── assamese/
└── ... (other scripts)
```

### 2. Map Data Structure
Each language map should follow the current Marathi pattern:
- **base.json**: Core phonetic mappings (essential characters)
- **expanded.json**: Extended mappings with variants, conjuncts, and alternate forms

### 3. Engine Integration
```typescript
// Usage example for script-based loading
function createScriptEngine(script: string, language: string, variant: 'base' | 'expanded' = 'expanded') {
  const scriptData = scriptMaps[script];
  if (!scriptData) throw new Error(`Script ${script} not supported`);
  
  const languageData = scriptData.languages[language];
  if (!languageData) throw new Error(`Language ${language} not supported in script ${script}`);
  
  return createTransliterationEngine({ 
    expandedMap: languageData.phonetic[variant] 
  });
}
```

## Migration Steps

1. **Restructure directories**: Move `maps/marathi/` to `maps/devanagari/languages/marathi/`
2. **Create script base maps**: Generate `base.json` for each script containing character sets
3. **Implement language maps**: Create phonetic mappings for each language
4. **Update exports**: Modify `src/index.ts` to export the new structure
5. **Update playground**: Implement script + language selection in UI

## Benefits

- **Shared script resources**: Common character sets defined once per script
- **Language-specific phonetics**: Each language gets its own transliteration rules
- **Scalable structure**: Easy to add new languages within existing scripts
- **Maintainable**: Clear separation between script-level and language-level data
