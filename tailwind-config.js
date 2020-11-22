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
        primary: {
          default: '2px 2px 5px rgba(105,157,238,0.4)',
          focus: '3px 3px 10px rgba(105,157,238,0.6)',
        },
        secondary: {
          default: '2px 2px 5px rgba(223,122,113,0.4)',
          focus: '3px 3px 10px rgba(223,122,113,0.6)',
        },
      },

      fontSize: {
        huge: '6rem',
      },
      // DF2935 some red good one
      colors: {
        primary: '#5398BE',
        secondary: '#E26D5A',
        success: '#5FA85F',
        main: {
          100: '#EDF6F9',
          200: '#C4DCE9',
          400: '#98AEC8',
          500: '#597290',
          600: '#2f3f54',
          700: '#1F2935',
          800: '#161D26',
        },
      },
    },
  },
};
