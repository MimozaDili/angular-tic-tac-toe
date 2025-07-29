/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/'
  ],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(ts|js|mjs|html)$': ['jest-preset-angular', {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      useESM: true,
    }],
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!src/app/**/*.module.ts',
    '!src/app/**/*.spec.ts'
  ]
};
