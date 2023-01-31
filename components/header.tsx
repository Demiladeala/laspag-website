import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from '../public/logo.png';
import React from 'react'
import {BsFillPersonFill} from 'react-icons/bs'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Link from 'next/link'

type Props = {}


export default function Header({}: Props) {
  return (
    
    <motion.div>
  
      <div className=' w-full fixed overflow-hidden z-50 bg-opacity-95 bg-white flex items-center justify-between md:px-8 mx-auto font-ptsans'>
          <div>
              <Image alt='logo' className=' cursor-pointer' src={logo}></Image>
          </div>

          <div className='flex gap-6 pr-4 cursor-pointer sm:hidden'>
              <HiOutlineMenuAlt2 size={25}/>
              <div className='relative'>
              <AiOutlineShoppingCart size={25}/>
              <div className='absolute bottom-4 left-4 bg-[#D8A61F] h-5 w-5 rounded-full text-white p-2 flex items-center justify-center'>0</div>
            </div>
          </div>

      

          <div className='hidden sm:flex gap-6 font-medium text-[16px]'> 
            <Link href='/' className='text-[#D8A61F]'>Home</Link>
            <Link href='#menu' className='hover:text-[#D8A61F]'>Our Menu</Link>
            <Link href='#about' className='hover:text-[#D8A61F]'>About us</Link>
            <Link href='#contact' className='hover:text-[#D8A61F]'>Contact</Link>
            {/* <div className='flex gap-2 hover:text-[#D8A61F]'>
              <BsFillTelephoneFill className='mt-1'/>
              <p>09020169257</p>
            </div> */}
          </div>


          <div className='hidden sm:flex gap-4'>
            <Link href='/'><button className='border border-gray-600 rounded-lg px-2 py-[2px] hover:bg-black/10 transition duration-150 text-sm'>Login</button></Link>
            <Link href='/'><button className='bg-[#D8A61F] text-white rounded-lg px-2 py-[3px] hover:bg-opacity-75 transition duration-150 text-sm'>Signup</button></Link>
            <div className='relative'>
              <AiOutlineShoppingCart size={25}/>
              <div className='absolute bottom-4 left-4 bg-[#D8A61F] h-5 w-5 rounded-full text-white p-2 flex items-center justify-center'>0</div>
            </div>
          </div>

         
      </div>
    </motion.div>
  )
}

/*
   <Link href='/'><AiOutlineInstagram className='text-pink-400' size={20} /> </Link>
  <Link href='/'><AiFillTwitterCircle size={20} className='text-blue-400'/></Link>
    <Link href='/'><AiOutlineWhatsApp size={20} className='text-green-500'/></Link
*/