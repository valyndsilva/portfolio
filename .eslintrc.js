module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "prettier",
    "eslint:recommended",
    "next",
    "plugin:@next/next/recommended",
  ],
  overrides: [],
  parserOptions: {
    project: "tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "import/no-anonymous-default-export": "off",
    "no-undef": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
