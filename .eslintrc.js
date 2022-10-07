module.exports = {
  env: {
    browser: true,
    es6: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "next/core-web-vitals",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // ecmaVersion: 12,
    ecmaVersion: 2017,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
