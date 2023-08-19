module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ["@babel/preset-react"],
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ["airbnb"],
  plugins: ["babel", "jsx-a11y", "react", "react-hooks"],
  rules: {
    quotes: ["error", "double"],

    "array-element-newline": ["error", "consistent"],
    "array-bracket-newline": ["error", "consistent"],

    "object-curly-spacing": ["error", "always", {
      objectsInObjects: true,
    }],
    "object-property-newline": ["error", {
      allowMultiplePropertiesPerLine: false,
    }],

    "operator-linebreak": ["error", "before"],

    "max-len": ["error", {
      code: 120,
      ignoreStrings: true,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: true,
      ignoreUrls: true,
    }],

    "no-console": ["error", {
      allow: ["warn", "error"],
    }],
    "no-alert": "error",

    "arrow-body-style": "off",

    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": "off",
    "react/prop-types": "off",

    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies

    "jsx-a11y/heading-has-content": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
      },
    ],
    "jsx-a11y/label-has-for": [
      2,
      {
        required: {
          every: ["id"],
        },
      },
    ], // for nested label htmlFor error
  },
};
