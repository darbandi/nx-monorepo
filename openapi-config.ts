import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: 'http://dev.mazdax.tech/saving/swagger/doc.json',
  apiFile: './apps/web/src/store/emptyApi.ts',
  apiImport: 'emptyApi',
  // outputFile: './apps/web/src/store/subscriptions.ts',
  // exportName: 'subscriptions',
  hooks: true,
  outputFiles: {
    './apps/web/src/store/subscriptions.ts': {
      filterEndpoints: [/subscriptions/i],
    },
  },
};

export default config;
