module.exports = {
	env: {
		browser: true,
	},
	extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'airbnb'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'linebreak-style': 0,
		'no-tabs': 0,
		indent: 0,
		'react/jsx-filename-extension': 0,
		'react/jsx-indent': 0,
		'react/jsx-indent-props': 0,
		'jsx-a11y/accessible-emoji': 0,
	},
};
