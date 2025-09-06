module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/**/*.test.ts", "<rootDir>/**/*.test.tsx"],
  moduleNameMapper: {
    "^@my-monorepo/(.*)$": "<rootDir>/packages/$1/src",
  },
};

