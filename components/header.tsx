import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from '../public/logo.png';
import React from 'react'
import {BsFillPersonFill, BsFillTelephoneFill} from 'react-icons/bs'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import {AiOutlineInstagram , AiFillTwitterCircle , AiOutlineWhatsApp} from 'react-icons/ai'
import Link from 'next/link'

type Props = {}


export default function Header({}: Props) {
  return (
    
    <motion.div>
  
      <div className=' w-full fixed overflow-hidden z-50 bg-opacity-95 bg-white flex items-center justify-between px-4 font-ptsans'>
          <div>
              <Image alt='logo' className=' cursor-pointer' src={logo}></Image>
          </div>

          <div className='flex gap-6 cursor-pointer sm:hidden'>
              <BsFillPersonFill className='border-2 border-gray-700 rounded-full' size={25}/>
              <HiOutlineMenuAlt2 className='mr-4' size={25}/>
          </div>

      

          <div className='hidden sm:flex gap-6 mr-8 font-medium text-[16px]'> 
            <Link href='/' className='text-[#D8A61F]'>Home</Link>
            <Link href='#menu' className='hover:text-[#D8A61F]'>Our Menu</Link>
            <Link href='#about' className='hover:text-[#D8A61F]'>About us</Link>
            <Link href='#contact' className='hover:text-[#D8A61F]'>Contact</Link>
            <div className='flex gap-2 hover:text-[#D8A61F]'>
              <BsFillTelephoneFill className='mt-1'/>
              <p>09020169257</p>
            </div>
          </div>


          <div className='hidden sm:flex gap-4'>
          <Link href='/'><AiOutlineInstagram className='text-pink-400' size={20} /> </Link>
            <Link href='/'><AiFillTwitterCircle size={20} className='text-blue-400'/></Link>
            <Link href='/'><AiOutlineWhatsApp size={20} className='text-green-500'/></Link>
          </div>

         
      </div>
    </motion.div>
  )
}