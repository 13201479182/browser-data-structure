import { defineFlatConfig } from 'eslint-define-config';

import { JsRules, TsRules, VueRules } from './src';

export default defineFlatConfig({
    root: true,

    overrides: [
        // js & cjs 文件处理
        {
            files: ['*.js', '*.cjs'],
            rules: {
                ...JsRules,
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            plugins: ['prettier'],
        },

        // ts 文件处理
        {
            files: ['src/**/*.ts', 'package/**/*.ts', 'vite.config.ts'],
            rules: {
                ...JsRules,
                ...TsRules,
            },
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            plugins: ['@typescript-eslint', 'prettier'],
        },

        // vue 文件处理
        {
            files: ['*.vue'],
            extends: ['plugin:vue/vue3-recommended'],
            rules: {
                ...JsRules,
                ...TsRules,
                ...VueRules,
            },
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                ecmaVersion: 'latest',
                sourceType: 'module',
                extraFileExtensions: ['.vue'],
            },
        },
    ],
});
