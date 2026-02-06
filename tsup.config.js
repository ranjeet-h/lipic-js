import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    clean: true,
    minify: true,
    outDir: "dist",
    outExtension(ctx) {
      if (ctx.format === "cjs") return { js: ".cjs" };
      return { js: ".js" };
    }
  },
  {
    entry: { "indic-ime": "src/index.ts" },
    format: ["iife"],
    globalName: "IndicIME",
    dts: false,
    sourcemap: true,
    clean: false,
    minify: true,
    outDir: "dist",
    outExtension() {
      return { js: ".iife.js" };
    }
  }
]);
