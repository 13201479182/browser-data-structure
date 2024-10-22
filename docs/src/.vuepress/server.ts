import { defineUserConfig } from 'vuepress/cli';
import { hopeTheme } from 'vuepress-theme-hope';

import { viteBundler } from '@vuepress/bundler-vite';

import { githubURL, logoURL, logoName, default as Config } from './config/index';

export default defineUserConfig({
    dest: './dist',
    public: './src/public',

    title: logoName,

    alias: {},

    theme: hopeTheme({
        iconAssets: 'fontawesome',
        darkmode: 'toggle',
        fullscreen: true,

        titleIcon: true,
        repoDisplay: true,
        logo: logoURL,
        repo: githubURL,

        navbar: Config.navbarOptions,
        sidebar: Config.sidebarOptions,
        plugins: {
            blog: true,
            searchPro: Config.searchProOptions,
        },
    }),

    bundler: viteBundler(),
});
