import { applyLigatureRule } from "./ligature";
import { applyNasalizationRule } from "./nasalization";
import { applyNuktaRule } from "./nukta";
import { applySchwaRule } from "./schwa";
import type { RuleContext, Token } from "./types";

export function runRulePipeline(tokens: Token[], ctx: RuleContext): Token[] {
  const withNukta = ctx.options.enableNukta ? applyNuktaRule(tokens, ctx) : tokens;
  const withNasal = applyNasalizationRule(withNukta, ctx);
  const withLigatures = ctx.options.enableLigatureCollapse ? applyLigatureRule(withNasal, ctx) : withNasal;
  const withSchwa = ctx.options.enableSchwaDeletion ? applySchwaRule(withLigatures, ctx) : withLigatures;
  return withSchwa;
}
