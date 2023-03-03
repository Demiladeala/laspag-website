import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from 'public/logo.png'
import React, { useState, useEffect} from 'react'
import {VscClose} from 'react-icons/vsc'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsPersonCheck, BsBagCheck, BsTelephone} from 'react-icons/bs'
import {BiHomeAlt} from 'react-icons/bi'
import {IoMdContact} from 'react-icons/io'
import Link from 'next/link'

type Props = {}


export default function Header({}: Props) {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const [cart, setCart] = useState(false)

  const handleCart = () => {
    setCart(!cart)
  }

  return (
    
    <motion.div className='relative'>

    
        <motion.div
        initial={{x:200,opacity:0}}
        whileInView={{opacity:1, x:0}} 
        transition={{duration:0.2, delay:0.2}}
        className={nav? ' w-full overflow-hidden fixed top-[75px] h-screen z-50 bg-transparent flex justify-end md:hidden' : 'hidden'}>
          <div onClick={handleNav} className={nav? 'w-full fixed overflow-hidden top-0 h-screen z-10 cursor-pointer bg-black/70':'hidden'}></div>
          <motion.div className={nav? 'w-[90%] fixed overflow-hidden  h-screen z-10 bg-white':'hidden'}>
          <div className='w-[85%] mt-8 mx-auto'>
              <div className='w-full flex'>
                  <div className='w-[30%] h-28 rounded-2xl border-black border flex justify-center items-center'>
                      <IoMdContact size={80}/>
                  </div>
                  <div className='flex flex-col ml-8 font-quattrocento'>
                    <h1 className='font-bold text-xl'>UserName</h1>
                    <p className='text-[#D8A61F] text-sm py-2'>View and Edit Profile</p>
                    <p className='text-[#313335] text-xs font-bold'>0% complete</p>
                  </div>
              </div>
              <div className='flex flex-col font-ptsans py-10'>
                    <Link href='/' onClick={handleNav}>
                      <div className='flex flex-row gap-6 py-5 hover:text-[#D8A61F] w-52'>
                      <BiHomeAlt className='font-medium' size={25}/><p className='font-medium text-base'>Home</p>
                      </div>
                    </Link>
                    <Link href='/#menu' onClick={handleNav}>
                      <div className='flex flex-row gap-6 py-5 hover:text-[#D8A61F] w-52'>
                      <BsBagCheck className='font-medium' size={25}/><p className='font-medium text-base'>Our Menu</p>
                      </div>
                    </Link>
                    <Link href='/#about' onClick={handleNav}>
                      <div className='flex flex-row gap-6 py-5 hover:text-[#D8A61F] w-52'>
                      <BsPersonCheck className='font-medium' size={25}/><p className='font-medium text-base'>About us</p>
                      </div>
                    </Link>
                    <Link href='/#contact' onClick={handleNav}>
                      <div className='flex flex-row gap-6 py-5 hover:text-[#D8A61F] w-52'>
                      <BsTelephone className='font-medium' size={25}/><p className='font-medium text-base'>Contact</p>
                      </div>
                    </Link>
                  </div>
            </div>
          </motion.div>
        </motion.div>


        <div>
        <div id='cart' onClick={handleCart} className={cart? 'w-full h-[90vh] bg-black/60 fixed top-[75px] z-50 sm:flex sm:right-0 hidden cursor-pointer':'hidden'}></div>
          <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}} 
          transition={{duration:0.1, delay:0.1}}
          className={cart? 'w-full h-[90vh] bg-white fixed top-[75px] z-50 sm:w-[50%] md:w-[30%] sm:flex sm:right-0':'hidden'}
          >
            <div className='w-[90%] mx-auto'>
              <div className='flex flex-col items-center'>
                <div className='flex flex-row gap-2 mt-28'>
                <AiOutlineShoppingCart size={25} className='mt-3 animate-bounce duration-[30ms]'/>
                <h1 className='text-center py-3'>Shopping Cart is Empty!</h1>
                </div>
              </div>
              <div className='w-[80%] mx-auto h-[1px] bg-gray-700'></div>
            </div>
          </motion.div>
        </div>


             {/* MEDIUM AND LARGE SIZE NAVBAR JSX AND STYLING */}

      <div className=' w-full fixed overflow-hidden z-[1000] bg-opacity-95  flex items-center justify-between px-3 sm:px-2 mx-auto bg-white/80'>
          <div>
              <Link href='/'><Image alt='logo' className=' cursor-pointer' src={logo}></Image></Link>
          </div>

          <div className='flex gap-6 pr-4 cursor-pointer md:hidden'>
              <div className='bg-[#facc15] p-3 rounded-full text-white'>
                {nav? <VscClose onClick={handleNav} size={25} className='z-[50]'/> : <HiOutlineMenuAlt2 onClick={handleNav} size={25} className='z-[50] rounded-full' />}
              </div>
              <div onClick={handleCart} className='relative mr-2 hidden'>
               <AiOutlineShoppingCart size={25}/>
              <div className='absolute bottom-4 left-4 bg-[#D8A61F] h-5 w-5 rounded-full text-white p-2 items-center justify-center hidden'>0</div>
            </div>
          </div>

      

          <div className='hidden md:flex gap-6 font-medium text-[16px]'> 
            <Link href='/' className='text-[#facc15]'>Home</Link>
            <Link href='/#menu' className='hover:text-[#facc15]'>Our Menu</Link>
            <Link href='/#about' className='hover:text-[#facc15]'>About us</Link>
            <Link href='/#contact' className='hover:text-[#facc15]'>Contact</Link>
            {/* <div className='flex gap-2 hover:text-[#D8A61F]'>
              <BsFillTelephoneFill className='mt-1'/>
              <p>09020169257</p>
            </div> */}
          </div>


          <div className='hidden md:flex gap-4 pr-8'>
            <Link href='/'><button className='border border-gray-600 rounded-lg px-2 py-[2px] hover:bg-black/5 transition duration-150 text-sm'>Login</button></Link>
            <Link href='/'><button className=' rounded-lg px-2 py-[3px] hover:bg-opacity-75 transition duration-150 text-sm bg-white'>Signup</button></Link>
            <div onClick={handleCart} className='relative cursor-pointer hidden'>
              <AiOutlineShoppingCart size={25}/>
              <div className='absolute bottom-4 left-4 bg-[#D8A61F] h-5 w-5 rounded-full text-white p-2 hidden items-center justify-center'>0</div>
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