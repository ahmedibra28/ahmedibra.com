interface Props {
  title?: string
  description?: string
  author?: string
  image?: string
  keyword?: string
  asPath?: string
}

const Meta = ({
  title = 'Full-Stack Developer In Somalia | Ahmed Ibrahim',
  description = `I'm a Full Stack Developer with 5+ years of experience in designing and developing user interfaces, testing, debugging, and training staff within modern technologies. Proven ability in optimizing web and mobile functionalities that improve data retrieval and workflow efficiencies.`,
  image: outsideImage,
  asPath = '/',
  author = 'Ahmed Ibrahim',
  keyword = 'Ahmed',
}: Props) => {
  const url = `https://ahmedibra.com${asPath}`
  const image = outsideImage
    ? `https://ahmedibra.com${outsideImage}`
    : `https://github.com/ahmedibra28.png`

  return {
    title: title ? title : title,
    description: description ? description : description,
    manifest: '/manifest.json',
    icons: { apple: '/icon-512x512.png' },
    image: image,

    metadataBase: new URL('https://ahmedibra.com'),
    alternates: {
      canonical: url,
      languages: {
        'en-US': '/en-US',
      },
    },
    openGraph: {
      type: 'website',
      images: image,
      title: title ? title : title,
      description: description ? description : description,
    },
    keywords: [
      `${keyword} Ahmed Ibrahim, Ahmed Ibrahim Samow, Next.js, Web & Mobile Development, App Development, Design Agency, Web Design, eCommerce, Websites, Web Solutions, Business Growth, Software Development, Custom Software Development, Custom Web Design, Somalia, Somali Web Design, Somali Web Development, SEO Optimization, Marketing, Branding, USSD, EVC Plus, Web Development, scalable web applications, responsive web applications, Mobile App Development, cross-platform mobile applications, Full Stack Development, end-to-end web solutions, front-end and back-end development, API Development, robust APIs, different technologies, Database Management, SQL, NoSQL, PostgreSQL, MongoDB, optimize databases, Server Configuration and Deployment, server setup, app deployment, Docker, AWS, DigitalOcean, UI/UX Design and Development, visually appealing UI/UX, interactive experiences, E-commerce Solutions, secure e-commerce platforms, scalable e-commerce, Custom Software Development, tailor-made software solutions, specific business requirements, Code Review and Refactoring, code review, code refactoring, quality improvement`,
    ],
    authors: [
      {
        name: author ? author : author,
        url: 'https://ahmedibra.com',
      },
    ],
    publisher: author ? author : author,
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        'index': true,
        'follow': true,
        'noimageindex': false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icon: '/logo.png',
    twitter: {
      card: 'summary_large_image',
      title: title ? title : title,
      description: description ? description : description,
      // siteId: '1467726470533754880',
      // creatorId: '1467726470533754880',
      creator: `@${author ? author : author}`,
      images: {
        url: image,
        alt: title ? title : title,
      },
      app: {
        name: 'twitter_app',
        id: {
          iphone: 'twitter_app://iphone',
          ipad: 'twitter_app://ipad',
          googleplay: 'twitter_app://googleplay',
        },
        url: {
          iphone: image,
          ipad: image,
        },
      },
    },
    appleWebApp: {
      title: title ? title : title,
      statusBarStyle: 'black-translucent',
      startupImage: [
        '/logo.png',
        {
          url: '/logo.png',
          media: '(device-width: 768px) and (device-height: 1024px)',
        },
      ],
    },
    verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
      other: {
        me: ['info@ahmedibra.com', 'http://ahmedibra.com'],
      },
    },
  }
}
export default Meta
