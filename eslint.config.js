import globals from "globals";
import pluginJsDoc from 'eslint-plugin-jsdoc'

export default [
  { languageOptions: { globals: globals.browser } },
  {
    name: 'jsdoc',
    plugins: {
      jsdoc: pluginJsDoc,
    },
    rules: {
      'jsdoc/check-alignment': 'warn',
    },
  },
];