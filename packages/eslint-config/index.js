const { defineFlatConfig } = require('eslint-define-config');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

const { JsRules, TsRules, VueRules } = require('./src/index.js');

module.exports = defineFlatConfig([
    {
        files: ['*.{js,cjs}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: JsRules,
    },
    eslintPluginPrettierRecommended,
]);
