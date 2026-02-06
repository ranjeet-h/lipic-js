const fs = require("node:fs");
const path = require("node:path");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function normalizeEntry(entry) {
  if (!entry || typeof entry !== "object") return entry;
  const normalized = { ...entry };
  if (typeof normalized.glyph === "string") normalized.glyph = normalized.glyph.normalize("NFC");
  if (typeof normalized.matra === "string") normalized.matra = normalized.matra.normalize("NFC");
  return normalized;
}

function toSortedObject(map) {
  const keys = Object.keys(map).sort((a, b) => a.localeCompare(b));
  const out = {};
  for (const k of keys) out[k] = map[k];
  return out;
}

function addKey(out, key, value) {
  if (Object.prototype.hasOwnProperty.call(out, key)) {
    throw new Error(`Duplicate key: ${key}`);
  }
  out[key] = value;
}

function main() {
  const repoRoot = path.resolve(__dirname, "..");
  const basePath = path.join(repoRoot, "maps", "marathi", "phonetic.base.json");
  const outPath = path.join(repoRoot, "maps", "marathi", "phonetic.expanded.json");

  const base = readJson(basePath);
  const expanded = {};

  for (const [k, v] of Object.entries(base)) {
    addKey(expanded, k, normalizeEntry(v));
  }

  const longVowelAliases = [
    { base: "aa", aliases: ["A", "ā"] },
    { base: "ii", aliases: ["I", "ī"] },
    { base: "uu", aliases: ["U", "ū"] }
  ];

  for (const { base: baseKey, aliases } of longVowelAliases) {
    const entry = expanded[baseKey];
    if (!entry) continue;
    for (const alias of aliases) addKey(expanded, alias, entry);
  }

  addKey(expanded, "x", { type: "conjunct", glyph: "क्ष" });
  addKey(expanded, "dny", { type: "conjunct", glyph: "ज्ञ" });
  addKey(expanded, "gy", { type: "conjunct", glyph: "ज्ञ" });

  const normalizedExpanded = {};
  for (const [k, v] of Object.entries(expanded)) {
    normalizedExpanded[k] = normalizeEntry(v);
  }

  const sorted = toSortedObject(normalizedExpanded);
  const json = `${JSON.stringify(sorted, null, 2)}\n`;
  fs.writeFileSync(outPath, json, "utf8");
  process.stdout.write(`Wrote ${path.relative(repoRoot, outPath)} (${Object.keys(sorted).length} keys)\n`);
}

main();

