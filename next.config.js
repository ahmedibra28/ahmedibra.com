/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.websom.dev', 'colorlib.com'],
  },
}

module.exports = nextConfig
