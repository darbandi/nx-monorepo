module.exports = {
  i18n: {
    locales: ['fa', 'en'],
    defaultLocale: 'fa',
  },
  reloadOnPrerender: true,
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./apps/commerce/locales')
      : '/apps/commerce/public/locales',
};
