import { resolve } from 'node:path';

import { defineUserConfig } from 'vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';
import { hopeTheme } from 'vuepress-theme-hope';

import config from '../../config.ts';
import { navbar, sidebar } from './config';

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
                indexContent: true,
                customFields: [
                    {
                        getter: (page) => page.path,
                        formatter: 'path: docs/src/pages$content',
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
