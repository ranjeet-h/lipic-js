import { describe, expect, it } from "vitest";

import {
  getLanguage,
  isLanguageAvailable,
  listLanguages,
  resolveLanguageEngineConfig
} from "../../src/language/language-registry";

describe("language registry", () => {
  it("lists known language short codes", () => {
    const languages = listLanguages();
    expect(languages.some((l) => l.code === "hi")).toBe(true);
    expect(languages.some((l) => l.code === "mr")).toBe(true);
    expect(languages.some((l) => l.code === "ne")).toBe(true);
    expect(languages.some((l) => l.code === "bn")).toBe(true);
  });

  it("returns availability status by short code", () => {
    expect(isLanguageAvailable("hi")).toBe(true);
    expect(isLanguageAvailable("mr")).toBe(true);
    expect(isLanguageAvailable("bn")).toBe(true);
    expect(isLanguageAvailable("as")).toBe(true);
    expect(isLanguageAvailable("ne")).toBe(true);
    expect(isLanguageAvailable("sa")).toBe(true);
    expect(isLanguageAvailable("gu")).toBe(true);
    expect(isLanguageAvailable("pa")).toBe(true);
    expect(isLanguageAvailable("ta")).toBe(true);
    expect(isLanguageAvailable("te")).toBe(true);
    expect(isLanguageAvailable("kn")).toBe(true);
    expect(isLanguageAvailable("ml")).toBe(true);
    expect(isLanguageAvailable("or")).toBe(true);
  });

  it("resolves engine config for available language", () => {
    const cfg = resolveLanguageEngineConfig("hi");
    expect(cfg.scriptId).toBe("devanagari");
    expect(cfg.languageId).toBe("hindi");
    expect(Object.keys(cfg.expandedMap).length).toBeGreaterThan(0);
  });

  it("resolves config for newly enabled language codes", () => {
    expect(resolveLanguageEngineConfig("gu").scriptId).toBe("gujarati");
    expect(resolveLanguageEngineConfig("pa").scriptId).toBe("gurmukhi");
    expect(resolveLanguageEngineConfig("ta").scriptId).toBe("tamil");
    expect(resolveLanguageEngineConfig("or").scriptId).toBe("odia");
    expect(getLanguage("ne").status).toBe("available");
  });
});
