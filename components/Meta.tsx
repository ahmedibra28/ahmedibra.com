import Head from 'next/head'
import { useRouter } from 'next/router'

interface Props {
  title?: string
  description?: string
  author?: string
  image?: string
}

const Meta = (props: Props) => {
  const { pathname } = useRouter()

  const title = 'Full-Stack Developer In Somalia | Ahmed Ibrahim'
  const description = `I'm a Full Stack Developer with 9+ years of experience in designing and developing user interfaces, testing, debugging, and training staff within modern technologies. Proven ability in optimizing web functionalities that improve data retrieval and workflow efficiencies.
  `
  const image = 'https://www.ahmedibra.com/logo.png'
  const url = `https://www.ahmedibra.com${pathname}`
  const author = 'Ahmed Ibrahim'

  return (
    <Head>
      <meta charSet='utf-8' />

      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000000' />
      <link rel='canonical' href={url} />

      <title>{props?.title ? props?.title : title}</title>
      <meta
        name='title'
        content={props?.title ? props?.title : title}
        key='title'
      />
      <meta
        name='description'
        content={props?.description ? props?.description : description}
        key='description'
      />

      <meta
        name='keywords'
        content='ahmedibra, ahmedibra.com, https://ahmedibra.com, https://github.com/ahmedibradotcom, github.com/ahmedibradotcom, next.js, next-ts, typescript, next-typescript, boilerplate, next-ts-boilerplate, next-boilerplate, next.js-boilerplate Web & Mobile Development Blog, nextjs.13, Web, Mobile, Web Mobile, App, Development Company, App Development, Web Development, Mobile Application Development Company, Mobile Application Development, agency, Design Agency, Digital Age, Digital Agency, Web Design Development Agency, Web Design, eCommerce, Websites, Website, Ahmed, Web Som, ahmedibra.com, ahmedibra, ahmed ibrahim, ahmed ibrahim samow, ahmaat19, dev, Design, Web Solutions, Empowering Business Growth With The Power Of Web Development, Business Growth, Business, Growth, Software Development Company, Web Development Company, Custom Software Development, custom software development company, Custom Web, Custom Design, Somalia, Web Design Company in Somalia, Somali Web Design, Somali Web Development, SEO Optimization, Marketing, Branding, E-commerce, Development'
      />
      <meta name='author' content={props?.author ? props?.author : author} />
      <meta name='publisher' content={props?.author ? props?.author : author} />
      <meta name='robots' content='index, follow' />
      <link rel='icon' href='/favicon.png' />
      <link
        rel='shortcut icon'
        type='image/vnd.microsoft.icon'
        href='/logo.png'
      />
      <link rel='apple-touch-icon' type='image/png' href='/logo.png' />
      <link
        rel='apple-touch-icon'
        type='image/png'
        sizes='72x72'
        href='/logo.png'
      />
      <link
        rel='apple-touch-icon'
        type='image/png'
        sizes='114x114'
        href='/logo.png'
      />
      <link rel='icon' type='image/png' href='/logo.png' />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta
        itemProp='name'
        content={props?.title ? props?.title : title}
        key='g:title'
      />
      <meta
        itemProp='description'
        content={props?.description ? props?.description : description}
        key='g:description'
      />
      <meta
        itemProp='image'
        content={props?.image ? `https://ahmedibra.com${props?.image}` : image}
        key='g:image'
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property='og:url' content={url} key='og:url' />
      <meta property='og:type' content='website' />
      <meta
        property='og:title'
        content={props?.title ? props?.title : title}
        key='og:title'
      />
      <meta
        property='og:description'
        content={props?.description ? props?.description : description}
        key='og:description'
      />
      <meta
        property='og:image'
        content={props?.image ? `https://ahmedibra.com${props?.image}` : image}
        key='og:image'
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:title'
        content={props?.title ? props?.title : title}
        key='twitter:title'
      />
      <meta
        name='twitter:description'
        content={props?.description ? props?.description : description}
        key='twitter:description'
      />
      <meta
        name='twitter:image'
        content={props?.image ? `https://ahmedibra.com${props?.image}` : image}
        key='twitter:image'
      />
    </Head>
  )
}
export default Meta
