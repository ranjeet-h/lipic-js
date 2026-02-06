const fs = require("node:fs");
const path = require("node:path");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function isNfc(value) {
  return typeof value === "string" ? value === value.normalize("NFC") : true;
}

function collectStrings(value, results) {
  if (typeof value === "string") {
    results.push(value);
    return;
  }
  if (Array.isArray(value)) {
    for (const item of value) collectStrings(item, results);
    return;
  }
  if (value && typeof value === "object") {
    for (const v of Object.values(value)) collectStrings(v, results);
  }
}

function main() {
  const repoRoot = path.resolve(__dirname, "..");
  const filePath = path.join(repoRoot, "maps", "devanagari", "base.json");
  const inventory = readJson(filePath);

  const categories = [
    ["consonants", inventory.consonants],
    ["vowelsIndependent", inventory.vowelsIndependent],
    ["vowelMatras", inventory.vowelMatras],
    ["halant", [inventory.halant]],
    ["digits", inventory.digits],
    ["marks", Object.entries(inventory.marks || {}).map(([k, v]) => `${k}:${v}`)]
  ];

  for (const [name, list] of categories) {
    const values = Array.isArray(list) ? list : [];
    process.stdout.write(`${name} (${values.length}): `);
    process.stdout.write(values.join(" "));
    process.stdout.write("\n");
  }

  const allStrings = [];
  collectStrings(inventory, allStrings);
  const nonNfc = allStrings.filter((s) => !isNfc(s));
  if (nonNfc.length > 0) {
    process.stderr.write(`Non-NFC strings detected: ${nonNfc.join(", ")}\n`);
    process.exitCode = 1;
  }
}

main();

