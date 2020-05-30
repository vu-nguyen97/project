module.export = {
  // refs: https://github.com/yannickcr/eslint-plugin-react
  // https://eslint.org/docs/user-guide/configuring#adding-shared-settings
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  // extends: ["plugin:prettier/recommended", "airbnb"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["react", "jsx-a11y", "import", "prettier"],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  }
};