/** @type {import('next').NextConfig} */

// i18n
const { i18n } = require('./i18n');

const nextConfig = {
  reactStrictMode: true,
  i18n,
};

module.exports = nextConfig;
