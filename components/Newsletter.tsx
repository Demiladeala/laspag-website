import { motion } from 'framer-motion'
import React from 'react'
import { SiFoodpanda } from 'react-icons/si'

type Props = {}

export default function Newsletter({}: Props) {
  return (
    <div className='newsletter-outer sm:py-20 mt-20 font-normal'>
      <motion.div
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.5, delay:0.5}}
      viewport={{once:true}} 
      className="newsletter-inner sm:w-4/6 w-[90%] mx-auto rounded-3xl bg-white text-center sm:space-y-10 space-y-3 sm:p-14 py-10 px-5 mt-10 sm:mt-0 relative shadow-card">
        <div className=' w-24 h-12 absolute top-[-30px] right-0'>
          <SiFoodpanda className='w-full' size={50}/>
        </div>
        <h3 className='sm:text-3xl font-bold border-l-[#facc15] text-lg'>SUBSCRIBE TO OUR NEWSLETTER</h3>
        <p className='sm:text-xl'>Subscribe to our newsletter to get updates on our products</p>

        <form action="" className='w-5/6 mx-auto sm:h-16 h-10 flex flex-between border-yellow-400 rounded-3xl border-2 overflow-hidden'>
          <input type="email" name="newsletter" id="newsletter" required className='sm:text-xl text-sm h-full w-full bg-[transparent] outline-none border-none sm:pl-5 pl-2 text-black' placeholder='Enter Email Address'/>
          <button type="submit" className='news-btn h-full w-2/6 bg-[#facc15] sm:rounded-2xl sm:text-xl text-[12px] sm:px-0 px-2text-white hover:bg-[#facc15]/80 relative left-0 text-white'>Subscribe</button>
        </form>
        <h6 className='!py-0 !my-2 text-left w-5/6 mx-auto pl-5 sm:text-sm text-[12px]'>Don’t worry you’ll not be spammed</h6>
      </motion.div>
    </div>
  )
}