export type NasalizationMode = "anusvara" | "panchamakshar";

export interface NasalizationProfile {
  nasalConsonants: Set<string>;
  vargaConsonants: Set<string>;
  panchamaByConsonant: Map<string, string>;
}

export interface ScriptRuleConfig {
  scriptId: string;
  kind: "devanagari" | "generic";
  halant: string;
  anusvara: string;
  nukta: string;
}

export interface EngineRuleOptions {
  enableNukta: boolean;
  nasalizationMode: NasalizationMode;
  enableLigatureCollapse: boolean;
  enableSchwaDeletion: boolean;
}

export type Token =
  | { kind: "consonant"; glyph: string }
  | { kind: "vowelIndependent"; glyph: string }
  | { kind: "matra"; glyph: string }
  | { kind: "inherentA" }
  | { kind: "mark"; glyph: string }
  | { kind: "halant"; glyph: string }
  | { kind: "raw"; text: string };

export interface RuleContext {
  options: EngineRuleOptions;
  script: ScriptRuleConfig;
  languageId?: string;
  nasalizationProfile?: NasalizationProfile;
}

export type RuleFn = (tokens: Token[], ctx: RuleContext) => Token[];

export function isWordBoundaryToken(token: Token): boolean {
  if (token.kind !== "raw") {
    return false;
  }
  return /[\s.,!?;:()[\]{}'"-]/u.test(token.text);
}
