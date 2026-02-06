# lipic-js

Transliteration library for web text inputs (`input`, `textarea`, `contenteditable`) with JS/WASM hybrid runtime.

## Target Usage
- Install from npm.
- Use from CDN.
- Directly import built files.
- Enable by language short code (`hi`, `mr`, `ne`, `sa`, etc.).

## Language Short Codes
| Script | Languages |
|--------|-----------|
| Devanagari | `hi` (Hindi), `mr` (Marathi), `ne` (Nepali), `sa` (Sanskrit) |
| Bengali | `bn` (Bengali), `as` (Assamese) |
| Gujarati | `gu` (Gujarati) |
| Gurmukhi | `pa` (Punjabi) |
| Tamil | `ta` (Tamil) |
| Telugu | `te` (Telugu) |
| Kannada | `kn` (Kannada) |
| Malayalam | `ml` (Malayalam) |
| Odia | `or` (Odia) |

Current implementation status:
- Available now: `hi`, `mr`
- Planned for upcoming RC: `ne`, `sa`, `bn`, `as`, `gu`, `pa`, `ta`, `te`, `kn`, `ml`, `or`

## Quick Start
```ts
import { enableTransliteration } from "lipic-js";

const session = await enableTransliteration({
  language: "hi",
  selector: "input[type='text'], textarea, [contenteditable='true']"
});

// later
session.detach();
```

## Use From npm
```bash
npm install lipic-js
```

```ts
import { enableTransliteration } from "lipic-js";

const session = await enableTransliteration({
  language: "hi",
  isWasm: "auto"
});
```

## Use From CDN (script tag)
```html
<script src="https://cdn.jsdelivr.net/npm/lipic-js/dist/lipic-js.iife.js"></script>
<script>
  // API is exposed as window.LipicJS
  (async () => {
    const session = await window.LipicJS.enableTransliteration({
      language: "hi",
      isWasm: "auto"
    });
    window._lipicSession = session;
  })();
</script>
```

## Use Direct Files (self-hosted)
After `npm run build:all`, copy `dist/` to your server.

```html
<script type="module">
  import { enableTransliteration } from "/assets/lipic-js/index.js";
  const session = await enableTransliteration({
    language: "hi",
    isWasm: "auto"
  });
</script>
```

Required files for direct hosting:
- `/assets/lipic-js/index.js` (or cjs/iife variant)
- `/assets/lipic-js/wasm/rust_core.js`
- `/assets/lipic-js/wasm/rust_core_bg.wasm`

## WASM Mode Control
`createHybridTransliterationEngine` and `enableTransliteration` support:
- `isWasm: "auto"` (default): JS for keystroke path (`processChar/backspace/commit/reset`), WASM for batch path (`processText`) when available
- `isWasm: true`: prefer WASM strongly (if WASM files are missing, it safely falls back to JS)
- `isWasm: false`: force JS

WASM optional fail-safe:
- If `dist/wasm` files are not present, library continues with JS engine without breaking.

## Build Output (Single Folder)
Use:
```bash
npm run build:js-only
```

This builds JS-only bundles (small default distribution).

If you want bundled WASM too:
```bash
npm run build:with-wasm
```

With WASM build, artifacts are in:
- `dist/`
- `dist/wasm/rust_core.js`
- `dist/wasm/rust_core_bg.wasm`
