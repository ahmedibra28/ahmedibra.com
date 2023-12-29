const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    reactStrictMode: true,
    experimental: {},
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
        ],
    },
}

module.exports = withMDX(nextConfig)