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
  return `<?xml version="1.0"?>
  <users>
	  <user>6B35D6308C075858F203A7E1C28C7CC9</user>
  </users>`
}
