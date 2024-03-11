import nextMDX from '@next/mdx'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
  },
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
    ],
  },
}

export default withMDX(nextConfig)
