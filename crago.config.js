const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.fallback = {
        path: require.resolve("path-browserify"),
        fs: false,
        crypto: false,
        stream: false,
      };
      return webpackConfig;
    },
  },
};
