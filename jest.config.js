module.exports = {
  rootDir: './',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx}', 'src/app/**/*.{js,jsx}'],
  coverageDirectory: '<rootDir>/coverage/',
  coverageReporters: ['lcov', 'text', 'text-summary'],
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['./setupJest.js', './setupEnzyme.js'],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  testMatch: [
    '<rootDir>/src/*.{spec,test}.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
  ],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](build|docs|node_modules|public)[/\\\\]',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
