import Layout from '../src/components/layout/Layout'
import '../styles/globals.css'
import Head from 'next/head'
import { Montserrat } from '@next/font/google'
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const montserrat = Montserrat()

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
  <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
  <style>{dom.css()}</style>
  </Head>
  <Layout>
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  </Layout>
  </>
  )
}

export default MyApp
