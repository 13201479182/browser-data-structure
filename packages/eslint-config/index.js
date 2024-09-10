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
        name: '@liuhuiyuan: js&cjs-rules',
        files: ['**/*.{js,cjs}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: jsRules,
    },
    {
        name: '@liuhuiyuan: ts-rules',
        files: ['**/*.ts'],
        ignores: ['**/*.d.ts'],
        languageOptions: {
            parser: tsParser,
        },
        rules: Object.assign({}, jsRules, tsRules),
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
    },
    {
        name: '@liuhuiyuan: vue-rules',
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
    {
        // 全局配置统一忽略目录
        name: '@liuhuiyuan: global-ignore',
        ignores: ['**/{.vscode,build,dist}/*', '**/node_modules/*', '**/public/*', '**/coverage/*'],
    },
]);
