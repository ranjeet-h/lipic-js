import { describe, expect, it } from "vitest";
import tamilExpanded from "../../maps/tamil/phonetic.expanded.json";
import punjabiExpanded from "../../maps/punjabi/phonetic.expanded.json";
import bengaliExpanded from "../../maps/bengali/phonetic.expanded.json";
import { inferScriptRuleConfig } from "../../src/engine/rules/script-config";
import { resolveLanguageEngineConfig } from "../../src/language/language-registry";

type MapEntry = { type: string; glyph: string; matra?: string };

describe("Fix 7 — Script Inference Robustness", () => {
  it("infers Tamil script from Tamil expanded map", () => {
    const config = inferScriptRuleConfig(tamilExpanded as Record<string, MapEntry>);
    expect(config.scriptId).toBe("tamil");
    expect(config.halant).toBe("்");
  });

  it("infers Gurmukhi script from Punjabi expanded map", () => {
    const config = inferScriptRuleConfig(punjabiExpanded as Record<string, MapEntry>);
    expect(config.scriptId).toBe("gurmukhi");
    expect(config.halant).toBe("੍");
  });

  it("infers Bengali script from Bengali expanded map", () => {
    const config = inferScriptRuleConfig(bengaliExpanded as Record<string, MapEntry>);
    expect(config.scriptId).toBe("bengali");
  });

  it("all registered languages infer correct scriptId", () => {
    const expected: Record<string, string> = {
      hi: "devanagari", mr: "devanagari", ne: "devanagari", sa: "devanagari",
      bn: "bengali", as: "bengali", gu: "gujarati", pa: "gurmukhi",
      ta: "tamil", te: "telugu", kn: "kannada", ml: "malayalam", or: "odia"
    };
    for (const [code, expectedScript] of Object.entries(expected)) {
      const { expandedMap } = resolveLanguageEngineConfig(code as any);
      const config = inferScriptRuleConfig(expandedMap as Record<string, MapEntry>);
      expect(config.scriptId, `${code} inferred wrong script`).toBe(expectedScript);
    }
  });
});
