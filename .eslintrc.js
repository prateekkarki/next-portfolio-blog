module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'airbnb'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {},
};
