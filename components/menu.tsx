import { motion } from 'framer-motion'
import {GiForkKnifeSpoon} from 'react-icons/gi'
import React from 'react'
import miniimg from '../public/mini-pack-img.svg'
import Image from 'next/image'

type Props = {}

export default function Menu({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    viewport={{once: true}}
    className='h-screen relative justify-evenly max-w-full bg-[#F3F3F3]'>

      <div className='flex pt-[70px] justify-center'>
        <h3 className='text-2xl sm:text-3xl font-bold'>Menu</h3>
        <GiForkKnifeSpoon size={25} className='text-[#D8A61F] mt-2'/>
      </div>

      <div className='w-[80%] mx-auto grid grid-cols-1 gap-6 sm:grid-cols-3'>
        <div className=' bg-white rounded-lg'>
         <Image  alt='menu' width={30} height={10} src={miniimg}></Image>
          <h3>Mini Pack</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, accusamus reiciendis enim vero dolores veniam tenetur.</p>
        </div>

        <div className=' bg-white rounded-lg'>
         <Image alt='menu' width={30} height={10} src={miniimg}></Image>
          <h3>Mini Pack</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, accusamus reiciendis enim vero dolores veniam tenetur.</p>
        </div>

        <div  className=' bg-white rounded-lg'>
         <Image alt='menu' width={30} height={10} src={miniimg}></Image>
          <h3>Mini Pack</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, accusamus reiciendis enim vero dolores veniam tenetur.</p>
        </div>

      </div>

    </motion.div>
  )
}