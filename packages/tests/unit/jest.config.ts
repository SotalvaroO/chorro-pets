import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/dist/**'],
  rootDir: '../../../',
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  verbose: true,
  // setupFiles: ['dotenv/config'],
};

export default jestConfig;
