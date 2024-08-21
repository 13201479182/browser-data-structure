const eslintConfig = require('@liuhuiyuan/eslint-config');

/**
 * 通过注释在文件内屏蔽规则
 *   /* eslint-disable no-alert *\/
 *   /* eslint-disable-line no-alert *\/
 *
 * 配置参考(https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file)
 */
module.exports = [
    ...eslintConfig,

    // 修改全局配置
    {
        // ignores: ['packages/eslint-config'],
    },

    // 修改指定规则
    {
        // 'no-unused-vars': 0,
    },
];
