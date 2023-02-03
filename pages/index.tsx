import { useState } from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import Menu from '../components/menu'
import Head from 'next/head'
import AboutUs from '@/components/aboutUs'
import Newsletter from '@/components/newsletter'
import Contact from '@/components/contact'
import Banner from '@/components/banner'
import Footer from '@/components/footer'


export default function Home() {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }



  return (
    <>
      <Head>
        <title>La-Spag</title>
        <meta name="La Spag" content="Order your spaghetti on the La Spag Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={`nav? 'fixed': 'font-montserrat scroll-smooth bg-[#fbfbfb] z-49'`}>
      
      <section id='header'>
       <Header/>
      </section>

      <section id='hero'>
        <Hero/>
      </section>

      <section id='menu'>
        <Menu/>
      </section>

      <section id='about'>
        <AboutUs/>
      </section>

      <section id='newsletter'>
        <Newsletter/>
      </section>

      <section id='contact'>
        <Contact/>
      </section>

      <section id='banner'>
        <Banner/>
      </section>
      

      <section id='footer'>
        <Footer/>
      </section>
      </div>
    </>
  )
}
