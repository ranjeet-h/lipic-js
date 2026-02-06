#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const sourceDir = path.resolve(process.cwd(), "rust-core/pkg");
const outDir = path.resolve(process.cwd(), "dist/wasm");

const files = ["rust_core.js", "rust_core_bg.wasm", "rust_core.d.ts"];

fs.mkdirSync(outDir, { recursive: true });

for (const file of files) {
  const src = path.join(sourceDir, file);
  if (!fs.existsSync(src)) {
    continue;
  }
  const dest = path.join(outDir, file);
  fs.copyFileSync(src, dest);
}

console.log(`Copied WASM artifacts to ${outDir}`);
