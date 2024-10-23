import { defineUserConfig } from 'vuepress/cli';
import { hopeTheme } from 'vuepress-theme-hope';

import { viteBundler } from '@vuepress/bundler-vite';

import Config from './config/index';

export default defineUserConfig({
    dest: './dist',
    public: './src/public',

    title: '南柯一梦',

    alias: {},

    theme: hopeTheme({
        iconAssets: 'fontawesome',
        darkmode: 'toggle',
        fullscreen: true,

        titleIcon: true,
        repoDisplay: true,
        logo: '/image/avatar_small.png',
        repo: 'https://github.com/huiyuan33/monorepo',
        docsDir: 'docs/src',

        navbar: Config.navbarOptions,
        sidebar: Config.sidebarOptions,
        plugins: {
            blog: true,
            searchPro: Config.searchProOptions,
        },
    }),

    bundler: viteBundler(),
});
