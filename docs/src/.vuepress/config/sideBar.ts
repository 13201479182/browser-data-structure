import { sidebar as createSideBar } from 'vuepress-theme-hope';

export const sidebar: LanguageFieldsConfig<ReturnType<typeof createSideBar>> = {
    zh: createSideBar({
        '/zh/document/vue3/': [
            {
                text: 'vue3章节',
                icon: 'laptop-code',
                link: '1',
                collapsible: true,
            },
        ],
        '/zh/document/data-structure/': [
            {
                text: 'data-structure章节',
                icon: 'laptop-code',
                link: '2',
                collapsible: true,
            },
        ],
    }),

    en: createSideBar({
        '/en/document/vue3/': [
            {
                text: 'vue3章节',
                icon: 'laptop-code',
                link: '1',
                collapsible: true,
            },
        ],
        '/en/document/data-structure/': [
            {
                text: 'data-structure章节',
                icon: 'laptop-code',
                link: '2',
                collapsible: true,
            },
        ],
    }),
};
