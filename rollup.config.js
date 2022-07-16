import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";

export default [
  {
    input: `src/rps.ts`,
    plugins: [
      esbuild({
        tsconfig: `tsconfig.json`,
      }),
    ],
    output: [
      {
        file: `dist/rps-cjs.js`,
        format: `cjs`,
        sourcemap: true,
      },
      {
        file: `dist/rps-esm.js`,
        format: `esm`,
        sourcemap: true,
      },
    ],
  },
  // {
  //   input
  // }
];
