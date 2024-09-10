/**
 * vue 代码规则制定(https://eslint.vuejs.org/rules/)
 * 针对vue语法规则
 */
module.exports = {
    'vue/singleline-html-element-content-newline': 1,
    'vue/multi-word-component-names': 0,
    'vue/html-indent': [
        1,
        4,
        {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        },
    ],
    'vue/html-closing-bracket-newline': [
        1,
        {
            singleline: 'never',
            multiline: 'never',
            selfClosingTag: {
                singleline: 'never',
                multiline: 'always',
            },
        },
    ],
};
