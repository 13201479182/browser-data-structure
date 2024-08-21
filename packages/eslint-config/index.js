const { defineFlatConfig } = require('eslint-define-config');

const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');

const jsRules = require('./src/jsRules.js');
const tsRules = require('./src/tsRules.js');
const vueRules = require('./src/vueRules.js');

module.exports = defineFlatConfig([
    require('eslint-plugin-prettier/recommended'),
    ...require('eslint-plugin-vue').configs['flat/essential'],

    {
        files: ['**/*.{js,cjs}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: jsRules,
    },
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
        },
        rules: Object.assign({}, jsRules, tsRules),
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
    },
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: require('vue-eslint-parser'),
            parserOptions: {
                parser: tsParser,
            },
        },
        rules: Object.assign({}, jsRules, tsRules, vueRules),
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
    },
]);
