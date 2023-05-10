/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// webpack.config.js
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const path = require('path');

module.exports = {
  plugins: [
    new HardSourceWebpackPlugin({
      environmentHash: {
        root: process.cwd(),
        directories: [],
        files: ['package-lock.json', 'yarn.lock'],
      },
      info: {
        mode: 'none',
        level: 'debug',
      },
      cacheDirectory: path.resolve(
        __dirname,
        '.cache/hard-source/[confighash]',
      ),
      recordsPath: path.resolve(
        __dirname,
        '.cache/hard-source/[confighash]/records.json',
      ),
      configHash: function (webpackConfig) {
        return require('node-object-hash')({ sort: false }).hash(webpackConfig);
      },
      cachePrune: {
        maxAge: 14 * 24 * 60 * 60 * 1000,
        sizeThreshold: 50 * 1024 * 1024,
      },
    }),
  ],
};