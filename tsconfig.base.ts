export const compilerOptions = {
  target: 'ESNext',
  module: 'commonjs',
  strict: true,
  esModuleInterop: true,
  moduleResolution: 'node',
  baseUrl: '.',
  paths: {
    '@chorro-pets/common/domain/*': ['packages/common/common-domain/src/*'],
    '@chorro-pets/domain/*': ['packages/domain/src/*'],
  },
  outDir: 'dist',
};
