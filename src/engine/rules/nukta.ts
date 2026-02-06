import type { RuleContext, RuleFn, Token } from "./types";

function isRaw(token: Token | undefined, text: string): boolean {
  return token?.kind === "raw" && token.text === text;
}

function isConsonant(token: Token | undefined, glyph: string): boolean {
  return token?.kind === "consonant" && token.glyph === glyph;
}

function isIndependentA(token: Token | undefined): boolean {
  return token?.kind === "vowelIndependent" && token.glyph === "अ";
}

function pushWithOptionalAkar(out: Token[], consonantGlyph: string, next: Token | undefined): boolean {
  out.push({ kind: "consonant", glyph: consonantGlyph });
  if (isIndependentA(next)) {
    out.push({ kind: "matra", glyph: "ा" });
    return true;
  }
  return false;
}

export const applyNuktaRule: RuleFn = (tokens: Token[], _ctx: RuleContext): Token[] => {
  const out: Token[] = [];

  for (let i = 0; i < tokens.length; i += 1) {
    const current = tokens[i];
    const next = tokens[i + 1];

    if (isConsonant(current, "क") && isRaw(next, "*")) {
      const nextAfterStar = tokens[i + 2];
      const consumedA = pushWithOptionalAkar(out, "क़", nextAfterStar);
      if (consumedA) {
        i += 2;
        continue;
      }
      i += 1;
      continue;
    }

    if (isConsonant(current, "ग") && isRaw(next, "*")) {
      const nextAfterStar = tokens[i + 2];
      const consumedA = pushWithOptionalAkar(out, "ग़", nextAfterStar);
      if (consumedA) {
        i += 2;
        continue;
      }
      i += 1;
      continue;
    }

    if (isRaw(current, "q")) {
      const consumedA = pushWithOptionalAkar(out, "क़", next);
      if (consumedA) {
        i += 1;
      }
      continue;
    }

    if (isRaw(current, "f")) {
      const consumedA = pushWithOptionalAkar(out, "फ़", next);
      if (consumedA) {
        i += 1;
      }
      continue;
    }

    out.push(current);
  }

  return out;
};
