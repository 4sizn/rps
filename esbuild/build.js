import * as esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["src/rps.ts"],
    outdir: "dist",
    bundle: true,
    platform: "neutral",
  })

  .catch(() => process.exit(1));
