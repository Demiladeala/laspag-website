import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cateringimg from '../public/services-catering.png'
import logisticsimg from '../public/services-logistics.png'
import techimg from '../public/services-tech.png'
import fashionimg from '../public/services-fashion.png'
import { motion } from 'framer-motion'

type Props = {}

export default function Services({}: Props) {
  return (
    <>
    <div className=''>
        <div className='w-[80%] m-auto pt-20 grid gap-8 grid-cols-1 sm:grid-cols-2 sm:gap-20'>

            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.1,delay:0.2}}
            viewport={{once:true}} 
            className='bg-white flex flex-col justify-center items-center p-10 rounded-3xl relative'>
                <h1 className='font-bold text-xl'>Catering</h1>
                <p className='py-8 w-[70%] mx-auto relative left-10 max-sm:left-0 max-sm:w-full'>lorem ipsum dolor sit amet lorem ipsum ipsum dolor sit amet lorem 
                    ipsum dolor dolor sit lorem ipsum dolor sit amet lorem ipsum dolor 
                    sit amet</p>
                <div className='w-full absolute flex justify-start mr-4 md:mr-10 max-sm:hidden'>
                <Image src={cateringimg} alt='' className='w-[150px] md:w-[200px]'></Image>
                </div>
                <Link href=''><button className='relative z-10 mt-10 border-[#D8A61F] text-[#D8A61F] border p-2 items-center rounded-xl hover:bg-black/5 transition duration-200'>Learn More</button></Link>
            </motion.div>

            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.3,delay:0.4}}
            viewport={{once:true}} 
            className='bg-white flex flex-col justify-center items-center p-10 rounded-3xl relative'>
                <h1 className='font-bold text-xl'>Logistics</h1>
                <p className='py-8 w-[70%] mx-auto relative left-14 max-sm:left-0 max-sm:w-full'>lorem ipsum dolor sit amet lorem ipsum ipsum dolor sit amet lorem 
                    ipsum dolor dolor sit lorem ipsum dolor sit amet lorem ipsum dolor 
                    sit amet</p>
                <div className='w-full absolute flex justify-start mr-4 md:mr-16 max-sm:hidden'>
                <Image src={logisticsimg} alt='' className='w-[150px] md:w-[200px]'></Image>
                </div>
                <Link href=''><button className='relative z-10 mt-10 border-[#D8A61F] text-[#D8A61F] border p-2 items-center rounded-xl hover:bg-black/5 transition duration-200'>Learn More</button></Link>
            </motion.div>

            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.5,delay:0.6}}
            viewport={{once:true}}  
            className='bg-white flex flex-col justify-center items-center p-10 rounded-3xl relative'>
                <h1 className='font-bold text-xl'>Lifestyle</h1>
                <p className='py-8 w-[70%] mx-auto relative left-12 max-sm:left-0 max-sm:w-full'>lorem ipsum dolor sit amet lorem ipsum ipsum dolor sit amet lorem 
                    ipsum dolor dolor sit lorem ipsum dolor sit amet lorem ipsum dolor 
                    sit amet</p>
                <div className='w-full absolute flex justify-start max-sm:hidden'>
                <Image src={techimg} alt='' className='w-[100px] md:w-[150px]'></Image>
                </div>
                <Link href=''><button className='relative z-10 mt-10 border-[#D8A61F] text-[#D8A61F] border p-2 items-center rounded-xl hover:bg-black/5 transition duration-200'>Learn More</button></Link>
            </motion.div>

            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.7,delay:0.8}}
            viewport={{once:true}}  
            className='bg-white flex flex-col justify-center items-center p-10 rounded-3xl relative'>
                <h1 className='font-bold text-xl'>Fashion</h1>
                <p className='py-8 w-[70%] mx-auto relative left-10 max-sm:left-0 max-sm:w-full'>lorem ipsum dolor sit amet lorem ipsum ipsum dolor sit amet lorem 
                    ipsum dolor dolor sit lorem ipsum dolor sit amet lorem ipsum dolor 
                    sit amet</p>
                <div className='w-full absolute flex justify-start mr-12 max-sm:hidden'>
                <Image src={fashionimg} alt='' className='w-[150px] md:w-[200px]'></Image>
                </div>
                <Link href=''><button className='relative z-10 mt-10 border-[#D8A61F] text-[#D8A61F] border p-2 items-center rounded-xl hover:bg-black/5 transition duration-200'>Learn More</button></Link>
            </motion.div>
        </div>
    </div>
    </>
  )
}