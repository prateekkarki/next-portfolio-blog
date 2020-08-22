require("dotenv").config();
const withFonts = require("next-fonts");

module.exports = withFonts({
  env: {
    API_URL: process.env.API_URL,
  },
  target: "serverless",
});
