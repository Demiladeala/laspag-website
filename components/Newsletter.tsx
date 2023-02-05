import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function Newsletter({}: Props) {
  return (
    <div className='newsletter-outer sm:py-20 font-normal'>
      <motion.div
      initial={{opacity:0,x:-20}}
      whileInView={{opacity:1,x:0}}
      transition={{duration:1}}
      viewport={{once: true}}  
      className="newsletter-inner sm:w-4/6 w-[90%] mx-auto rounded-3xl bg-white text-center sm:space-y-10 space-y-3 sm:p-14 py-10 px-5 mt-10 sm:mt-0">
        <h3 className='sm:text-3xl font-bold border-l-[#D8A61F] text-lg font-quattrocento'>SUBSCRIBE TO OUR NEWSLETTER</h3>
        <p className='sm:text-xl text-sm font-sans'>Subscribe to our newsletter to get updates on our products</p>

        <form action="" className='w-5/6 mx-auto sm:h-16 h-10 flex flex-between border-[#D8A61F] rounded-3xl border-2 overflow-hidden font-sans'>
          <input type="email" name="newsletter" id="newsletter" required className='sm:text-xl text-sm h-full w-full bg-[transparent] outline-none border-none sm:pl-5 pl-2 text-black font-sans' placeholder='Enter Email Address'/>
          <button type="submit" className='news-btn h-full w-2/6 bg-[#D8A61F] sm:rounded-2xl sm:text-xl text-[12px] sm:px-0 px-2 text-white hover:bg-[#D8A61F]/80 font-sans'>Subscribe</button>
        </form>
        <h6 className='!py-0 !my-2 text-left w-5/6 mx-auto pl-5 sm:text-sm text-[12px]'>Don’t worry you’ll not be spammed</h6>
      </motion.div>
    </div>
  )
}