/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'okosit-web.vercel.app',
      },
    ],
  },
}

module.exports = nextConfig
