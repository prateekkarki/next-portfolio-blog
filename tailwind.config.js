module.exports = {
  darkMode: 'class',
  theme: {
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
      spacing: {
        header: '5rem',
        footer: '56px',
      },
      fontSize: {
        huge: '6rem',
      },
      colors: {
        primary: '#5398BE',
        secondary: '#E26D5A',
        successDim: '#5FA85F',
        successBright: '#3DBB7E',
        light: {
          primary: '#7EB4D7',
          secondary: '#F8BFb6',
          100: '#EDF6F9',
          200: '#C4DCE9',
          400: '#98AEC8',
          500: '#597290',
          600: '#2f3f54',
          700: '#1F2935',
          800: '#161D26',
        },
        dark: {
          primary: '#186999',
          secondary: '#B24635',
          100: '#161D26',
          200: '#1F2935',
          400: '#2f3f54',
          500: '#597290',
          600: '#98AEC8',
          700: '#C4DCE9',
          800: '#EDF6F9',
        },
      },
    },
  },
};
