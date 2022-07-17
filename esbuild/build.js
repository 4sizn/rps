import * as esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["src/rps.ts"],
    outfile: "dist/rps-esm.js",
    bundle: true,
    platform: "neutral",
    format: "esm",
  })

  .catch(() => process.exit(1));

esbuild
  .build({
    entryPoints: ["src/rps.ts"],
    outfile: "dist/rps.js",
    bundle: true,
    platform: "neutral",
    format: "cjs",
  })

  .catch(() => process.exit(1));
