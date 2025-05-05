const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

//added for fixing issues with expo sdk 53. can hopefully remove soon
config.resolver.sourceExts.push('cjs');
config.resolver.unstable_enablePackageExports = false;

// added for nativewind support, may be able to remove in the future
module.exports = withNativeWind(config, { input: './global.css' });
