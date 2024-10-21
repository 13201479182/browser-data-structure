import type { SearchProPluginOptions } from 'vuepress-plugin-search-pro';

export const searchProOptions: SearchProPluginOptions = {
    hotKeys: [{ key: 'f', ctrl: true }],

    indexContent: true,
    customFields: [
        {
            getter: (page) => page.path,
            formatter: 'path: docs/src/pages$content',
        },
    ],
};
