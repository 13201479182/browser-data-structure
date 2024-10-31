import { sidebar as createSideBar } from 'vuepress-theme-hope';

export const sidebar: LanguageFieldsConfig<ReturnType<typeof createSideBar>> = {
    zh: createSideBar({
        '/zh/document/vue3/': [
            {
                text: 'vue3源码',
                collapsible: true,
                children: 'structure',
            },
        ],
        '/zh/document/data-structure/': [
            {
                text: '数据结构',
                collapsible: true,
                children: 'structure',
            },
        ],
    }),

    en: createSideBar({
        '/en/document/vue3/': [
            {
                text: 'vue3源码',
                collapsible: true,
                children: 'structure',
            },
        ],
        '/en/document/data-structure/': [
            {
                text: '数据结构',
                collapsible: true,
                children: 'structure',
            },
        ],
    }),
};
