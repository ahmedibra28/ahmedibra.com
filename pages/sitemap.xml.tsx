import { GetServerSideProps } from 'next'

export default function Sitemap() {
  return null
}

export const getServerSideProps: GetServerSideProps<{}> = async (ctx) => {
  const xml = await generateSitemap()

  ctx.res.setHeader('Content-Type', 'text/xml')
  ctx.res.write(xml)
  ctx.res.end()

  return {
    props: {},
  }
}

async function generateSitemap(): Promise<string> {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://ahmedibra.com/</loc>
      <lastmod>${new Date('2023-04-06 10:10:01').toISOString()}</lastmod>
    </url>
    <url>
      <loc>https://ahmedibra.com/about</loc>
     <lastmod>${new Date('2023-04-07 10:23:22').toISOString()}</lastmod>
    </url>
    <url>
      <loc>https://ahmedibra.com/blog</loc>
     <lastmod>${new Date('2023-04-08 10:43:33').toISOString()}</lastmod>
    </url>
    <url>
      <loc>https://ahmedibra.com/blog/my-journey-towards-becoming-a-full-stack-developer-a-guide-for-aspiring-developers</loc>
     <lastmod>${new Date('2023-04-09 10:14:22').toISOString()}</lastmod>
    </url>
    <url>
      <loc>https://ahmedibra.com/blog/how-to-stay-up-to-date-with-web-design-trends</loc>
     <lastmod>${new Date('2023-04-014 13:49:00').toISOString()}</lastmod>
    </url>
  </urlset>`
}
