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
      { protocol: 'https', hostname: 'pub-0644e55b2b3c44eaa5275d507f491d9d.r2.dev' },
    ],
  },
}

module.exports = withContentlayer(nextConfig)
