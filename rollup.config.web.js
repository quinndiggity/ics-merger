import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';

export default {
	entry: './src/web.js',
	dest: './public/js/bundle.js',
	format: 'umd',
	plugins: [
		json(),
		commonjs(),
		buble({
			transforms: {
				dangerousForOf: true
			}
		}),
		nodeResolve({
			jsnext: true
		})
	]
};
