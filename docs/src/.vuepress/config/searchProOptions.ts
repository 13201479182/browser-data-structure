import type { SearchProPluginOptions } from 'vuepress-plugin-search-pro';

export const searchProOptions: SearchProPluginOptions = {
    hotKeys: [{ key: 'f', ctrl: true }],

    indexContent: true,
    queryHistoryCount: 0,
    resultHistoryCount: 0,

    customFields: [
        {
            getter: (page) => page.path,
            formatter: '路径: $content',
        },
        // {
        //     getter: (page) => page.frontmatter.title,
        //     formatter: {
        //         '/': 'Tag: $content',
        //         '/zh/': '标签：$content',
        //     },
        // },
    ],
};
