import Meta from '@/components/Meta'
import './globals.css'
import { Roboto } from 'next/font/google'
import Nav from '@/components/Nav'
import { Viewport } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata = {
  ...Meta({}),
}

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
      </head>
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
          <Nav />
          {children}
          <Analytics />
        </div>

        <div className='flex flex-row h-screen fixed top-0 left-0 right-0 -z-50'>
          <div className='w-1/2'></div>
          <div className='w-1/2 bg-my-primarys'></div>
        </div>
      </body>
    </html>
  )
}
