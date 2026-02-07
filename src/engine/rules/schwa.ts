import type { RuleContext, RuleFn, Token } from "./types";
import { isWordBoundaryToken } from "./types";

function isConsonantGlyph(token: Token | undefined, glyph: string): boolean {
  return token?.kind === "consonant" && token.glyph === glyph;
}

function isMatraGlyph(token: Token | undefined, glyph: string): boolean {
  return token?.kind === "matra" && token.glyph === glyph;
}

function isMarkGlyph(token: Token | undefined, glyph: string): boolean {
  return token?.kind === "mark" && token.glyph === glyph;
}

function isKind(token: Token | undefined, kind: Token["kind"]): boolean {
  return token?.kind === kind;
}

function isWordEnd(tokens: Token[], index: number): boolean {
  const next = tokens[index + 1];
  return !next || isWordBoundaryToken(next);
}

interface SchwaProfile {
  convertAnusvaraWordEndToAkar: boolean;
  convertKayWordEnd: boolean;
  convertQaWordEndToAkar: boolean;
  marathiVerbTayRule: boolean;
  marathiVerbTosRule: boolean;
}

const DEFAULT_DEVANAGARI_PROFILE: SchwaProfile = {
  convertAnusvaraWordEndToAkar: true,
  convertKayWordEnd: false,
  convertQaWordEndToAkar: true,
  marathiVerbTayRule: false,
  marathiVerbTosRule: false
};

const MARATHI_FAMILY_PROFILE: SchwaProfile = {
  convertAnusvaraWordEndToAkar: true,
  convertKayWordEnd: true,
  convertQaWordEndToAkar: true,
  marathiVerbTayRule: true,
  marathiVerbTosRule: true
};

function resolveSchwaProfile(languageId?: string): SchwaProfile {
  if (languageId === "marathi" || languageId === "konkani") {
    return MARATHI_FAMILY_PROFILE;
  }
  return DEFAULT_DEVANAGARI_PROFILE;
}

export const applySchwaRule: RuleFn = (tokens: Token[], _ctx: RuleContext): Token[] => {
  if (_ctx.script.kind !== "devanagari" || _ctx.languageId === "sanskrit") {
    return tokens;
  }

  const profile = resolveSchwaProfile(_ctx.languageId);
  const out = tokens.map((t) => ({ ...t } as Token));

  for (let i = 0; i < out.length; i += 1) {
    // Pattern: ... ं + consonant + inherentA at word end => ... ं + consonant + ा
    if (
      profile.convertAnusvaraWordEndToAkar &&
      isMarkGlyph(out[i], _ctx.script.anusvara) &&
      isKind(out[i + 1], "consonant") &&
      isKind(out[i + 2], "inherentA") &&
      isWordEnd(out, i + 2)
    ) {
      out[i + 2] = { kind: "matra", glyph: "ा" };
    }

    // Pattern: क + inherentA + य at word end => काय
    if (
      profile.convertKayWordEnd &&
      isConsonantGlyph(out[i], "क") &&
      isKind(out[i + 1], "inherentA") &&
      isConsonantGlyph(out[i + 2], "य") &&
      isWordEnd(out, i + 2)
    ) {
      out[i + 1] = { kind: "matra", glyph: "ा" };
    }

    // Pattern: क़ + inherentA at word end => क़ा (qa / k*a expectation)
    if (
      profile.convertQaWordEndToAkar &&
      isConsonantGlyph(out[i], "क़") &&
      isKind(out[i + 1], "inherentA") &&
      isWordEnd(out, i + 1)
    ) {
      out[i + 1] = { kind: "matra", glyph: "ा" };
    }

    // Verb family: ... र् + त + inherentA + य at word end => ... र + त + ा + य
    if (
      profile.marathiVerbTayRule &&
      isConsonantGlyph(out[i], "र") &&
      isKind(out[i + 1], "halant") &&
      isConsonantGlyph(out[i + 2], "त") &&
      isKind(out[i + 3], "inherentA") &&
      isConsonantGlyph(out[i + 4], "य") &&
      isWordEnd(out, i + 4)
    ) {
      out.splice(i + 1, 1);
      out[i + 2] = { kind: "matra", glyph: "ा" };
    }

    // Verb family: ... र् + त + ो + स at word end => ... र + त + ो + स
    if (
      profile.marathiVerbTosRule &&
      isConsonantGlyph(out[i], "र") &&
      isKind(out[i + 1], "halant") &&
      isConsonantGlyph(out[i + 2], "त") &&
      isMatraGlyph(out[i + 3], "ो") &&
      isConsonantGlyph(out[i + 4], "स") &&
      isWordEnd(out, i + 4)
    ) {
      out.splice(i + 1, 1);
    }
  }

  return out;
};
