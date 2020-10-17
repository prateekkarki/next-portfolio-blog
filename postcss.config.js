const tailwindConfig = require('./tailwind-config');

module.exports = {
  plugins: {
    tailwindcss: tailwindConfig,
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: ['./components/**/*.js', './pages/**/*.js'],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        }
      : {}),
    cssnano: {},
  },
};
