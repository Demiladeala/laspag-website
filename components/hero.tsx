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
      className='w-full m-auto pt-20 relative h-full flex flex-col sm:flex-row'
      >
        <motion.div className='h-[48%] sm:h-[98%] w-full'>

        </motion.div>

        <motion.div className='h-[48%] sm:h-[98%] w-full'>
          <Image src={heroimg} alt='hero' className='visible sm:hidden'/>
          <Image src={desktopheroimg} alt='desktop hero' className='hidden sm:flex pt-16'/>
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