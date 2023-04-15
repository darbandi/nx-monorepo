import {
  generateFiles,
  getProjects,
  joinPathFragments,
  Tree,
} from '@nrwl/devkit';
import { Schema } from 'nx/src/utils/params';

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
  const servicesDir = joinPathFragments(projectSourceRoot, 'services');
  const endPoints = definitions.map((item) => item.name);
  const componentDir = joinPathFragments(
    projectSourceRoot,
    'core',
    'redux',
    'baseConfigs'
  );

  generateFiles(host, joinPathFragments(__dirname, './index'), servicesDir, {
    endPoints,
    tmpl: '',
  });

  endPoints.forEach((endpoint) =>
    generateFiles(host, joinPathFragments(__dirname, './files'), componentDir, {
      endpoint: endpoint,
      project: `${options.project}`,
      tmpl: '',
    })
  );
}
