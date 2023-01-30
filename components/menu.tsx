import { motion } from 'framer-motion'
import {GiForkKnifeSpoon} from 'react-icons/gi'
import React from 'react'
import miniimg from '../public/mini-pack-img.svg'
import megaimg from '../public/mega-pack-img.svg'
import jumboimg from '../public/jumbo-pack-img.svg'
import Image from 'next/image'

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
        <h3 className='text-2xl sm:text-3xl font-bold pb-20'>Menu</h3>
        <GiForkKnifeSpoon size={25} className='text-[#D8A61F] mt-2'/>
      </div>

      <div className='w-[80%] mx-auto grid grid-cols-1 gap-8 sm:grid-cols-3 pb-10'>

        <div className=' bg-white rounded-lg flex flex-col justify-center items-center cursor-pointer'>
         <Image  alt='menu' width={150} height={10} src={miniimg} className='pt-4'></Image>
          <h3>Mini Pack</h3>
          <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, accusamus reiciendis enim vero dolores veniam tenetur.</p>
        </div>

        <div className=' bg-white rounded-lg flex flex-col justify-center items-center cursor-pointer'>
         <Image alt='menu' width={150} height={10} src={megaimg} className='pt-4'></Image>
          <h3>Mini Pack</h3>
          <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, accusamus reiciendis enim vero dolores veniam tenetur.</p>
        </div>

        <div  className=' bg-white rounded-lg flex flex-col justify-center items-center cursor-pointer'>
         <Image alt='menu' width={150} height={10} src={jumboimg} className='pt-4'></Image>
          <h3>Mini Pack</h3>
          <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, accusamus reiciendis enim vero dolores veniam tenetur.</p>
        </div>

      </div>

    </motion.div>
  )
}