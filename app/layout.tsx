import './globals.css'
import { Roboto } from 'next/font/google'
import Nav from '@/components/Nav'
import { Viewport } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import meta from '@/lib/meta'
import Providers from '@/providers/providers'
import { CSPostHogProvider } from './providers'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata = meta({
  title: 'Full-Stack Developer In Somalia | Ahmed Ibrahim',
  description: `I'm a Full Stack Developer with 6+ years of experience in designing and developing user interfaces, testing, debugging, and training staff within modern technologies. Proven ability in optimizing web and mobile functionalities that improve data retrieval and workflow efficiencies.`,
  openGraphImage: 'https://github.com/ahmedibra28.png',
})

export const viewport: Viewport = {
  themeColor: 'white',
  initialScale: 1,
  maximumScale: 5,
  width: 'device-width',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_M_ID}`}
          strategy='lazyOnload'
        />

        {process.env.NODE_ENV === 'production' && (
          <script
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5359776387436359'
            crossOrigin='anonymous'
          ></script>
        )}

        <Script id='google-analytics' strategy='lazyOnload'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_M_ID}');
        `}
        </Script>

        <Script id='google-tag-manager' strategy='afterInteractive'>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM}');`}
        </Script>

        <link rel='icon' href='https://github.com/ahmedibra28.png' />
        <meta name='google-adsense-account' content='ca-pub-5359776387436359' />
      </head>
      <CSPostHogProvider>
        <body className={`${roboto.className}`}>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe
                      src='https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM}'
                      height='0'
                      width='0'
                      style='display:none;visibility:hidden'
                    />`,
            }}
          />
          <div>
            <Providers>
              <Nav />
              {children}
            </Providers>
            <Analytics />
          </div>
        </body>
      </CSPostHogProvider>
    </html>
  )
}
