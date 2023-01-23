import { motion } from 'framer-motion'
import heroImg from '../public/mobile-hero-img.svg'
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
    className='h-screen relative justify-evenly max-w-full bg-gray-300/5'>
      <div className='flex flex-col gap-10 sm:flex-row h-screen bg-[#edcf7e]/5 w-full mx-auto p-4 space-y-4 items-center justify-center'>

        <div className='mt-28 flex flex-col items-center justify-center text-center '>
          <h1 className=' font-bold w-[95%]  text-4xl sm:text-5xl  flex mx-auto text-gray-600 '>Delicacy like never before</h1>
          <p className='text-base w-[95%]  mx-auto text-gray-500'>Spaghetti and Turkey that you can't resist</p>
          <div className=' mx-auto mt-8 ml-4 w-full'>
            <button className=' bg-[#D8A61F] max-[350px]:px-4 px-7 py-1 rounded-xl font-bold text-white hover:transition-all duration-1000'>Login</button>
            <button className='border bg-[#D8A61F] ml-4 bg-opacity-10 max-[350px]:px-4 px-7 py-1 rounded-xl font-bold text-black hover:border hover:bg-opacity-10 hover:border-[#D8A61F] hover:text-gray-700 hover:transition-all duration-1000'>Sign up</button>
          </div>
        </div>

        <div className='flex justify-center'>
          <Image alt='hero' src={heroImg} className='w-60 md:w-[400px] md:animate-pulse md:duration-1000'></Image>
        </div>

        <div className='hidden md:flex w-[50%] h-[87vh] right-0 bottom-0 absolute bg-[#edcf7e]/40 polygon overflow-x-hidden'>

        </div>
         
      </div>
    </motion.div>
  )
}

/*[#e7ca78]  */