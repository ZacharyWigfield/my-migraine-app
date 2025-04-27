const { getDefaultConfig } = require('@expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
    preset: 'react-native',
    transformIgnorePatterns: [
      'node_modules/(?!(@react-native|react-native|react-native-gesture-handler|react-native-reanimated|@react-navigation))',
    ],
    setupFiles: ['./jest.setup.js'],
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|ts|tsx)$': 'babel-jest',
    },
    // moduleNameMapper: {
    //   '^react-native$': 'react-native-web',  // For some apps, this helps resolve react-native issues
    // },
  };