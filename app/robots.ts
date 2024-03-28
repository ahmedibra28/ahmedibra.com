import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/coming-soon',
          '/?ref=https://githubhelp.com',
          '/manifest.json',
          '/en-US',
          '/blog',
          '/blog/next-js-vs-react-the-2022-comparison',
          'https://blog.ahmedibra.com/',
          'http://ahmedibra.com/',
          // Temporary disallowed
          'https://ahmedibra.com/blog/my-journey-towards-becoming-a-full-stack-developer-a-guide-for-aspiring-developers',
          'https://ahmedibra.com/blog/learning-golang-as-a-complementary-language-for-web-development-my-experience-as-a-full-stack-developer',
          'https://ahmedibra.com/_next/static/media/627622453ef56b0d-s.p.woff2',
          'https://ahmedibra.com/_next/static/media/8db47a8bf03b7d2f-s.p.woff2',
          'https://ahmedibra.com/_next/static/media/02205c9944024f15-s.p.woff2',
          'https://ahmedibra.com/_next/static/media/7d8c9b0ca4a64a5a-s.p.woff2',
          'https://ahmedibra.com/cdn-cgi/l/email-protection',
          'https://ahmedibra.com/favicon.ico',
          'https://ahmedibra.com/_next/static/media/0e4fe491bf84089c-s.p.woff2',
          'https://ahmedibra.com/blog/how-to-stay-up-to-date-with-web-design-trends',
          'https://ahmedibra.com/about',
        ],
      },
    ],
    sitemap: `https://ahmedibra.com/sitemap.xml`,
  }
}
