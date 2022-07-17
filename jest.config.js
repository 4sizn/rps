export default () => {
  return {
    transform: {
      "\\.[jt]sx?$": ["esbuild-jest"],
    },
    /// This will resolve any tsconfig.compilerOptions.paths
    testPathIgnorePatterns: ["/node_modules/", "/dist/", "/types/"],
    moduleFileExtensions: ["ts", "js", "json", "node"],
  };
};
