import {
  getProjects,
  joinPathFragments,
  Tree,
} from '@nrwl/devkit';
import { execSync } from 'child_process';
import { Schema } from 'nx/src/utils/params';
import pino from 'pino';

const logger = pino({
  name: 'CodeGenerator',
  enabled: process.env.CODEGEN_DEBUG === 'true',
  transport: {
    target: 'pino-pretty',
  },
});

type Definition = {
  name: string;
};

interface CodeGeneratorSchema extends Schema {
  project: string;
}

export default async function (host: Tree, options: CodeGeneratorSchema) {
  const definitions: Definition[] = [
    { name: 'zoonkan' },
    { name: 'orders' },
    { name: 'saving' },
    { name: 'reporting' },
    { name: 'ticketing' },
  ];
  const projectConfiguration = getProjects(host).get(options.project);
  const projectSourceRoot = projectConfiguration?.sourceRoot ?? '';
  const componentDir = joinPathFragments(
    projectSourceRoot,
    'core',
    'redux',
    'baseConfigs'
  );

  definitions.forEach(async (endpoint) => {
    const apiPath = joinPathFragments(
      componentDir,
      `${endpoint.name}BaseConfig.ts`
    );
    try {
      execSync(`npx @rtk-query/codegen-openapi ${apiPath}`);
      logger.info(apiPath, `[Fetch-Schema][${endpoint.name}][Success]`);
    } catch (error) {
      logger.error(`[Fetch-Schema][${endpoint.name}][Error]`);
    }
  });
}
