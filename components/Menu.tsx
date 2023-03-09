import { motion } from 'framer-motion'
import { BsArrowRightShort } from 'react-icons/bs'
import React from 'react';
import spagimg from '../public/menu-spag.jpg'
import burgerimg from '../public/burger-menu.jpg'
import Image from 'next/image'
import Link from 'next/link'


type Props = {}

export default function Menu({}: Props) {
  return (
    <motion.div
    className='pb-20 relative justify-evenly max-w-full'>

      <div className='flex pt-[70px] justify-center'>
        <h3 className='text-2xl sm:text-3xl font-bold pb-20 pt-10 uppercase font-poppins'>Menu</h3>
      </div>

      <motion.div
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.5, delay:0.5}}
      viewport={{once:true}}
      className='w-[80%] mx-auto mt-8 sm:mt-28 grid grid-cols-1 gap-28 md:gap-20 md:grid-cols-2'>

          <Link href='/menu/spaghettiMenu'>
            <div className=' rounded-3xl flex flex-col justify-center items-center cursor-pointer relative shadow-card hover:transform hover:scale-110'>
              <Image src={spagimg} alt='' className='w-full h-full object-cover rounded-3xl '></Image>
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 rounded-3xl  flex justify-center items-center'>
                <div className='absolute flex flex-col items-center justify-center text-center'>
                  <h1 className='text-2xl font-bold text-white'>Stir Fry Spaghetti</h1>
                  <p className='text-lg text-white flex flex-row'> Order Now <BsArrowRightShort className='mt-[2px]'size={25} /></p>
                </div>
              </div>
              
            </div>
          </Link>
      

          <Link href='/menu/burgerMenu'>
            <div className=' rounded-3xl flex flex-col justify-center items-center cursor-pointer relative shadow-card hover:transform hover:scale-110'>
              <Image src={burgerimg} alt='' className='w-full h-full object-cover rounded-3xl'></Image>
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 rounded-3xl  flex justify-center items-center'>
                <div className='absolute flex flex-col items-center justify-center text-center'>
                  <h1 className='text-2xl font-bold text-white'>TC Burger, Chicken and Chips</h1>
                  <p className='text-lg text-white flex flex-row'> Order Now <BsArrowRightShort className='mt-[2px]'size={25} /></p>
                </div>
              </div>
            </div>
          </Link>
          

      </motion.div>

    </motion.div>
  )
}