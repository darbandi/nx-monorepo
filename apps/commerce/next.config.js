// eslint-disable-next-line @typescript-eslint/no-var-requires
const { parsed: localEnv } = require('dotenv').config();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  env: {
    ...localEnv,
  },
};

module.exports = withNx(nextConfig);
