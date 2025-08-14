
import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['**/tests/**/*.test.ts', '**/__tests__/**/*.test.ts'],
  clearMocks: true,
  preset: 'ts-jest/presets/default-esm', // importante para ESM
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts']
};

export default config;
