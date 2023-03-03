import { motion } from 'framer-motion'
import React from 'react'
import { GiChickenOven } from 'react-icons/gi'
import burgerimg from 'public/menu-burger.png'
import { SiFoodpanda } from 'react-icons/si'
import Link from 'next/link'
import Image from 'next/image'
import desktopHeroImg from 'public/desktop_hero-img.png'

type Props = {}

export default function Hero({}: Props) {
  return (
    <>
    <div className='h-screen w-full m-auto z-[40] relative flex flex-col md:flex-row'>

      {/* TEXT DESIGN FOR SCREENS */}
      <motion.div 
      className='basis-[36%] md:basis-[58%] flex items-center justify-center pt-24'>
        <div className=' w-[95%] mx-auto'>
          <h2 className='font-bold sm:text-left text-center text-4xl sm:text-5xl uppercase p-2'>Delicacy like never before</h2>
          <p className='text-[#718096] text-left sm:text-left p-2 md:w-[75%]'>Stir-fry spaghetti, Burgers, Fries and Creamy ice - your one-stop-shop for amazing experience</p>
          <Link href='/#menu'><button className='bg-yellow-400 py-3 mt-2 rounded-lg px-8 hover:bg-yellow-400/80 hidden md:flex'>Place Order <GiChickenOven size={20} className='ml-2'/></button></Link>
          {/* <button className='border-black border p-2 mt-2 rounded-lg m-auto'>Get spaghetti</button> */}
        </div>
      </motion.div>

      {/* IMAGE DESIGN SMALL SCREENS */}
      <motion.div className='flex flex-col md:hidden basis-[50%] pt-4 justify-center bg-[#facc15] w-[85%] mx-auto mt-12 rounded-[30px] relative'>
        <div className=' w-full absolute top-[-70px] flex  justify-center'>
          <Image src={burgerimg} alt='' width={200} className='animate-pulse'></Image>
        </div>
        <div className='flex flex-col'>
        <p className='md:hidden flex justify-center text-center text-2xl text-white mx-auto pt-32'>Spaghetti, Burgers, Ice cream</p>
        <p className='p-6 text-gray-50'>Indulge in the taste of our premium, handcrafted spaghetti - made with only the finest ingredients and authentic recipes.</p>

        <div className='flex justify-center relative top-4'>
        <Link href='/#menu'><button className='bg-white py-3 mt-2 rounded-lg px-5 hover:bg-white/80 flex md:hidden relative bottom-0 shadow-card uppercase'>Place Order </button></Link>
        </div>

        </div>
      </motion.div>

      {/* IMAGE DESIGN MEDIUM AND LARGE SCREEN */}
      <motion.div className='hidden md:flex basis-[53%] wavy-bg relative'>
      <div className="custom-shape-divider-top-1677787782">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
      </motion.div>

    </div>
    </>
  )
}
/*  initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1,type:'spring',stiffness:200}}
        viewport={{once: true}}  */