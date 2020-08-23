module.exports = {
	purge: [],
	target: 'relaxed',
	prefix: '',
	important: false,
	separator: ':',
	future: {
		removeDeprecatedGapUtilities: true,
	},
	plugins: [require('@tailwindcss/typography')],
};
