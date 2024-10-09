const eslintConfig = require('@hyuan/eslint-config');

/**
 * 通过注释在文件内屏蔽规则
 *
 * prettier(https://prettier.nodejs.cn/docs/en/ignore.html)
 * eslint(https://eslint.org/docs/latest/use/configure/ignore)
 */
module.exports = [
    ...eslintConfig,

    // 适用当前项目配置,规则优先级最高
    {
        name: '@project: config',
        ignores: ['./packages/eslint-config/*'],
    },
    {
        name: '@project: rules',
        // 修改指定规则
        rules: {},
    },
];
