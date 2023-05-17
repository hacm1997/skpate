/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    localDetection: false
  }
}

let config = nextTranslate(nextConfig);
module.exports = config;
