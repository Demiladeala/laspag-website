import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import Services from '../components/Services'
import Head from 'next/head'
import AboutUs from '../components/AboutUs'
import Newsletter from '../components/Newsletter'
import Contact from '../components/Contact'



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
      

      <section id='hero'>
       <Hero/>
      </section>

      <section id='services'>
        <Services/>
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

      <section>
        <div className='w-full h-60 sm:hidden'>

        </div>
      </section>
      
      </div>
    </>
  )
}
