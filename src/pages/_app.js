import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'

const montserrat=Montserrat({
  subsets:["latin"],
  variable:'--font-mont',

})

export default function App({ Component, pageProps }) {
  return (
   <>
   {/* Here i add this head because i show it in every page  */}
   <Head>
    <meta  name='viewport' content='width=device-width, initial-scale=1'/>
   </Head>
    <main className={`${montserrat.variable} font-mont bg-gradient-to-r from-orange-300 to-pink-700 w-full min-h-screen `}>
      <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </main>
   </>
  )
}
