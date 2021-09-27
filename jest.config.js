module.exports = {
  rootDir: '.',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['<rootDir>/test/**/*.test.ts'],
  testEnvironment: 'node',
  testResultsProcessor: 'jest-sonar-reporter',
  restoreMocks: true,
  clearMocks: true,
  resetMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/{!(app.module|index|main),}.ts'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test/', '/dto/'],
  coverageReporters: ['lcovonly', 'text'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}
