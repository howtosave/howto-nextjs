const path = require('path');

// i18n
const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ko'],
  localePath: path.resolve(__dirname),
};

module.exports = {
  i18n,
};
