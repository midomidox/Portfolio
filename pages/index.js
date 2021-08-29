import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'




export default function Home() {


  
  return (

    
    <Layout home>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
      </Head>
    </Layout>

  )
}