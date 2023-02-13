import { motion } from 'framer-motion'
import heroimg from '../public/mobile-hero-img.svg'
import desktopheroimg from '../public/desktop-hero-img.svg'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Hero({}: Props) {
  return (
    <>
    <motion.div className='h-screen hero '>
      <motion.div
      className='w-full m-auto pt-20 relative flex flex-col sm:flex-row'
      >
        <motion.div
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1,type:'spring',stiffness:200}}
        viewport={{once: true}} 
        className='h-[48%] sm:h-[98%] w-full flex flex-col items-center sm:items-start p-14 sm:p-36 max-[290px]:p-10'>
            <p className='text-7xl sm:text-8xl uppercase font-bold text-center max-[290px]:text-5xl'>Delicacy</p>
            <p className='text-3xl sm:text-4xl sm:pr-5 flex justify-end'>Like never before</p>
            <p className='sm:mr-12 sm:text-4xl text-3xl flex gap-2 py-3 max-[290px]:text-xl max-[290px]:block'><span className='font-bold'>Spaghetti</span> and <span className='font-bold'>Chicken</span></p>
            <div className='flex mx-auto sm:mt-8'>
              <button className='bg-white rounded-xl px-4 py-[2px] sm:px-6 sm:py-[4px] text-lg sm:text-xl text-center hover:bg-white/60'>Place Order</button>
            </div>
        </motion.div>

        <motion.div className='h-[48%] sm:h-[98%] w-full'>
          {/* <Image src={heroimg} alt='hero' className='visible sm:hidden'/>
          <Image src={desktopheroimg} alt='desktop hero' className='hidden sm:flex pt-16'/> */}
        </motion.div>

      </motion.div>
    </motion.div>
    </>
  )
}

/*[#e7ca78]


  initial={{opacity:0}}
  whileInView={{opacity:1}}
  transition={{duration:1}}
  viewport={{once: true}}



  initial={{x:-80+'%'}}
  whileInView={{x:0}}
  transition={{duration:1, type:[0.6,0.01,-0.05,0.95], delay:.2}}
  viewport={{once:true}}


  initial={{y:100, opacity:0}}
  animate={{opacity:1, y:0}}
  transition={{ delay:1, type:'spring', stiffness:120}}















*/