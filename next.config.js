/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'ahmedibra.com',
      'colorlib.com',
      'i.ytimg.com',
      'ithemes.com',
      'github.com',
      'images.pexels.com',
    ],
  },
}

module.exports = nextConfig
