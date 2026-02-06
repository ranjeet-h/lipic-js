import type { RuleContext, RuleFn, Token } from "./types";

function ligatureForPair(left: string, right: string): string | null {
  if (left === "क" && (right === "ष" || right === "श")) return "क्ष";
  if (left === "ज" && right === "ञ") return "ज्ञ";
  if (left === "त" && right === "य") return "त्य";
  if (left === "ग" && right === "य") return "ज्ञ";
  return null;
}

export const applyLigatureRule: RuleFn = (tokens: Token[], _ctx: RuleContext): Token[] => {
  const out: Token[] = [];

  for (let i = 0; i < tokens.length; i += 1) {
    const t0 = tokens[i];
    const t1 = tokens[i + 1];
    const t2 = tokens[i + 2];

    if (t0?.kind === "consonant" && t1?.kind === "halant" && t2?.kind === "consonant") {
      const ligature = ligatureForPair(t0.glyph, t2.glyph);
      if (ligature) {
        out.push({ kind: "consonant", glyph: ligature });
        i += 2;
        continue;
      }
    }

    out.push(t0);
  }

  return out;
};
