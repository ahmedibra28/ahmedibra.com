import { useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/index.scss'
// import axios from 'axios'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null
  }, [])

  return <Component {...pageProps} />
}

export default MyApp

// https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCA1qffVjABHXezWLvuTCoFw&fields=items/statistics/subscriberCount&key=AIzaSyAxV8i9XcP5EN0KXkAU9N_KqxfK_F0zAjU

// export async function getServerSideProps() {
//   try {
//     const { data } = await axios.get(
//       `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.CHANNEL_ID}&fields=items/statistics/subscriberCount&key=${process.env.GOOGLE_API_KEY}`
//     )

//     return {
//       props: {
//         subscribers: data,
//       },
//     }
//   } catch (error: any) {
//     return {
//       props: {
//         error: error.message,
//       },
//     }
//   }
// }
