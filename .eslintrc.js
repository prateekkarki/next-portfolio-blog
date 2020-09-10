module.exports = {
	env: {
		browser: true,
	},
	extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'airbnb'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2019,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'comma-dangle': 0,
		'linebreak-style': 0,
		'no-tabs': 0,
		indent: 0,
		'react/jsx-filename-extension': 0,
		'react/jsx-indent': 0,
		'react/jsx-indent-props': 0,
		'react/jsx-props-no-spreading': 0,
		'react/jsx-one-expression-per-line': 0,
		'jsx-a11y/accessible-emoji': 0,
		'jsx-a11y/anchor-is-valid': 0,
		'jsx-a11y/label-has-associated-control': 0,
		'import/no-named-as-default': 0,
		'import/no-named-as-default-member': 0,
	},
};
