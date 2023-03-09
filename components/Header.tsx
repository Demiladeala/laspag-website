import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from 'public/logo.png'
import React, { useState} from 'react'
import {VscClose} from 'react-icons/vsc'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import { AiOutlineShoppingCart, AiOutlineHome} from 'react-icons/ai'
import {BsPersonCheck, BsBagCheck, BsTelephone} from 'react-icons/bs'
import {IoMdContact} from 'react-icons/io'
import Link from 'next/link'
import { useShoppingCart } from '../context/ShoppingCartContext'
import CartItem from 'components/CartItem'

type Props = {
}


export default function Header({}: Props) {
  const { openCart, cartItems, cartQuantity } = useShoppingCart()
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
              {/* MOBILE SCREENS NAVBAR */}
      <motion.div
      initial={{x:200,opacity:0}}
      whileInView={{opacity:1, x:0}} 
      transition={{duration:0.2, delay:0.2}}
      className={nav? ' w-full overflow-hidden fixed top-0 h-screen z-[51] bg-transparent flex justify-start md:hidden' : 'hidden'}>
          <div onClick={handleNav} className={nav? 'w-full fixed overflow-hidden top-0 h-screen z-10 cursor-pointer bg-gray-800/80':'hidden'}></div>
            <motion.div className={nav? 'w-[84%] fixed overflow-hidden  h-screen z-10 bg-white':'hidden'}>
            <div className='w-[85%] mt-8 mx-auto'>
                <div className='w-full flex justify-between items-center'>
                  <div className='flex gap-2  flex-row justify-between'>
                    <div className='w-16 h-12 rounded-2xl border-black border flex justify-center items-center'>
                        <IoMdContact size={30}/>
                    </div>
                    <div className='w-[90%] m-auto'>
                      <p className='text-xs text-yellow-400 italic laspag_small_navbar'>Welcome to Laspag</p>
                      <h3 className=''>John Doe</h3>
                    </div>
                  </div>
                    <div className='cursor-pointer'>
                      <VscClose onClick={handleNav} size={25} />
                    </div>
                </div>
                <div className='flex flex-col font-ptsans py-10'>
                      <Link href='/' onClick={handleNav} className='w-36'>
                        <div className='flex flex-row gap-6 py-5 hover:text-yellow-400 w-36'>
                        <AiOutlineHome className='font-medium' size={25}/><p className='font-medium text-base'>Home</p>
                        </div>
                      </Link>
                      <Link href='/#menu' onClick={handleNav} className='w-36'>
                        <div className='flex flex-row gap-6 py-5 hover:text-yellow-400 w-52'>
                        <BsBagCheck className='font-medium' size={25}/><p className='font-medium text-base'>Our Menu</p>
                        </div>
                      </Link>
                      <Link href='/#about' onClick={handleNav} className='w-36'>
                        <div className='flex flex-row gap-6 py-5 hover:text-yellow-400 w-52'>
                        <BsPersonCheck className='font-medium' size={25}/><p className='font-medium text-base'>About us</p>
                        </div>
                      </Link>
                      <Link href='/#contact' onClick={handleNav} className='w-36'>
                        <div className='flex flex-row gap-6 py-5 hover:text-yellow-400 w-52'>
                        <BsTelephone className='font-medium' size={25}/><p className='font-medium text-base'>Contact</p>
                        </div>
                      </Link>
                      <Link href='/signup' onClick={handleNav} className='w-36 mt-16 flex justify-start text-white'>
                        <button className='bg-yellow-400 rounded-lg px-3 py-2'>Sign up</button>
                      </Link>
                    </div>
              </div>
            </motion.div>
      </motion.div>

             {/* MEDIUM AND LARGE SIZE NAVBAR JSX AND STYLING */}

      <div className=' w-full fixed overflow-hidden z-50 bg-opacity-95  flex items-center justify-between px-3 sm:px-2 mx-auto bg-white'>
          <div>
              <Link href='/'><Image alt='logo' className=' cursor-pointer' src={logo}></Image></Link>
          </div>

          <div className='flex gap-6 pr-4 cursor-pointer md:hidden'>
              <div onClick={handleNav} className='bg-[#facc15] p-3 rounded-full text-white'>
              <HiOutlineMenuAlt2 onClick={handleNav} size={25} className='z-[50] rounded-full' />
              </div>
              {cartQuantity > 0 && (
                 <div onClick={handleCart} className='relative mr-2 mt-2 '>
                 <AiOutlineShoppingCart size={30}/>
                 <div className='absolute top-[-8px] right-[-8px] bg-[#facc15] h-5 w-5 text-center text-white rounded-full'>
                  <p className='text-sm'>{cartQuantity}</p>
                 </div>
              </div>
              )}
             
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
            
            {cartQuantity > 0 && (
            <div onClick={handleCart} className='relative cursor-pointer'>
               <AiOutlineShoppingCart size={25}/>
              <div className='absolute top-[-8px] right-[-8px] bg-[#facc15] h-5 w-5 text-center text-white rounded-full'>
                 <p className='text-sm'>{cartQuantity}</p>
              </div>
            </div>
              )}

          </div>
      </div>

                              {/* CART STYLING */}
      <motion.div className={cart? 'w-full':'hidden'}>
        <div className={cart? 'w-full h-screen fixed z-[51]':'hidden'}>
          <div  className='h-screen bg-gray-800/80 cursor-pointer flex justify-end'>
            <div className={cart? 'w-[70%] sm:w-[50%] md:w-[40%] h-screen fixed z-[51] bg-white flex justify-center rounded-tl-lg rounded-bl-lg': 'hidden'}>
              <div className='w-[90%] mx-auto pt-12 '>
                  <div className='flex flex-row gap-2 justify-between items-center'>
                    <h2>Your Cart <span><span className='font-bold'>({cartQuantity})</span> items</span></h2>
                    <div>
                    <VscClose onClick={handleCart} size={25}/>
                    </div>
                  </div>

                  <div>
                   <CartItem data={{}}/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </motion.div>
  )
}

/*
   <Link href='/'><AiOutlineInstagram className='text-pink-400' size={20} /> </Link>
  <Link href='/'><AiFillTwitterCircle size={20} className='text-blue-400'/></Link>
    <Link href='/'><AiOutlineWhatsApp size={20} className='text-green-500'/></Link
*/


{/*
 initial={{opacity:0}}
  whileInView={{opacity:1}} 
  transition={{duration:0.1, delay:0.1}}

<div className='w-[90%] mx-auto'>
<div className='flex flex-col items-center'>
  <div className='flex flex-row gap-2 mt-28'>
  <AiOutlineShoppingCart size={25} className='mt-3'/>
  <h1 className='text-center py-3'>Shopping Cart is Empty!</h1>
  </div>
</div>
<div className='w-[80%] mx-auto h-[1px] bg-gray-700'></div>
<div className='w-full flex justify-center mt-4'>
  <Link href='/' onClick={handleCart}><button className='bg-[#facc15] px-3 py-2 rounded-lg text-white hover:opacity-80'>CONTINUE SHOPPING</button></Link>
</div>
</div> */}