module.exports = {
	purge: false,
	target: 'relaxed',
	prefix: '',
	important: false,
	separator: ':',
	future: {
		removeDeprecatedGapUtilities: true,
	},
	plugins: [require('@tailwindcss/typography')],
};
