/** @type {import('next').NextConfig} */
const webpack = require('webpack');
// Bundle analyzer is disabled
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
//   openAnalyzer: false,
//   analyzerMode: 'static',
//   generateStatsFile: true,
//   statsFilename: './analyze/stats.json',
//   reportFilename: './analyze/report.html',
//   excludeAssets: [/node_modules/],
// });

const nextConfig = {
  reactStrictMode: true,
  // Image optimization settings
  images: {
    unoptimized: true, // Critical for static exports - generates regular <img> tags
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'okosit-web.vercel.app',
      },
    ],
    domains: ['okosit-web.vercel.app'],
    minimumCacheTTL: 86400, // 24 hours
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable modern image formats
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Experimental features
  experimental: {
    // Only include valid experimental features
    scrollRestoration: true,
    // Enable module-level tree shaking for large libraries
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  // Enable React features
  reactStrictMode: true,

  // Enable compression
  compress: true,

  // Enable production browser source maps
  productionBrowserSourceMaps: false,

  // Enable static export for hosting on static servers
  output: 'export',

  // Enable webpack optimizations
  webpack: (config, { isServer, dev }) => {
    // Add file-loader for font files
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[contenthash:8][ext]',
      },
    });

    // Optimize imports (using safer configuration)
    if (config.plugins) {
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /^\.[\\/]locale$/,
          contextRegExp: /moment$/,
        })
      );
    }

    // Let Next.js handle optimization
    if (!isServer && !dev) {
      // Use Next.js built-in optimization
    }

    return config;
  },

  async headers() {
    const assetHeader = {
      source: '/assets/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    };
    return [
      assetHeader,
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
};

// Export the configuration without bundle analyzer
module.exports = nextConfig;
