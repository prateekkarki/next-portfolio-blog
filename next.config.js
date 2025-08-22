require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    deviceSizes: [320, 640, 660, 768, 1024, 1600],
    loader: 'custom',
  },
  env: {
    API_URL: process.env.API_URL,
  },
  typescript: {
    // Enable TypeScript strict mode
    ignoreBuildErrors: false,
  },
  // Use Babel for compilation (not SWC) since we need twin.macro
  swcMinify: true,
};
