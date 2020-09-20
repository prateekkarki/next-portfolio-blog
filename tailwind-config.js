const typography = require('@tailwindcss/typography');

module.exports = {
	purge: false,
	target: 'relaxed',
	prefix: '',
	important: false,
	separator: ':',
	future: {
		removeDeprecatedGapUtilities: true,
	},
	theme: {
		typography: {
			default: {
				css: {
					color: '#333',
					fontFamily: "'Poppins', sans-serif",
				},
			},
		},

		extend: {
			boxShadow: {
				primary: '0px 16px 29px rgba(11, 190, 173, 0.4)',
				secondary: '0px 16px 29px rgba(245, 127, 23, 0.24)',
			},

			fontSize: {
				huge: '6rem',
			},

			colors: {
				white: '#e4e8f1',
				light: '#95A5C6',
				primary: '#0ABEAD',
				secondary: '#F57F17',
				main: {
					light: '#1F2935',
					dark: '#161D26',
				},
			},
		},
	},

	plugins: [typography],
};
