const nextJest = require('jest-expo/jest-preset');

module.exports = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|@react-native-firebase|expo(nent)?|expo-router|@expo|react-navigation|@unimodules|@react-navigation/.*)',
  ],
  moduleNameMapper: {
    '^global.css$': '<rootDir>/__mocks__/styleMock.js',
    '^@react-native-firebase/app$': '<rootDir>/__mocks__/@react-native-firebase/app.js',
    '^@react-native-firebase/auth$': '<rootDir>/__mocks__/@react-native-firebase/auth.js',
    '^components/(.*)$': '<rootDir>/components/$1',
    '^app/(.*)$': '<rootDir>/app/$1',
  },
  setupFiles: ['./jest.setup.js'],
  collectCoverage: true,  // Enables code coverage collection
  coverageDirectory: 'coverage',  // Where the coverage report will be saved
  testTimeout: 15000,  // 15-second timeout for slow tests (optional)
};