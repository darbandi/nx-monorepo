// eslint-disable-next-line @typescript-eslint/no-var-requires
const { parsed: localEnv } = require('dotenv').config();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  env: {
    ...localEnv,
  },
  i18n: {
    localeDetection: false,
    locales: ['fa', 'en'],
    defaultLocale: 'fa',
  },
  webpack(config, { dev }) {
    if (dev) {
      // enable react-refresh plugin
      config.plugins.push(new ReactRefreshWebpackPlugin());
    }

    return config;
  },
};

module.exports = withNx(nextConfig);
