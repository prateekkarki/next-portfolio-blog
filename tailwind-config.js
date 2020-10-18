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
          default: '3px 3px 5px rgba(105,157,238,0.4)',
          focus: '1px 1px 3px rgba(105,157,238,0.4)',
        },
        secondary: {
          default: '3px 3px 5px rgba(223,122,113,0.4)',
          focus: '1px 1px 3px rgba(223,122,113,0.4)',
        },
      },

      fontSize: {
        huge: '6rem',
      },
      // DF2935 some red good one
      // BBD8B3 tea green
      // AABD8C olivine green
      colors: {
        white: '#e4e8f1',
        light: '#95A5C6',
        primary: '#699dee',
        secondary: '#df7a71',
        danger: '#DF2935',
        main: {
          light: '#1F2935',
          dark: '#161D26',
        },
      },
    },
  },
};
