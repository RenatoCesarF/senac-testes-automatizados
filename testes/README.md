## passo 1

npm init -y

## passo 2

npm install --save-dev jest ts-jest @types/jest typescript ts-node

## passo 3 - arquivo tsconfig

```
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src", "tests"]
}
```

## passo 4 - arquivo jest.config

```
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['**/tests/**/*.test.ts', '**/__tests__/**/*.test.ts'],
  clearMocks: true
};

export default config;
```
