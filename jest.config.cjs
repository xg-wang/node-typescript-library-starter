/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  globals: {
    "ts-jest": {
      useESM: true,
      tsconfig: "test/tsconfig.json",
    },
  },
  // transformIgnorePatterns: ["node_modules/(?!(node-fetch))"],
  testEnvironment: "node",
};
