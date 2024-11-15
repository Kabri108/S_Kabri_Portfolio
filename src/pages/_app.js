import SubtleBackground from '@/components/Background';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={`${montserrat.variable} font-mont w-full min-h-screen relative`}>
        {/* Add a background with z-index lower than navbar and footer */}
        <SubtleBackground />
        {/* Navbar with a higher z-index to make sure it's above the background */}
        <Navbar />
        {/* Page content */}
        <Component {...pageProps} />
        {/* Footer with a higher z-index to make sure it's above the background */}
        <Footer />
      </main>
    </>
  );
}
