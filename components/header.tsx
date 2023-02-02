import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from '../public/logo.png';
import React, { useState, useEffect} from 'react'
import {VscClose} from 'react-icons/vsc'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsPersonCheck, BsBagCheck, BsTelephone} from 'react-icons/bs'
import {BiHomeAlt} from 'react-icons/bi'
import {IoMdContact} from 'react-icons/io'
import Link from 'next/link'
import homeimg from '../public/navbar-home.svg'
import menuimg from '../public/navbar-menu.svg'
import aboutimg from '../public/navbar-about.svg'
import contactimg from '../public/navbar-contact.svg'

type Props = {}


export default function Header({}: Props) {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    
    <motion.div className='relative'>

    
        <motion.div
        initial={{x:200,opacity:0}}
        whileInView={{opacity:1, x:0}} 
        transition={{duration:0.2, delay:0.2}}
        className={nav? ' w-full overflow-hidden fixed top-[75px] h-screen z-50 bg-black/70 flex justify-end md:hidden' : 'hidden'}>
          <div onClick={handleNav} className={nav? 'w-full fixed overflow-hidden top-0 h-screen z-10 cursor-pointer':'hidden'}></div>
          <motion.div className={nav? 'w-[85%] fixed overflow-hidden  h-screen z-10 bg-white':'hidden'}>
          <div className='w-[85%] mt-8 mx-auto'>
              <div className='w-full flex'>
                  <div className='w-[30%] h-28 rounded-2xl border-black border flex justify-center items-center'>
                      <IoMdContact size={80}/>
                  </div>
                  <div className='flex flex-col ml-8 font-quattrocento'>
                    <h1 className='font-bold text-lg'>Taiwo Ifeoluwa</h1>
                    <p className='text-[#D8A61F] text-sm py-2'>View and Edit Profile</p>
                    <p className='text-[#313335] text-xs font-bold'>70% complete</p>
                  </div>
              </div>
              <div className='flex flex-col font-ptsans py-10'>
                    <Link href='/' onClick={handleNav}>
                      <div className='flex flex-row gap-6 py-5 hover:text-[#D8A61F] w-52'>
                      <BiHomeAlt className='font-extrabold' size={30}/><p className='font-bold text-lg'>Home</p>
                      </div>
                    </Link>
                    <Link href='#menu' onClick={handleNav}>
                      <div className='flex flex-row gap-6 py-5 hover:text-[#D8A61F] w-52'>
                      <BsBagCheck className='font-extrabold' size={30}/><p className='font-bold text-lg'>Our Menu</p>
                      </div>
                    </Link>
                    <Link href='#about' onClick={handleNav}>
                      <div className='flex flex-row gap-6 py-5 hover:text-[#D8A61F] w-52'>
                      <BsPersonCheck className='font-extrabold' size={30}/><p className='font-bold text-lg'>About us</p>
                      </div>
                    </Link>
                    <Link href='#contact' onClick={handleNav}>
                      <div className='flex flex-row gap-6 py-5 hover:text-[#D8A61F] w-52'>
                      <BsTelephone className='font-extrabold' size={30}/><p className='font-bold text-lg'>Contact</p>
                      </div>
                    </Link>
                  </div>
            </div>
          </motion.div>
        </motion.div>

      <div className=' w-full fixed overflow-hidden z-[1000] bg-opacity-95 bg-white flex items-center justify-between px-3 sm:px-2 mx-auto font-ptsans'>
          <div>
              <Link href='/'><Image alt='logo' className=' cursor-pointer' src={logo}></Image></Link>
          </div>

          <div className='flex gap-6 pr-4 cursor-pointer md:hidden'>
          {nav? <VscClose onClick={handleNav} size={25}/> : <HiOutlineMenuAlt2 onClick={handleNav} size={25} />}
              <div className='relative mr-2'>
               <AiOutlineShoppingCart size={25}/>
              <div className='absolute bottom-4 left-4 bg-[#D8A61F] h-5 w-5 rounded-full text-white p-2 flex items-center justify-center'>0</div>
            </div>
          </div>

      

          <div className='hidden md:flex gap-6 font-medium text-[16px]'> 
            <Link href='/' className='text-[#D8A61F]'>Home</Link>
            <Link href='#menu' className='hover:text-[#D8A61F]'>Our Menu</Link>
            <Link href='#about' className='hover:text-[#D8A61F]'>About us</Link>
            <Link href='#contact' className='hover:text-[#D8A61F]'>Contact</Link>
            {/* <div className='flex gap-2 hover:text-[#D8A61F]'>
              <BsFillTelephoneFill className='mt-1'/>
              <p>09020169257</p>
            </div> */}
          </div>


          <div className='hidden md:flex gap-4 pr-8'>
            <Link href='/'><button className='border border-gray-600 rounded-lg px-2 py-[2px] hover:bg-black/5 transition duration-150 text-sm'>Login</button></Link>
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