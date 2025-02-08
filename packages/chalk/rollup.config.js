import typescript from '@rollup/plugin-typescript';

import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import image from '@rollup/plugin-image';

export default [
    {
        input: './src/index.ts',
        output: {
            file: './dist/index.d.ts',
            format: 'es',
        },
        plugins: [dts()],
    },
    {
        input: './src/index.ts',
        output: {
            file: './dist/index.js',
            format: 'es',
            plugins: [
                terser({
                    format: {
                        beautify: true,
                        comments: false,
                    },
                }),
            ],
        },
        plugins: [
            typescript({
                declaration: false,
            }),
            image(),
        ],
    },
];
