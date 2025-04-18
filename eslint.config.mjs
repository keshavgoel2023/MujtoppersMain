export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "import/no-anonymous-default-export": "off",
      "react/display-name": "off",
      "prefer-const": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "react/no-unescaped-entities": "off", // Disables the error for unescaped entities
    },
  },
];
