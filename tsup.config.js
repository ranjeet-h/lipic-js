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
    entry: { "lipic-js": "src/index.ts" },
    format: ["iife"],
    globalName: "LipicJS",
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
