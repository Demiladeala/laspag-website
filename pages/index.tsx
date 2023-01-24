import Header from '@/components/header'
import Hero from '@/components/hero'
import Menu from '@/components/menu'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>La-Spag</title>
        <meta name="La Spag" content="Order your spaghetti on the La Spag Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className=' font-montserrat scroll-smooth'>
        
      <section id='header'>
       <Header/>
      </section>

      <section id='hero'>
        <Hero/>
      </section>

      <section id='menu'>
        <Menu/>
      </section>

      {/* ABOUT */}

      {/* NEWSLETTER */}

      {/* FOOTER */}
      </div>
    </>
  )
}
