const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = require('../next.config');

module.exports = withBundleAnalyzer({
  ...nextConfig,
  webpack(config, { isServer }) {
    // Only run the analyzer on the client during builds
    if (process.env.ANALYZE && !isServer) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: './analyze/client.html',
        })
      );
    }

    return config;
  },
});
