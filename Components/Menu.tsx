import { motion } from 'framer-motion'
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
    className='h-screen relative justify-evenly max-w-full bg-[#edcf7e]/10'>

      <div className='flex p-8 justify-center'>
        <h3 className='text-2xl sm:text-3xl font-bold'>Menu</h3>
      </div>

      <div className='w-[80%] mx-auto bg-white rounded-xl grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8'>
        <div>
         <Image  alt='menu' width={30} height={10} src={miniimg}></Image>
          <h3>Mini Pack</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, accusamus reiciendis enim vero dolores veniam tenetur.</p>
        </div>

        <div>
         <Image alt='menu' width={30} height={10} src={miniimg}></Image>
          <h3>Mini Pack</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, accusamus reiciendis enim vero dolores veniam tenetur.</p>
        </div>

        <div>
         <Image alt='menu' width={30} height={10} src={miniimg}></Image>
          <h3>Mini Pack</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, accusamus reiciendis enim vero dolores veniam tenetur.</p>
        </div>

      </div>

    </motion.div>
  )
}