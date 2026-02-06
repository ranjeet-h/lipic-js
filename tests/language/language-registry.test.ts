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
    expect(isLanguageAvailable("ne")).toBe(false);
  });

  it("resolves engine config for available language", () => {
    const cfg = resolveLanguageEngineConfig("hi");
    expect(cfg.scriptId).toBe("devanagari");
    expect(cfg.languageId).toBe("hindi");
    expect(Object.keys(cfg.expandedMap).length).toBeGreaterThan(0);
  });

  it("throws for planned language", () => {
    expect(() => resolveLanguageEngineConfig("ne")).toThrow("planned but not available");
    expect(getLanguage("ne").status).toBe("planned");
  });
});
