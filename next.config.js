const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    reactStrictMode: true,
    experimental: {},
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

module.exports = withMDX(nextConfig)