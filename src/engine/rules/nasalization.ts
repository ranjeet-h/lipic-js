import type { RuleContext, RuleFn, Token } from "./types";
import { ANUSVARA } from "./types";

const NASAL_GLYPHS = new Set(["ङ", "ञ", "ण", "न", "म"]);
const VARGA_TO_NASAL: Array<{ chars: Set<string>; nasal: string }> = [
  { chars: new Set(["क", "ख", "ग", "घ"]), nasal: "ङ" },
  { chars: new Set(["च", "छ", "ज", "झ"]), nasal: "ञ" },
  { chars: new Set(["ट", "ठ", "ड", "ढ"]), nasal: "ण" },
  { chars: new Set(["त", "थ", "द", "ध"]), nasal: "न" },
  { chars: new Set(["प", "फ", "ब", "भ"]), nasal: "म" }
];

function mappedPanchama(target: string): string | null {
  for (const group of VARGA_TO_NASAL) {
    if (group.chars.has(target)) {
      return group.nasal;
    }
  }
  return null;
}

export const applyNasalizationRule: RuleFn = (tokens: Token[], ctx: RuleContext): Token[] => {
  const out: Token[] = [];

  for (let i = 0; i < tokens.length; i += 1) {
    const t0 = tokens[i];
    const t1 = tokens[i + 1];
    const t2 = tokens[i + 2];

    const isNasalCluster =
      t0?.kind === "consonant" &&
      NASAL_GLYPHS.has(t0.glyph) &&
      t1?.kind === "halant" &&
      t2?.kind === "consonant";

    if (!isNasalCluster) {
      out.push(t0);
      continue;
    }

    if (ctx.options.nasalizationMode === "anusvara") {
      out.push({ kind: "mark", glyph: ANUSVARA });
      i += 1;
      continue;
    }

    const mapped = mappedPanchama(t2.glyph);
    if (!mapped) {
      out.push(t0);
      continue;
    }

    out.push({ kind: "consonant", glyph: mapped });
  }

  return out;
};
