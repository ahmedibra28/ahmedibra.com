/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.websom.dev',
      'colorlib.com',
      'i.ytimg.com',
      'ithemes.com',
      'github.com',
      'images.pexels.com',
    ],
  },
}

module.exports = nextConfig
