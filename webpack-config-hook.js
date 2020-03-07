const baseFileName = 'sandbox-elements';

/**
 * Intercepting webpack config object
 */
exports.default = (config) => {
  if (config.mode === 'production') {
    config.output = {
      ...config.output,
      filename: `${baseFileName}.[name].[hash].js`,
    };
  } else {
    config.output = {
      ...config.output,
      filename: `${baseFileName}.[name].js`,
    };
  }
  return config;
};
