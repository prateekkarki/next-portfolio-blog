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
		extend: {
			colors: {
				coolteal: '#00e0e2',
			},
		},
	},

	plugins: [require('@tailwindcss/typography')],
};
