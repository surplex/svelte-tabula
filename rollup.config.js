import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';
import autoPreprocess from 'svelte-preprocess';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

export default {
	input: 'src/index.ts',
	output: [
		{ file: pkg.module, 'format': 'es' },
		{ file: pkg.main, 'format': 'umd', name }
	],
	plugins: [
		commonjs(),
		typescript(),
		svelte({ preprocess: autoPreprocess() }),
		resolve(),
		terser()
	]
};
