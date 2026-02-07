#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(process.cwd());

const LANGUAGE_TARGETS = [
  { code: "hi", folder: "hindi", scriptToml: "devanagari.toml", template: "hindi", keepWords: true, scriptNukta: "़", overrides: {} },
  { code: "mr", folder: "marathi", scriptToml: "devanagari.toml", template: "marathi", keepWords: true, scriptNukta: "़", overrides: {} },
  { code: "ne", folder: "nepali", scriptToml: "devanagari.toml", template: "hindi", keepWords: false, scriptNukta: "़", overrides: {} },
  { code: "sa", folder: "sanskrit", scriptToml: "devanagari.toml", template: "hindi", keepWords: false, scriptNukta: "़", overrides: {} },
  { code: "bn", folder: "bengali", scriptToml: "bengali.toml", template: "hindi", keepWords: false, scriptNukta: "়", overrides: {} },
  { code: "as", folder: "assamese", scriptToml: "assamese.toml", template: "hindi", keepWords: false, scriptNukta: "়", overrides: {} },
  { code: "gu", folder: "gujarati", scriptToml: "gujarati.toml", template: "hindi", keepWords: false, scriptNukta: "઼", overrides: {} },
  { code: "pa", folder: "punjabi", scriptToml: "gurmukhi.toml", template: "hindi", keepWords: false, scriptNukta: "਼", overrides: { "Sh": { type: "consonant", glyph: "ਸ਼" } } },
  { code: "ta", folder: "tamil", scriptToml: "tamil.toml", template: "hindi", keepWords: false, scriptNukta: "", overrides: {} },
  { code: "te", folder: "telugu", scriptToml: "telugu.toml", template: "hindi", keepWords: false, scriptNukta: "", overrides: {} },
  { code: "kn", folder: "kannada", scriptToml: "kannada.toml", template: "hindi", keepWords: false, scriptNukta: "಼", overrides: {} },
  { code: "ml", folder: "malayalam", scriptToml: "malayalam.toml", template: "hindi", keepWords: false, scriptNukta: "", overrides: {} },
  { code: "or", folder: "odia", scriptToml: "oriya.toml", template: "hindi", keepWords: false, scriptNukta: "଼", overrides: {} },
  { code: "kok", folder: "konkani", scriptToml: "devanagari.toml", template: "marathi", keepWords: false, scriptNukta: "़", overrides: {} },
  { code: "mai", folder: "maithili", scriptToml: "devanagari.toml", template: "hindi", keepWords: false, scriptNukta: "़", overrides: {} },
  { code: "doi", folder: "dogri", scriptToml: "devanagari.toml", template: "hindi", keepWords: false, scriptNukta: "़", overrides: {} },
  { code: "brx", folder: "bodo", scriptToml: "devanagari.toml", template: "hindi", keepWords: false, scriptNukta: "़", overrides: {} },
  { code: "sd", folder: "sindhi", scriptToml: "devanagari.toml", template: "hindi", keepWords: false, scriptNukta: "़", overrides: {} },
  { code: "hne", folder: "chhattisgarhi", scriptToml: "devanagari.toml", template: "hindi", keepWords: false, scriptNukta: "़", overrides: {} },
  { code: "bho", folder: "bhojpuri", scriptToml: "devanagari.toml", template: "hindi", keepWords: false, scriptNukta: "़", overrides: {} },
  { code: "raj", folder: "rajasthani", scriptToml: "devanagari.toml", template: "hindi", keepWords: false, scriptNukta: "़", overrides: {} },
  { code: "awa", folder: "awadhi", scriptToml: "devanagari.toml", template: "hindi", keepWords: false, scriptNukta: "़", overrides: {} },
  { code: "mni", folder: "manipuri", scriptToml: "manipuri.toml", template: "hindi", keepWords: false, scriptNukta: "", overrides: {} },
  { code: "sat", folder: "santali", scriptToml: "ol_chiki.toml", template: "hindi", keepWords: false, scriptNukta: "", overrides: {} },
  { code: "ur", folder: "urdu", scriptToml: "urdu.toml", template: "hindi", keepWords: false, scriptNukta: "", overrides: {} },
  { code: "ks", folder: "kashmiri", scriptToml: "urdu.toml", template: "hindi", keepWords: false, scriptNukta: "", overrides: {} },
  { code: "si", folder: "sinhala", scriptToml: "sinhala.toml", template: "hindi", keepWords: false, scriptNukta: "", overrides: {} }
];

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function parseTomlQuotedValues(raw) {
  const matches = [...raw.matchAll(/"((?:\\.|[^"\\])*)"/g)];
  return matches.map((m) => JSON.parse(`"${m[1]}"`));
}

