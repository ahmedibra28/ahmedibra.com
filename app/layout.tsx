import Meta from '@/components/Meta'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Nav from '@/components/Nav'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata = {
  ...Meta({}),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${roboto.className}`}>
        <div>
          <Nav />
          {children}
        </div>

        <div className='flex flex-row h-screen fixed top-0 left-0 right-0 -z-50'>
          <div className='w-1/2'></div>
          <div className='w-1/2 bg-primary'></div>
        </div>
      </body>
    </html>
  )
}
