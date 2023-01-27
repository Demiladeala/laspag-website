import { motion } from 'framer-motion'
import heroimg from '../public/mobile-hero-img.svg'
import desktopheroimg from '../public/desktop-hero-img.svg'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Hero({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    viewport={{once: true}}
    className='h-screen hero-bg relative justify-evenly max-w-full'>
      <div className='flex h-screen w-full items-center  text-white'>

      <motion.div 
      initial={{x:-80+'%'}}
      whileInView={{x:0}}
      transition={{duration:1, type:[0.6,0.01,-0.05,0.95], delay:.2}}
      viewport={{once:true}}
      className='w-full flex flex-col justify-start px-4 pt-40 md:px-20 md:mt-36 md:pt-0'
      >
        <h1 className='font-bold text-4xl font-montserrat md:text-8xl'>DELICACY</h1>
        <p className=' font-seaweed text-3xl md:text-5xl ml-6 md:ml-28'>Like never before</p>
        <p className='py-4 md:text-4xl'><span className='font-bold'>Spaghetti</span> and <span className='font-bold'>Chicken</span></p>
        <motion.div 
        initial={{y:100, opacity:0}}
        animate={{opacity:1, y:0}}
        transition={{ delay:1, type:'spring', stiffness:120}}
        className='relative flex flex-row pt-8 md:mt-16 md:mx-40 cursor-pointer'>
        <button className='text-black bg-gray-100 md:text-base px-4 py-1 mr-4 rounded-2xl shadow-xl shadow-[rgba(0, 0, 0, 0.25)] cursor-pointer'>Login</button>
        <button className='text-black bg-gray-100 md:text-base px-4 py-1 rounded-2xl shadow-xl shadow-[rgba(0, 0, 0, 0.25)]  cursor-pointer'>Sign up</button>
        </motion.div>
      </motion.div>

        <div className='border-white absolute right-0 '>
          <Image alt='hero' src={heroimg} className='w-[500px]  visible md:hidden animate-pulse duration-1000'></Image>
          <Image alt='desktop hero' src={desktopheroimg} className='w-[1000px] hidden md:flex md:animate-pulse md:duration-1000'></Image>
        </div>

      </div>
    </motion.div>
  )
}

/*[#e7ca78]  */