function parseTomlStringMap(tomlText) {
  const out = {};
  for (const rawLine of tomlText.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#") || line.startsWith("[")) continue;
    const keyMatch = line.match(/^"((?:\\.|[^"\\])*)"\s*=\s*(.+)$/);
    if (!keyMatch) continue;

    const key = JSON.parse(`"${keyMatch[1]}"`).normalize("NFC");
    const rhs = keyMatch[2].trim();

    const stringMatch = rhs.match(/^"((?:\\.|[^"\\])*)"$/);
    if (stringMatch) {
      out[key] = JSON.parse(`"${stringMatch[1]}"`).normalize("NFC");
      continue;
    }

    const arrayMatch = rhs.match(/^\[(.*)\]$/);
    if (arrayMatch) {
      const values = parseTomlQuotedValues(arrayMatch[1]);
      if (values.length > 0) {
        out[key] = values[0].normalize("NFC");
      }
    }
  }
  return out;
}

function transformGlyph(glyph, scriptMapEntries, scriptNukta) {
  if (typeof glyph !== "string" || glyph.length === 0) return glyph;
  let out = glyph.normalize("NFC");
  for (const [from, to] of scriptMapEntries) {
    out = out.split(from).join(to);
  }
  if (scriptNukta) {
    out = out.replace(/\u093C/gu, scriptNukta);
  } else {
    out = out.replace(/\u093C/gu, "");
  }
  return out.normalize("NFC");
}

const ARTIFACT_PATTERN = /['"`¹²³⁴⁵⁶⁷⁸⁹⁰]/;

function hasArtifacts(text) {
  return typeof text === "string" && ARTIFACT_PATTERN.test(text);
}

function transformMap(inputMap, scriptMapEntries, scriptNukta, keepWords) {
  const out = {};
  for (const [key, entry] of Object.entries(inputMap)) {
    if (!keepWords && entry?.type === "word") {
      continue;
    }
    const next = { ...entry };
    if (typeof next.glyph === "string") {
      next.glyph = transformGlyph(next.glyph, scriptMapEntries, scriptNukta);
    }
    if (typeof next.matra === "string") {
      next.matra = transformGlyph(next.matra, scriptMapEntries, scriptNukta);
    }
    const isStructural = ["vowel", "consonant", "conjunct", "mark"].includes(next.type);
    if (isStructural && next.glyph === "" && (next.matra ?? "") === "") {
      continue;
    }
    if (isStructural && (hasArtifacts(next.glyph) || hasArtifacts(next.matra))) {
      continue;
    }
    out[key] = next;
  }
  return out;
}

function loadCommonMapsPackage() {
  const brahmicDir = path.join(
    repoRoot,
    "node_modules",
    "@indic-transliteration",
    "common_maps",
    "brahmic"
  );
  if (!fs.existsSync(brahmicDir)) {
    throw new Error(
      "Missing @indic-transliteration/common_maps brahmic data. Run `npm install` first."
    );
  }
  return brahmicDir;
}

function main() {
  const brahmicDir = loadCommonMapsPackage();

  for (const target of LANGUAGE_TARGETS) {
    const templateBase = readJson(path.join(repoRoot, "maps", target.template, "phonetic.base.json"));
    const templateExpanded = readJson(path.join(repoRoot, "maps", target.template, "phonetic.expanded.json"));

    const tomlPath = path.join(brahmicDir, target.scriptToml);
    const scriptMap = parseTomlStringMap(fs.readFileSync(tomlPath, "utf8"));
    const scriptMapEntries = Object.entries(scriptMap).sort((a, b) => b[0].length - a[0].length);

    const base = transformMap(templateBase, scriptMapEntries, target.scriptNukta, target.keepWords);
    const expanded = transformMap(templateExpanded, scriptMapEntries, target.scriptNukta, target.keepWords);

    if (target.overrides) {
      for (const [key, value] of Object.entries(target.overrides)) {
        if (key in base || key in templateBase) base[key] = value;
        expanded[key] = value;
      }
    }

    writeJson(path.join(repoRoot, "maps", target.folder, "phonetic.base.json"), base);
    writeJson(path.join(repoRoot, "maps", target.folder, "phonetic.expanded.json"), expanded);
    console.log(`Generated ${target.code} (${target.folder}) from ${target.scriptToml}: ${Object.keys(expanded).length} keys`);
  }
}

main();
