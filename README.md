<div align="center">

# lipic-js

Fast transliteration for web text inputs (`input`, `textarea`, `contenteditable`) with a JS/WASM hybrid runtime.

[![npm](https://img.shields.io/npm/v/lipic-js?label=npm)](https://www.npmjs.com/package/lipic-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-3178c6.svg)](https://www.typescriptlang.org/)
[![Playground](https://img.shields.io/badge/Playground-Live-22c55e.svg)](https://ranjeet-h.github.io/lipic-js/playground/)

[Playground](https://ranjeet-h.github.io/lipic-js/playground/) • [Issues](https://github.com/ranjeet-h/lipic-js/issues) • [Discussions](https://github.com/ranjeet-h/lipic-js/discussions)

</div>

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Supported Languages](#supported-languages)
- [Usage Options](#usage-options)
- [Configuration](#configuration)
- [Mobile Keyboard Notes](#mobile-keyboard-notes)
- [Build Options](#build-options)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Easy integration**: Works with `input`, `textarea`, and `contenteditable` elements
- **High performance**: Hybrid JavaScript/WebAssembly runtime
- **Multi-language support**: 27 Indian and South Asian languages across major scripts
- **Flexible installation**: npm, CDN, or self-hosted
- **Type-safe**: First-class TypeScript support

## Quick Start

### Installation

```bash
npm install lipic-js
```

From GitHub (optional):

```bash
npm install github:ranjeet-h/lipic-js
```

### Basic Usage

```ts
import { enableTransliteration } from "lipic-js";

// Enable transliteration for Hindi
const session = await enableTransliteration({
  language: "hi",
  selector: "input[type='text'], textarea, [contenteditable='true']"
});

// Later, when you want to disable
session.detach();
```

## Supported Languages
**Total supported languages**: **27**

| Script | Languages |
|--------|-----------|
| Devanagari | `hi` (Hindi), `mr` (Marathi), `ne` (Nepali), `sa` (Sanskrit), `kok` (Konkani), `mai` (Maithili), `doi` (Dogri), `brx` (Bodo), `sd` (Sindhi), `hne` (Chhattisgarhi), `bho` (Bhojpuri), `raj` (Rajasthani), `awa` (Awadhi) |
| Bengali | `bn` (Bengali), `as` (Assamese) |
| Gujarati | `gu` (Gujarati) |
| Gurmukhi | `pa` (Punjabi) |
| Tamil | `ta` (Tamil) |
| Telugu | `te` (Telugu) |
| Kannada | `kn` (Kannada) |
| Malayalam | `ml` (Malayalam) |
| Odia | `or` (Odia) |
| Meitei Mayek | `mni` (Manipuri) |
| Ol Chiki | `sat` (Santali) |
| Perso-Arabic | `ur` (Urdu), `ks` (Kashmiri) |
| Sinhala | `si` (Sinhala) |

### Implementation Status

**Currently Available (27)**: `hi`, `mr`, `ne`, `sa`, `bn`, `as`, `gu`, `pa`, `ta`, `te`, `kn`, `ml`, `or`, `kok`, `mai`, `doi`, `brx`, `sd`, `hne`, `bho`, `raj`, `awa`, `mni`, `sat`, `ur`, `ks`, `si`

## Usage Options

### 1. npm Package

```bash
npm install lipic-js
```

```ts
import { enableTransliteration } from "lipic-js";

const session = await enableTransliteration({
  language: "hi",
  engineFactoryOptions: { isWasm: "auto" }
});
```

### 2. CDN (Script Tag)

```html
<script src="https://cdn.jsdelivr.net/npm/lipic-js@1.1.1/dist/lipic-js.iife.min.js"></script>
<script>
  // API is exposed as window.LipicJS
  (async () => {
    const session = await window.LipicJS.enableTransliteration({
      language: "hi",
      engineFactoryOptions: { isWasm: "auto" }
    });
    window._lipicSession = session;
  })();
</script>
```

### 3. Self-Hosted

After `npm run build:all`, copy `dist/` to your server:

```html
<script type="module">
  import { enableTransliteration } from "/assets/lipic-js/index.js";
  const session = await enableTransliteration({
    language: "hi",
    engineFactoryOptions: { isWasm: "auto" }
  });
</script>
```

**Required files for direct hosting:**
- `/assets/lipic-js/index.js` (or cjs/iife variant)
- `/assets/lipic-js/wasm/rust_core.js`
- `/assets/lipic-js/wasm/rust_core_bg.wasm`

## Configuration

<details>
<summary><strong>WebAssembly control</strong></summary>

`createHybridTransliterationEngine` and `enableTransliteration` support:

- **`isWasm: "auto"`** (default): Use JS for keystrokes and WASM for batch processing when available
- **`isWasm: true`**: Prefer WASM strongly (falls back to JS if WASM files are missing)
- **`isWasm: false`**: Force JS

If `dist/wasm` files are not present, the library continues with the JavaScript engine without breaking.

</details>

## Mobile Keyboard Notes

Android/iOS keyboards (for example Samsung Keyboard, SwiftKey, Gboard) may emit composition/replacement input events instead of plain key events. `lipic-js` now handles these core event paths in the interceptor, but host setup still matters.

Recommended host setup for `input`, `textarea`, and `contenteditable`:

```html
<input
  type="text"
  autocorrect="off"
  autocapitalize="none"
  autocomplete="off"
  spellcheck="false"
  inputmode="text"
/>
```

Guidelines:
- Prefer `createInputInterceptor` / `enableTransliteration` instead of custom keydown-only handlers.
- Track composition via `compositionstart` / `compositionend` if you build custom integration.
- Expect mobile IME paths such as `insertReplacementText`, `insertFromComposition`, and `insertCompositionText`.
- Hard-refresh after upgrades so clients load the latest `dist` bundle.

Reference implementation:
- `playground/main.js`
- `playground/index.html`

## Build Options

<details>
<summary><strong>JavaScript-only build (default)</strong></summary>

```bash
npm run build:js-only
```

</details>

<details>
<summary><strong>Build with WebAssembly</strong></summary>

```bash
npm run build:with-wasm
```

Artifacts:

- `dist/`
- `dist/wasm/rust_core.js`
- `dist/wasm/rust_core_bg.wasm`

</details>

## Development

<details>
<summary><strong>Prerequisites</strong></summary>

- Node.js 18+
- Rust (optional, only for WebAssembly builds)

</details>

<details>
<summary><strong>Scripts</strong></summary>

```bash
npm run build
npm run build:with-wasm
npm run test
npm run typecheck

npm run generate-map:all-languages
```

</details>

<details>
<summary><strong>Language map generation</strong></summary>

Mapping tables are derived from:

- [`@indic-transliteration/common_maps`](https://github.com/indic-transliteration/common_maps/tree/master)

```bash
npm run generate-map:all-languages
```

</details>

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup

```bash
git clone https://github.com/ranjeet-h/lipic-js.git
cd lipic-js
npm install
npm run build
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [`@indic-transliteration/common_maps`](https://github.com/indic-transliteration/common_maps) for comprehensive transliteration mappings
- The WebAssembly team for the amazing performance capabilities
- All contributors and users of this library

## Support

- 📖 [Documentation](https://github.com/ranjeet-h/lipic-js)
- 🎮 [Live Playground](https://ranjeet-h.github.io/lipic-js/playground/)
- 🐛 [Report Issues](https://github.com/ranjeet-h/lipic-js/issues)
- 💬 [Discussions](https://github.com/ranjeet-h/lipic-js/discussions)
