import { motion } from 'framer-motion'
import {GiForkKnifeSpoon} from 'react-icons/gi'
import React from 'react'
import miniimg from '../public/mini-pack-img.svg'
import megaimg from '../public/mega-pack-img.svg'
import jumboimg from '../public/jumbo-pack-img.svg'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function Menu({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    viewport={{once: true}}
    className='pb-20 relative justify-evenly max-w-full'>

      <div className='flex pt-[70px] justify-center'>
        <h3 className='text-2xl sm:text-3xl font-bold pb-20 pt-10 uppercase'>Menu</h3>
        <GiForkKnifeSpoon size={25} className='text-[#D8A61F] mt-12 animate-bounce duration-75'/>
      </div>

      <motion.div
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:1, delay:0.5}}
      viewport={{once:true}}
      className='w-[80%] mx-auto grid grid-cols-1 gap-8 md:grid-cols-2'>

        <div className=' bg-white rounded-3xl flex flex-col justify-center items-center cursor-pointer p-10 hover:scale-110'>
         <Image  alt='menu' width={150} height={10} src={miniimg} className='pt-4 110'></Image>
         <h3 className='font-bold text-lg pt-3 sm:text-2xl'>STIR-FRY SPAGHETTI</h3>
          {/* <h3 className='font-bold py-4 uppercase'>Mini Package - ₦1200</h3>
          <p className='text-center pb-2'>Stir Fry Spaghetti, Diced Sausage and Chicken.</p>
          <button className='bg-[#D8A61F] px-2 py-1 rounded-xl text-white my-4 shadow-gray-400 shadow-md hover:bg-transparent hover:border-black hover:text-gray-700 transition ease-in-out duration-300 font-sansation border-none'>Add to Cart</button> */}
        </div>

        <div className=' bg-white rounded-3xl flex flex-col justify-center items-center cursor-pointer p-10 hover:scale-110'>
         <Image  alt='menu' width={150} height={10} src={miniimg} className='pt-4 110'></Image>
         <h3 className='font-bold text-lg pt-3 sm:text-2xl'>TC BURGER</h3>
          {/* <h3 className='font-bold py-4 uppercase'>Mini Package - ₦1200</h3>
          <p className='text-center pb-2'>Stir Fry Spaghetti, Diced Sausage and Chicken.</p>
          <button className='bg-[#D8A61F] px-2 py-1 rounded-xl text-white my-4 shadow-gray-400 shadow-md hover:bg-transparent hover:border-black hover:text-gray-700 transition ease-in-out duration-300 font-sansation border-none'>Add to Cart</button> */}
        </div>

        {/* <div  className=' bg-white rounded-3xl flex flex-col justify-center items-center cursor-pointer px-5 py-10'>
         <Image alt='menu' width={150} height={10} src={jumboimg} className='pt-4'></Image>
          <h3 className='font-bold py-4 uppercase'>Jumbo Package - ₦2500</h3>
          <p className='text-center pb-2'>Stir Fry Spaghetti, Diced Sausage, Extra Sausage, Plantain, Bottled Water and Chicken(2).</p>
          <button className='bg-[#D8A61F] px-2 py-1 rounded-xl text-white my-4 shadow-gray-400 shadow-md hover:bg-transparent hover:border-black hover:text-gray-700 transition ease-in-out duration-300 font-sansation border-none'>Add to Cart</button>
        </div> */}

      </motion.div>

      {/* <motion.div className='bg-black/70 w-full h-screen fixed bottom-0 z-50 sm:hidden'>
        <motion.div className='w-full h-screen fixed bottom-0 rounded-t-3xl z-50'>
          
        </motion.div>
        <motion.div className='bg-white w-full h-[400px] fixed bottom-0 rounded-t-3xl z-50 flex justify-center'>
        <div className='bg-gray-300/70 rounded-lg w-40 h-1 relative bottom-2 flex'></div>
        </motion.div>
      </motion.div> */}

    </motion.div>
  )
}