/**
 * ts 代码规则制定(https://typescript-eslint.io/rules/adjacent-overload-signatures)
 * 针对ts语法规则
 */
module.exports = {
    '@typescript-eslint/adjacent-overload-signatures': 2,
    '@typescript-eslint/array-type': [
        2,
        {
            default: 'array',
            readonly: 'array',
        },
    ],
    '@typescript-eslint/class-literal-property-style': [2, 'fields'],
    '@typescript-eslint/consistent-generic-constructors': [2, 'constructor'],
    '@typescript-eslint/consistent-indexed-object-style': [2, 'index-signature'],
    '@typescript-eslint/consistent-type-assertions': [
        2,
        {
            assertionStyle: 'angle-bracket',
        },
    ],
};
