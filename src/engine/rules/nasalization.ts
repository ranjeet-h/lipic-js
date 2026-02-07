import type { RuleContext, RuleFn, Token } from "./types";

function isNasalConsonant(glyph: string, ctx: RuleContext): boolean {
  if (ctx.nasalizationProfile?.nasalConsonants.has(glyph)) {
    return true;
  }
  if (ctx.script.kind === "devanagari") {
    return glyph === "ङ" || glyph === "ञ" || glyph === "ण" || glyph === "न" || glyph === "म";
  }
  return false;
}

function isVargaConsonant(glyph: string, ctx: RuleContext): boolean {
  if (ctx.nasalizationProfile?.vargaConsonants.has(glyph)) {
    return true;
  }
  if (ctx.script.kind !== "devanagari") {
    return false;
  }
  return (
    glyph === "क" ||
    glyph === "ख" ||
    glyph === "ग" ||
    glyph === "घ" ||
    glyph === "च" ||
    glyph === "छ" ||
    glyph === "ज" ||
    glyph === "झ" ||
    glyph === "ट" ||
    glyph === "ठ" ||
    glyph === "ड" ||
    glyph === "ढ" ||
    glyph === "त" ||
    glyph === "थ" ||
    glyph === "द" ||
    glyph === "ध" ||
    glyph === "प" ||
    glyph === "फ" ||
    glyph === "ब" ||
    glyph === "भ"
  );
}

function mappedPanchama(target: string, ctx: RuleContext): string | null {
  const mapped = ctx.nasalizationProfile?.panchamaByConsonant.get(target);
  if (mapped) {
    return mapped;
  }
  if (ctx.script.kind !== "devanagari") {
    return null;
  }
  if (target === "क" || target === "ख" || target === "ग" || target === "घ") return "ङ";
  if (target === "च" || target === "छ" || target === "ज" || target === "झ") return "ञ";
  if (target === "ट" || target === "ठ" || target === "ड" || target === "ढ") return "ण";
  if (target === "त" || target === "थ" || target === "द" || target === "ध") return "न";
  if (target === "प" || target === "फ" || target === "ब" || target === "भ") return "म";
  return null;
}

function isShortGurmukhiVowelBefore(tokens: Token[], index: number): boolean {
  const prev = tokens[index - 1];
  if (!prev) {
    return false;
  }

  if (prev.kind === "inherentA") {
    return true;
  }

  if (prev.kind === "matra") {
    return prev.glyph === "ਿ" || prev.glyph === "ੁ" || prev.glyph === "੃";
  }

  if (prev.kind === "vowelIndependent") {
    return prev.glyph === "ਅ" || prev.glyph === "ਇ" || prev.glyph === "ਉ";
  }

  return false;
}

function anusvaraForContext(tokens: Token[], index: number, ctx: RuleContext): string {
  if (ctx.script.scriptId !== "gurmukhi") {
    return ctx.script.anusvara;
  }
  return isShortGurmukhiVowelBefore(tokens, index) ? "ੰ" : "ਂ";
}

export const applyNasalizationRule: RuleFn = (tokens: Token[], ctx: RuleContext): Token[] => {
  const effectiveMode = ctx.options.nasalizationMode;

  const out: Token[] = [];

  for (let i = 0; i < tokens.length; i += 1) {
    const t0 = tokens[i];
    const t1 = tokens[i + 1];
    const t2 = tokens[i + 2];

    const isNasalCluster =
      t0?.kind === "consonant" &&
      isNasalConsonant(t0.glyph, ctx) &&
      t1?.kind === "halant" &&
      t2?.kind === "consonant";

    if (!isNasalCluster) {
      out.push(t0);
      continue;
    }

    if (effectiveMode === "anusvara") {
      if (isVargaConsonant(t2.glyph, ctx)) {
        out.push({ kind: "mark", glyph: anusvaraForContext(tokens, i, ctx) });
        i += 1;
        continue;
      }
      out.push(t0);
      continue;
    }

    const mapped = mappedPanchama(t2.glyph, ctx);
    if (!mapped) {
      out.push(t0);
      continue;
    }

    out.push({ kind: "consonant", glyph: mapped });
  }

  return out;
};
