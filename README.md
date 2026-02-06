# lipic-js

[![npm version](https://badge.fury.io/js/%40ranjeet-h%Flipic-js.svg)](https://badge.fury.io/js/%40ranjeet-h%Flipic-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue.svg)](https://www.typescriptlang.org/)
[![Playground](https://img.shields.io/badge/Playground-Online-green.svg)](https://ranjeet-h.github.io/lipic-js/playground/)

> 🚀 **High-performance transliteration library for web text inputs** with JavaScript/WebAssembly hybrid runtime

A lightweight, blazing-fast transliteration engine that seamlessly integrates with web forms, supporting multiple Indian languages and scripts. Built with performance and flexibility in mind.

## ✨ Features

- **🎯 Easy Integration**: Works with `input`, `textarea`, and `contenteditable` elements
- **⚡ High Performance**: Hybrid JavaScript/WebAssembly runtime for optimal speed
- **🌍 Multi-Language Support**: 13+ Indian languages across major scripts
- **📦 Multiple Installation Options**: npm, CDN, or self-hosted
- **🔧 Flexible Configuration**: Fine-tune engine behavior and WASM usage
- **🛡️ Type Safety**: Full TypeScript support with comprehensive definitions
- **📱 Lightweight**: Minimal bundle size with optional WASM acceleration

## 🚀 Quick Start

### Installation

```bash
npm install @ranjeet-h/lipic-js
```

### Basic Usage

```ts
import { enableTransliteration } from "@ranjeet-h/lipic-js";

// Enable transliteration for Hindi
const session = await enableTransliteration({
  language: "hi",
  selector: "input[type='text'], textarea, [contenteditable='true']"
});

// Later, when you want to disable
session.detach();
```

## 📋 Supported Languages
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

### ✅ Implementation Status

**Currently Available**: `hi`, `mr`, `ne`, `sa`, `bn`, `as`, `gu`, `pa`, `ta`, `te`, `kn`, `ml`, `or`

## 📦 Usage Options

### 1. npm Package

```bash
npm install @ranjeet-h/lipic-js
```

```ts
import { enableTransliteration } from "@ranjeet-h/lipic-js";

const session = await enableTransliteration({
  language: "hi",
  engineFactoryOptions: { isWasm: "auto" }
});
```

### 2. CDN (Script Tag)

```html
<script src="https://cdn.jsdelivr.net/npm/@ranjeet-h/lipic-js/dist/lipic-js.iife.js"></script>
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

## ⚙️ Configuration

### WebAssembly Control

`createHybridTransliterationEngine` and `enableTransliteration` support:

- **`isWasm: "auto"`** (default): JavaScript for keystroke operations, WebAssembly for batch processing when available
- **`isWasm: true`**: Prefer WebAssembly strongly (safely falls back to JS if WASM files are missing)
- **`isWasm: false`**: Force JavaScript engine only

### Fail-Safe Mechanism

If `dist/wasm` files are not present, the library automatically continues with the JavaScript engine without breaking functionality.

## 🔧 Build Options

### JavaScript-Only Build (Default)

```bash
npm run build:js-only
```

Produces lightweight JavaScript bundles for standard distribution.

### Full Build with WebAssembly

```bash
npm run build:with-wasm
```

Includes both JavaScript and WebAssembly artifacts for maximum performance.

**Build Artifacts:**
- `dist/` - Main distribution files
- `dist/wasm/rust_core.js` - WebAssembly JavaScript bindings
- `dist/wasm/rust_core_bg.wasm` - WebAssembly binary

## 🛠️ Development

### Prerequisites

- Node.js 18+
- Rust (for WebAssembly builds, optional)

### Scripts

```bash
# Development
npm run build              # Build JavaScript only
npm run build:with-wasm    # Build with WebAssembly
npm run test               # Run tests
npm run typecheck          # Type checking

# Language Maps
npm run generate-map:all-languages  # Regenerate all language maps

# Performance
npm run bench:baseline      # Performance benchmarks
npm run size:baseline       # Bundle size analysis
```

### Language Map Generation

The library uses transliteration mapping tables from:

- [`@indic-transliteration/common_maps`](https://github.com/indic-transliteration/common_maps/tree/master)

To regenerate all language maps:

```bash
npm run generate-map:all-languages
```

## 📊 Performance

- **JavaScript Engine**: Optimized for real-time keystroke processing
- **WebAssembly Engine**: High-performance batch text processing
- **Hybrid Mode**: Best of both worlds - responsive UI with fast bulk operations
- **Bundle Size**: < 50KB (JavaScript only), ~200KB (with WebAssembly)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup

```bash
git clone https://github.com/ranjeet-h/lipic-js.git
cd lipic-js
npm install
npm run build
npm test
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [`@indic-transliteration/common_maps`](https://github.com/indic-transliteration/common_maps) for comprehensive transliteration mappings
- The WebAssembly team for the amazing performance capabilities
- All contributors and users of this library

## 📞 Support

- 📖 [Documentation](https://github.com/ranjeet-h/lipic-js)
- 🎮 [Live Playground](https://ranjeet-h.github.io/lipic-js/playground/)
- 🐛 [Report Issues](https://github.com/ranjeet-h/lipic-js/issues)
- 💬 [Discussions](https://github.com/ranjeet-h/lipic-js/discussions)
