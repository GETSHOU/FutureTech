import js from '@eslint/js';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
	js.configs.recommended,
	prettierConfig,
	{
		files: ['**/*.{js,mjs,cjs}'],
		languageOptions: {
			globals: globals.browser,
		},
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			'no-unused-vars': 'warn',
			'no-console': 'warn',
		},
	},
];
