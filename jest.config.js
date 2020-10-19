module.exports = {
    errorOnDeprecated: true,
    modulePathIgnorePatterns: ['e2e', 'untranspiled'],
    setupFiles: ['@babel/polyfill'],
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
      'node_modules/(?!(flux-hooks)/)',
    ],
    testEnvironment: 'jest-environment-jsdom-sixteen',
    verbose: false,
  };
  