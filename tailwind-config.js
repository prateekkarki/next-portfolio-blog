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
			colors: {
				green: '#0ABEAD',
				mainDark: '#1F2935',
			},
		},
	},

	plugins: [require('@tailwindcss/typography')],
};
