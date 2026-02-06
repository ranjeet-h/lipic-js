#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import zlib from "node:zlib";

const TARGETS = [
  "dist/index.js",
  "dist/index.cjs",
  "dist/lipic-js.iife.js",
  "dist/wasm/rust_core.js",
  "dist/wasm/rust_core_bg.wasm"
];

function parseOutArg() {
  const idx = process.argv.indexOf("--out");
  if (idx >= 0 && process.argv[idx + 1]) {
    return process.argv[idx + 1];
  }
  return "docs/perf/size.latest.json";
}

function fileSize(filePath) {
  const bytes = fs.readFileSync(filePath);
  return {
    bytes: bytes.length,
    gzip_bytes: zlib.gzipSync(bytes).length
  };
}

function main() {
  const outFile = parseOutArg();
  const rows = [];
  let missing = 0;

  for (const relPath of TARGETS) {
    const fullPath = path.resolve(process.cwd(), relPath);
    if (!fs.existsSync(fullPath)) {
      rows.push({ file: relPath, missing: true });
      missing += 1;
      continue;
    }
    rows.push({ file: relPath, ...fileSize(fullPath) });
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    node: process.version,
    files: rows,
    missing
  };

  const outPath = path.resolve(process.cwd(), outFile);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

  console.log(`Wrote size report: ${outPath}`);
}

main();
