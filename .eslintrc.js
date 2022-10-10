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
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
    "@next/next/no-img-element": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
