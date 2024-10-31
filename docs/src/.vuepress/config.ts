import { resolve } from 'node:path';

import { getDirname } from 'vuepress/utils';
import { defineUserConfig } from 'vuepress';

import theme from './theme';
import config from '../../config';

export default defineUserConfig({
    base: '/',
    dest: './dist',
    public: './src/public',

    alias: {
        '@config': resolve(getDirname(import.meta.url), '../../config.ts'),
        '@util': resolve(getDirname(import.meta.url), '../../src/util'),
    },

    pagePatterns: ['**/*.md', '**/*.vue'],
    locales: {
        '/en/': {
            lang: 'en-US',
            title: config.siteConfig.title,
            description: config.siteConfig.description,
        },
        '/zh/': {
            lang: 'zh-CN',
            title: config.siteConfig.title,
            description: config.siteConfig.description,
        },
    },

    theme,
});
