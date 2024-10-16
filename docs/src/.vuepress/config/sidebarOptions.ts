import { SidebarOptions } from 'vuepress-theme-hope';

export const sidebarOptions: SidebarOptions = {
    '/document/': [
        {
            text: '博客',
            collapsible: true,
            link: 'blog',
        },
        {
            text: '博客',
            collapsible: true,
            link: '/blog/',
        },
    ],
};
