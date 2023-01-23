import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from '../public/logo.png'
import React from 'react'
import { useState } from 'react'
import {BsFillPersonFill, BsTelegram} from 'react-icons/bs'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import {AiOutlineInstagram , AiFillTwitterCircle , AiFillFacebook} from 'react-icons/ai'

import Link from 'next/link'

type Props = {}


export default function Header({}: Props) {
  return (
    <motion.div>
  
  <div className=' w-full fixed overflow-hidden z-50 bg-opacity-70 bg-white flex items-center justify-between px-4'>
      <div>
          <Image alt='logo' className=' cursor-pointer' src={logo}></Image>
      </div>

      <div className='flex gap-6 cursor-pointer sm:hidden'>
          <BsFillPersonFill className='border-2 border-gray-700 rounded-full' size={25}/>
          <HiOutlineMenuAlt2 className='mr-4' size={25}/>
      </div>

      <div className='hidden sm:flex gap-6 font-medium'> 
        <Link href='/'>Home</Link>
        <Link href='#menu'>Our Menu</Link>
        <Link href='#about'>About us</Link>
        <Link href='#contact'>Contact</Link>
      </div>

      <div className='hidden sm:flex gap-4'>
      <Link href='/'><AiOutlineInstagram /> </Link>
        <Link href='/'><AiFillTwitterCircle/></Link>
        <Link href='/'><AiFillFacebook/></Link>
        <Link href='/'><BsTelegram/></Link>
      </div>
  </div>
    </motion.div>
  )
}