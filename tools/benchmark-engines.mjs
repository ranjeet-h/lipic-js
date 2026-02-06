#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";

import marathiExpanded from "../maps/marathi/phonetic.expanded.json" with { type: "json" };
import {
  createHybridTransliterationEngine,
  createTransliterationEngine
} from "../dist/index.js";

const CONFIG = {
  rounds: 5,
  reuseEnginePerRound: true,
  warmup: {
    processCharIterations: 150,
    processTextIterations: 120,
    backspaceIterations: 150
  },
  measure: {
    processCharIterations: 800,
    processTextShortIterations: 500,
    processTextMediumIterations: 350,
    processTextLongIterations: 180,
    backspaceIterations: 700
  },
  texts: {
    charSeed: "ganga kartos qa anka ksh ",
    short: "namaste",
    medium: "ganga kartos qa anka ksh kartay".repeat(4),
    long: "ganga kartos qa anka ksh kartay ".repeat(32)
  }
};

function percentile(values, p) {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.min(sorted.length - 1, Math.floor((p / 100) * sorted.length));
  return sorted[index];
}

function summarize(samples) {
  return {
    p50_us: percentile(samples, 50),
    p95_us: percentile(samples, 95),
    avg_us: samples.reduce((a, b) => a + b, 0) / Math.max(1, samples.length)
  };
}

function medianOf(values) {
  return percentile(values, 50);
}

function aggregateRounds(rounds) {
  return {
    p50_us: medianOf(rounds.map((r) => r.p50_us)),
    p95_us: medianOf(rounds.map((r) => r.p95_us)),
    avg_us: medianOf(rounds.map((r) => r.avg_us))
  };
}

function nowNs() {
  return process.hrtime.bigint();
}

function durationUs(startNs, endNs) {
  return Number(endNs - startNs) / 1000;
}

async function createJsEngine() {
  return createTransliterationEngine({ expandedMap: marathiExpanded });
}

async function createWasmEngine() {
  const moduleLoader = async () => {
    const modulePath = path.resolve(process.cwd(), "rust-core/pkg/rust_core.js");
    const wasmPath = path.resolve(process.cwd(), "rust-core/pkg/rust_core_bg.wasm");
    const wasmModule = await import(pathToFileURL(modulePath).href);
    const wasmBytes = fs.readFileSync(wasmPath);
    return {
      ...wasmModule,
      default: async () => wasmModule.default({ module_or_path: wasmBytes })
    };
  };
  return createHybridTransliterationEngine(
    { expandedMap: marathiExpanded },
    { moduleLoader, fallbackToJs: false, preferWasm: true }
  );
}

function maybeCollect() {
  if (typeof globalThis.gc === "function") {
    globalThis.gc();
  }
}

async function sampleProcessChar(factory, iterations) {
  const samples = [];
  const seed = CONFIG.texts.charSeed;
  const engine = await factory();
  for (let i = 0; i < iterations; i += 1) {
    engine.reset();
    for (const ch of seed) {
      const t0 = nowNs();
      engine.processChar(ch);
      const t1 = nowNs();
      samples.push(durationUs(t0, t1));
    }
  }
  return samples;
}

async function sampleProcessText(factory, text, iterations) {
  const samples = [];
  const engine = await factory();
  for (let i = 0; i < iterations; i += 1) {
    engine.reset();
    const t0 = nowNs();
    engine.processText(text);
    const t1 = nowNs();
    samples.push(durationUs(t0, t1));
  }
  return samples;
}

async function sampleBackspace(factory, iterations) {
  const samples = [];
  const seed = "kartos";
  const engine = await factory();
  for (let i = 0; i < iterations; i += 1) {
    engine.reset();
    for (const ch of seed) engine.processChar(ch);
    for (let j = 0; j < seed.length; j += 1) {
      const t0 = nowNs();
      engine.backspace();
      const t1 = nowNs();
      samples.push(durationUs(t0, t1));
    }
  }
  return samples;
}

