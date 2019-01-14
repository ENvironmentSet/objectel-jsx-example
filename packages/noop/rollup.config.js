import { name, index as input, main as cjs, unpkg as umd, module as es, dependencies } from './package.json';

const outputs = [
  { file: cjs, format: 'cjs' },
  { file: es, format: 'es' },
  { file: es.replace(/.js$/, '.mjs'), format: 'es' },
  { file: umd, format: 'umd', name },
];

const toConfig = output => ({
  input,
  output: { indent: false, ...output },
});

export default outputs.map(toConfig);