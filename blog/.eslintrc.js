module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "@vue/prettier"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "vue/attributes-order": "error",
    "vue/no-unused-vars": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
