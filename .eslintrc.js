module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        trailingComma: "es5",
        semi: false,
        singleQuote: true,
        arrowParens: 'avoid',
      },
    ],
    'no-unused-vars': 0,
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'vue/html-closing-bracket-newline': 0,
  }
};
