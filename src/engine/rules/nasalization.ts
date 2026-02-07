import type { RuleContext, RuleFn, Token } from "./types";

const DEVANAGARI_NASAL_GLYPHS = new Set(["ङ", "ञ", "ण", "न", "म"]);

const NASAL_OFFSETS = new Set([0x19, 0x1E, 0x23, 0x28, 0x2E]);

function isNasalConsonant(glyph: string, scriptKind: string): boolean {
  if (scriptKind === "devanagari") {
    return DEVANAGARI_NASAL_GLYPHS.has(glyph);
  }
  if (glyph.length === 0) return false;
  const cp = glyph.codePointAt(0)!;
  if (cp < 0x0900 || cp > 0x0DFF) return false;
  const blockBase = cp & 0xFF80;
  const offset = cp - blockBase;
  return NASAL_OFFSETS.has(offset);
}

const VARGA_TO_NASAL: Array<{ chars: Set<string>; nasal: string }> = [
  { chars: new Set(["क", "ख", "ग", "घ"]), nasal: "ङ" },
  { chars: new Set(["च", "छ", "ज", "झ"]), nasal: "ञ" },
  { chars: new Set(["ट", "ठ", "ड", "ढ"]), nasal: "ण" },
  { chars: new Set(["त", "थ", "द", "ध"]), nasal: "न" },
  { chars: new Set(["प", "फ", "ब", "भ"]), nasal: "म" }
];

const VARGA_GROUPS: Array<{ offsets: Set<number>; nasalOffset: number }> = [
  { offsets: new Set([0x15, 0x16, 0x17, 0x18]), nasalOffset: 0x19 },
  { offsets: new Set([0x1A, 0x1B, 0x1C, 0x1D]), nasalOffset: 0x1E },
  { offsets: new Set([0x1F, 0x20, 0x21, 0x22]), nasalOffset: 0x23 },
  { offsets: new Set([0x24, 0x25, 0x26, 0x27]), nasalOffset: 0x28 },
  { offsets: new Set([0x2A, 0x2B, 0x2C, 0x2D]), nasalOffset: 0x2E }
];

function isVargaConsonant(glyph: string, scriptKind: string): boolean {
  if (scriptKind === "devanagari") {
    return mappedPanchamaDevanagari(glyph) !== null;
  }
  if (glyph.length === 0) return false;
  const cp = glyph.codePointAt(0)!;
  if (cp < 0x0900 || cp > 0x0DFF) return false;
  const blockBase = cp & 0xFF80;
  const offset = cp - blockBase;
  return VARGA_GROUPS.some(g => g.offsets.has(offset));
}

function mappedPanchamaDevanagari(target: string): string | null {
  for (const group of VARGA_TO_NASAL) {
    if (group.chars.has(target)) {
      return group.nasal;
    }
  }
  return null;
}

function mappedPanchama(target: string, scriptKind: string): string | null {
  if (scriptKind === "devanagari") {
    return mappedPanchamaDevanagari(target);
  }
  if (target.length === 0) return null;
  const cp = target.codePointAt(0)!;
  if (cp < 0x0900 || cp > 0x0DFF) return null;
  const blockBase = cp & 0xFF80;
  const offset = cp - blockBase;
  for (const group of VARGA_GROUPS) {
    if (group.offsets.has(offset)) {
      return String.fromCodePoint(blockBase + group.nasalOffset);
    }
  }
  return null;
}

export const applyNasalizationRule: RuleFn = (tokens: Token[], ctx: RuleContext): Token[] => {
  const effectiveMode =
    ctx.options.nasalizationMode === "panchamakshar" && ctx.script.kind !== "devanagari"
      ? "anusvara"
      : ctx.options.nasalizationMode;

  const out: Token[] = [];

  for (let i = 0; i < tokens.length; i += 1) {
    const t0 = tokens[i];
    const t1 = tokens[i + 1];
    const t2 = tokens[i + 2];

    const isNasalCluster =
      t0?.kind === "consonant" &&
      isNasalConsonant(t0.glyph, ctx.script.kind) &&
      t1?.kind === "halant" &&
      t2?.kind === "consonant";

    if (!isNasalCluster) {
      out.push(t0);
      continue;
    }

    if (effectiveMode === "anusvara") {
      if (isVargaConsonant(t2.glyph, ctx.script.kind)) {
        out.push({ kind: "mark", glyph: ctx.script.anusvara });
        i += 1;
        continue;
      }
      out.push(t0);
      continue;
    }

    const mapped = mappedPanchama(t2.glyph, ctx.script.kind);
    if (!mapped) {
      out.push(t0);
      continue;
    }

    out.push({ kind: "consonant", glyph: mapped });
  }

  return out;
};
