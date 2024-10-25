import type { SearchProCustomFieldOptions } from 'vuepress-plugin-search-pro';

import { defineUserConfig } from 'vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';
import { hopeTheme } from 'vuepress-theme-hope';

import { resolve } from 'node:path';
import config from '../../config';
import { navbar, sidebar } from './config';

type Page = SearchProCustomFieldOptions['getter'] extends (arg: infer R) => any ? R : any;

export default defineUserConfig({
    title: config.title,

    dest: './dist',
    public: './src/public',
    alias: {
        '@author': resolve('./src/pages/author'),
        '@blog': resolve('./src/pages/blog'),
        '@document': resolve('./src/pages/document'),
        '@photo': resolve('./src/pages/photo'),
        '@tool': resolve('./src/pages/tool'),
        '@video': resolve('./src/pages/video'),
    },

    theme: hopeTheme({
        darkmode: 'toggle',
        iconAssets: 'fontawesome',

        logo: config.avatar,
        repo: config.github,
        docsDir: config.codeDir,

        navbar,
        sidebar,

        plugins: {
            blog: true,
            searchPro: {
                hotKeys: [{ key: 'f', ctrl: true }],
                indexContent: false,
                customFields: [
                    {
                        getter: (page) => page.frontmatter.title,
                        formatter: 'title: $content',
                    },
                    {
                        getter: (page: Page) => <string>page.frontmatter.author,
                        formatter: 'author: $content',
                    },
                ],
            },
        },
    }),

    bundler: viteBundler({
        viteOptions: {
            define: {},
        },
    }),
});
