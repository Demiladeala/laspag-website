import Image from 'next/image'
import React from 'react'
import menuimg from 'public/spag-menu1.png'
import menuimg2 from 'public/mega-pack-img.svg'
import formatCurrency from 'utilities/formatCurrency'
import { motion } from 'framer-motion'

type Props = {}

export default function spaghettiMenu({}: Props) {
  return (
    <>
    <div className='bg-[#fbfbfb]'>
      <div className='py-32 flex items-center uppercase font-bold text-center justify-center'>
        <h1 className='font-quattrocento font-bold text-xl'>Spaghetti and Chicken</h1>
      </div>

      <div className='w-[80%] mx-auto pb-20 sm:pb-40 grid grid-cols-1 md:grid-cols-3 gap-8'>

        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.3, delay:0.2, type:'spring', stiffness:180}}
        viewport={{once:true}}
        className=' bg-white rounded-3xl flex flex-col justify-center items-center cursor-pointer px-5 py-10'>
          <Image alt='menu' width={150} height={10} src={menuimg} className='pt-4'></Image>
            <h3 className='font-bold py-4 uppercase'>Mini Package - {formatCurrency(1200)}</h3>
            <p className='text-center pb-2'>Stir Fry Spaghetti, Diced Sausage and Chicken.</p>
            <button className='bg-[#D8A61F] px-2 py-1 rounded-xl text-white my-4 shadow-gray-400 shadow-md hover:bg-transparent hover:border-black hover:text-gray-700 transition ease-in-out duration-300 font-sansation border-none'>Add to Cart</button>
        </motion.div>

        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.4, type:'spring', stiffness:180}}
        viewport={{once:true}}  
        className=' bg-white rounded-3xl flex flex-col justify-center items-center cursor-pointer px-5 py-10'>
          <Image alt='menu' width={150} height={10} src={menuimg2} className='pt-4'></Image>
            <h3 className='font-bold py-4 uppercase'>Mega Package - {formatCurrency(1500)}</h3>
            <p className='text-center pb-2'>Stir Fry Spaghetti, Diced Sausage, Plantain and Chicken.</p>
            <button className='bg-[#D8A61F] px-2 py-1 rounded-xl text-white my-4 shadow-gray-400 shadow-md hover:bg-transparent hover:border-black hover:text-gray-700 transition ease-in-out duration-300 font-sansation border-none'>Add to Cart</button>
        </motion.div>

        <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.7, delay:0.6, type:'spring', stiffness:180}}
          viewport={{once:true}}    
        className=' bg-white rounded-3xl flex flex-col justify-center items-center cursor-pointer px-5 py-10'>
          <Image alt='menu' width={150} height={10} src={menuimg} className='pt-4'></Image>
            <h3 className='font-bold py-4 uppercase'>Jumbo Package - ₦2500</h3>
            <p className='text-center pb-2'>Stir Fry Spaghetti, Diced Sausage, Extra Sausage, Plantain, Bottled Water and Chicken(2).</p>
            <button className='bg-[#D8A61F] px-2 py-1 rounded-xl text-white my-4 shadow-gray-400 shadow-md hover:bg-transparent hover:border-black hover:text-gray-700 transition ease-in-out duration-300 font-sansation border-none'>Add to Cart</button>
        </motion.div>

      </div>
    </div>
    </>
  )
}