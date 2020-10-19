module.exports = {
    errorOnDeprecated: true,
    globals: {
      __WHITEBRAND__: 'balonet',
    },
    modulePathIgnorePatterns: ['e2e', 'untranspiled'],
    setupFiles: ['@babel/polyfill'],
    // setupFilesAfterEnv: ['<rootDir>/jest/jestSetup'],
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
      'node_modules/(?!(flux-hooks)/)',
    ],
    testEnvironment: 'jest-environment-jsdom-sixteen',
    verbose: false,
    collectCoverage: true,
    collectCoverageFrom: [
      '<rootDir>/__tests__/**/*.{js,jsx}'
    ],
  };
  