async function runCase(factory, warmupFn, measureFn) {
  const rounds = [];
  for (let r = 0; r < CONFIG.rounds; r += 1) {
    maybeCollect();
    await warmupFn(factory);
    maybeCollect();
    const samples = await measureFn(factory);
    rounds.push(summarize(samples));
  }
  return { rounds, summary: aggregateRounds(rounds) };
}

async function runSuite(name, factory) {
  const processChar = await runCase(
    factory,
    (f) => sampleProcessChar(f, CONFIG.warmup.processCharIterations),
    (f) => sampleProcessChar(f, CONFIG.measure.processCharIterations)
  );
  const processTextShort = await runCase(
    factory,
    (f) => sampleProcessText(f, CONFIG.texts.short, CONFIG.warmup.processTextIterations),
    (f) => sampleProcessText(f, CONFIG.texts.short, CONFIG.measure.processTextShortIterations)
  );
  const processTextMedium = await runCase(
    factory,
    (f) => sampleProcessText(f, CONFIG.texts.medium, CONFIG.warmup.processTextIterations),
    (f) => sampleProcessText(f, CONFIG.texts.medium, CONFIG.measure.processTextMediumIterations)
  );
  const processTextLong = await runCase(
    factory,
    (f) => sampleProcessText(f, CONFIG.texts.long, Math.max(50, Math.floor(CONFIG.warmup.processTextIterations / 2))),
    (f) => sampleProcessText(f, CONFIG.texts.long, CONFIG.measure.processTextLongIterations)
  );
  const backspace = await runCase(
    factory,
    (f) => sampleBackspace(f, CONFIG.warmup.backspaceIterations),
    (f) => sampleBackspace(f, CONFIG.measure.backspaceIterations)
  );

  return {
    name,
    profiles: {
      keystroke: {
        processChar: processChar.summary,
        backspace: backspace.summary
      },
      batch: {
        processText: {
          short: { chars: CONFIG.texts.short.length, ...processTextShort.summary },
          medium: { chars: CONFIG.texts.medium.length, ...processTextMedium.summary },
          long: { chars: CONFIG.texts.long.length, ...processTextLong.summary }
        }
      }
    },
    processChar: processChar.summary,
    processText: {
      short: { chars: CONFIG.texts.short.length, ...processTextShort.summary },
      medium: { chars: CONFIG.texts.medium.length, ...processTextMedium.summary },
      long: { chars: CONFIG.texts.long.length, ...processTextLong.summary }
    },
    backspace: backspace.summary,
    rounds: {
      processChar: processChar.rounds,
      processText: {
        short: processTextShort.rounds,
        medium: processTextMedium.rounds,
        long: processTextLong.rounds
      },
      backspace: backspace.rounds
    }
  };
}

function parseOutArg() {
  const idx = process.argv.indexOf("--out");
  if (idx >= 0 && process.argv[idx + 1]) {
    return process.argv[idx + 1];
  }
  return "docs/perf/baseline.latest.json";
}

async function main() {
  const outFile = parseOutArg();
  const suites = [];

  const jsSuite = await runSuite("js", createJsEngine);
  suites.push(jsSuite);

  let wasmError = null;
  try {
    const wasmSuite = await runSuite("wasm", createWasmEngine);
    suites.push(wasmSuite);
  } catch (error) {
    wasmError = error instanceof Error ? error.message : String(error);
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    node: process.version,
    config: {
      ...CONFIG,
      timing: "process.hrtime.bigint",
      cpu_pinning_style: "single-process fixed-order rounds",
      gc_hint: "global.gc() used when available",
      wasm_build_profile: "release"
    },
    suites,
    wasmError
  };

  const outPath = path.resolve(process.cwd(), outFile);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

  console.log(`Wrote benchmark baseline: ${outPath}`);
  if (wasmError) {
    console.warn(`WASM suite unavailable: ${wasmError}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
