import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiBowlNoodles } from 'react-icons/ci'
import { SiFoodpanda } from 'react-icons/si'
import { BsTruck } from 'react-icons/bs'
import { motion } from 'framer-motion'

type Props = {}

export default function Services({}: Props) {
  return (
    <>
    <div className='mt-20 max-[280px]:mt-44'>
        <div className='w-[80%] m-auto pt-20 grid gap-8 grid-cols-1 md:grid-cols-3 sm:gap-20'>

            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.5,delay:0.6}}
            viewport={{once:true}}  
            className='bg-white flex flex-col justify-center items-center p-7 rounded-3xl relative shadow-card'>
                <CiBowlNoodles  size={35} className='text-[#facc15]'/>
                <h1 className='font-bold text-xl'>Tasty Food</h1>
                <p className='py-8 mx-auto relative'>lorem ipsum dolor sit amet lorem ipsum ipsum dolor sit amet lorem 
                    ipsum dolor</p>
            </motion.div>

            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.5,delay:0.6}}
            viewport={{once:true}}  
            className='bg-white flex flex-col justify-center items-center p-7 rounded-3xl relative shadow-card'>
                <BsTruck  size={35} className='text-[#facc15]'/>
                <h1 className='font-bold text-xl'>Fast Delivery</h1>
                <p className='py-8 mx-auto relative'>lorem ipsum dolor sit amet lorem ipsum ipsum dolor sit amet lorem 
                    ipsum dolor</p>
            </motion.div>

            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.5,delay:0.6}}
            viewport={{once:true}}  
            className='bg-white flex flex-col justify-center items-center p-7 rounded-3xl relative shadow-card'>
                < SiFoodpanda  size={35} className='text-[#facc15]'/>
                <h1 className='font-bold text-xl'>Best Quality</h1>
                <p className='py-8 mx-auto relative'>lorem ipsum dolor sit amet lorem ipsum ipsum dolor sit amet lorem 
                    ipsum dolor</p>
            </motion.div>
        </div>
    </div>
    </>
  )
}