const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'ahmedibra.com' },
      { protocol: 'https', hostname: 'colorlib.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'ithemes.com' },
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'st3.depositphotos.com' },
      { protocol: 'https', hostname: 'i.ibb.co' },
    ],
  },
}

module.exports = withContentlayer(nextConfig)
