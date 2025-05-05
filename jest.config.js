module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    'node_modules/(?!(expo(nent)?|@expo(nent)?|react-native|@react-native|@react-navigation|nativewind|expo-modules-core)/)',
  ],
};