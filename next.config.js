require('dotenv').config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  target: 'serverless',
};
