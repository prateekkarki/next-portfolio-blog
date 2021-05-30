require('dotenv').config();

module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
    deviceSizes: [320, 640, 660, 768, 1024, 1600],
    imageSizes: [300, 600, 300, 365, 324, 500],
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/pratiek/',
  },
  env: {
    API_URL: process.env.API_URL,
  },
  target: 'serverless',
};
