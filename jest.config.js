module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    'node_modules/(?!(expo(nent)?|@expo(nent)?|react-native|@react-native|@react-navigation|nativewind|expo-modules-core|@react-native-firebase)/)',
  ],
  collectCoverage: true,  // Enables code coverage collection
  coverageDirectory: 'coverage',  // Where the coverage report will be saved
  testTimeout: 15000,  // 15-second timeout for slow tests (optional)
  moduleNameMapper: {
    '\\.css$': 'jest-transform-stub',  // Mock CSS imports
    '^components/(.*)$': '<rootDir>/components/$1',  // Resolve components directory
  },
};