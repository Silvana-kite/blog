module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {}, // 使 ESLint 能解析 tsconfig 中的 paths 别名
      },
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "airbnb",
      "airbnb/hooks",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      "prettier", // 放到最后，覆盖掉与 Prettier 冲突的规则
    ],
    plugins: ["react", "@typescript-eslint", "import"],
    rules: {
      // 根据团队习惯自行开启/关闭规则，例如：
      "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
      "import/prefer-default-export": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      // …其他自定义规则
      'prettier/prettier': 'error'
    },
  };
  