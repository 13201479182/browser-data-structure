import { NavbarOptions } from 'vuepress-theme-hope';

export const navbar: LanguageFieldsConfig<NavbarOptions> = {
    zh: [
        {
            link: '/zh/home/',
            text: '首页',
            icon: 'home',
        },
        {
            text: '文档',
            icon: 'document',
            prefix: '/zh/document/',
            children: [
                {
                    icon: 'vue',
                    text: 'vue3源码',
                    link: 'vue3/',
                },
                {
                    icon: 'data-structure',
                    text: '数据结构',
                    link: 'data-structure/',
                },
            ],
        },
        {
            link: '/zh/blog/',
            text: '博客',
            icon: 'blog',
        },
        {
            link: '/zh/tool/',
            text: '工具',
            icon: 'tool',
        },
        {
            link: '/zh/photo/',
            text: '图片',
            icon: 'image',
        },
        {
            link: '/zh/video/',
            text: '视频',
            icon: 'video',
        },
    ],

    en: [
        {
            link: '/en/home/',
            text: '首页',
            icon: 'home',
        },
        {
            link: '/en/document/',
            text: '文档',
            icon: 'document',
            prefix: '/en/document/',
            children: [
                {
                    icon: 'vue',
                    text: 'vue3源码',
                    link: 'vue3/',
                },
                {
                    icon: 'data-structure',
                    text: '数据结构',
                    link: 'data-structure/',
                },
            ],
        },
        {
            link: '/en/blog/',
            text: '博客',
            icon: 'blog',
        },
        {
            link: '/en/tool/',
            text: '工具',
            icon: 'tool',
        },
        {
            link: '/en/photo/',
            text: '图片',
            icon: 'image',
        },
        {
            link: '/en/video/',
            text: '视频',
            icon: 'video',
        },
    ],
};
