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
        <h3 className='text-2xl sm:text-3xl font-bold pb-20 pt-10'>Menu</h3>
        <GiForkKnifeSpoon size={25} className='text-[#D8A61F] mt-12 animate-bounce duration-75'/>
      </div>

      <div className='w-[80%] mx-auto grid grid-cols-1 gap-8 sm:grid-cols-3 pb-10'>

        <div className=' bg-white rounded-2xl flex flex-col justify-center items-center cursor-pointer'>
         <Image  alt='menu' width={150} height={10} src={miniimg} className='pt-4'></Image>
          <h3 className='font-bold py-4'>Mini Package</h3>
          <p className='text-center py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, accusamus reiciendis enim vero dolores veniam tenetur.</p>
          <button className='bg-[#D8A61F] px-2 py-1 rounded-2xl text-white my-4 shadow-gray-400 shadow-md hover:bg-transparent hover:border-black hover:text-gray-700 transition ease-in-out duration-300 font-sansation'>Place Order</button>
        </div>

        <div className=' bg-white rounded-2xl flex flex-col justify-center items-center cursor-pointer'>
         <Image alt='menu' width={150} height={10} src={megaimg} className='pt-4'></Image>
          <h3 className='font-bold py-4'>Mega Package</h3>
          <p className='text-center py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, accusamus reiciendis enim vero dolores veniam tenetur.</p>
          <button className='bg-[#D8A61F] px-2 py-1 rounded-2xl text-white my-4 shadow-gray-400 shadow-md hover:bg-transparent hover:border-black hover:text-gray-700 transition ease-in-out duration-300 font-sansation'>Place Order</button>
        </div>

        <div  className=' bg-white rounded-2xl flex flex-col justify-center items-center cursor-pointer'>
         <Image alt='menu' width={150} height={10} src={jumboimg} className='pt-4'></Image>
          <h3 className='font-bold py-4'>Jumbo Package</h3>
          <p className='text-center py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, accusamus reiciendis enim vero dolores veniam tenetur.</p>
          <button className='bg-[#D8A61F] px-2 py-1 rounded-2xl text-white my-4 shadow-gray-400 shadow-md hover:bg-transparent hover:border-black hover:text-gray-700 transition ease-in-out duration-300 font-sansation'>Place Order</button>
        </div>

      </div>

    </motion.div>
  )
}