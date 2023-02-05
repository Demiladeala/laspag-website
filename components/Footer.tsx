import React from 'react'
import {FaTwitter,FaInstagram, FaFacebook} from 'react-icons/fa'
import FLogo from '../public/footer-logo.png'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function Footer({}: Props) {
  const Year = new Date().getFullYear();

  return (
    <div className='footer-outer bg-black text-white sm:text-xl text-xs font-normal'>
      <div className="footer-inner mx-auto  sm:py-12 py-10 pt-14 sm:w-4/6 w-[90%] border-b border-b-white sm:block flex flex-col space-y-10 sm:space-y-0">

        <div className=' flex justify-between items-start'>
          <div className='space-y-4 sm:space-y-7'>
            <Image src={FLogo} alt='Laspag company logo' className='sm:h-auto h-8 w-28 sm:w-36 object-cover'></Image>
            <ul className='flex space-x-7 text-w justify-between'>
              <li><FaTwitter className='sm:text-2xl text-xl cursor-pointer hover:text-[#D8A61F]'/></li>
              <li><FaInstagram className='sm:text-2xl text-xl cursor-pointer hover:text-[#D8A61F]'/></li>
              <li><FaFacebook className='sm:text-2xl text-xl cursor-pointer hover:text-[#D8A61F]'/></li>
            </ul>
          </div>


          <div className='space-y-4 sm:space-y-7'>
            <h4 className='sm:text-2xl text-sm font-bold font-quattrocento'>Company</h4>
            <ul className='sm:space-y-5 space-y-3'>
            <Link href='#about'><li className='sm:text-base cursor-pointer hover:text-[#D8A61F]/80 mb-2'>About Us</li></Link>
            <Link href='#career'><li className='sm:text-base cursor-pointer hover:text-[#D8A61F]/80 mb-2'>Career</li></Link>
            <Link href='#services'><li className='sm:text-base cursor-pointer hover:text-[#D8A61F]/80 mb-2'>How it works</li></Link>
            </ul>
          </div>


          <div className='space-y-4 sm:space-y-7'>
            <h4 className='sm:text-2xl text-sm font-bold font-quattrocento'>Quicklink</h4>
            <ul className='sm:space-y-5 space-y-3'>
              <Link href='#menu'><li className='sm:text-base cursor-pointer hover:text-[#D8A61F]/80 mb-2'>Menu</li></Link>
              <Link href='#cart'><li className='sm:text-base cursor-pointer hover:text-[#D8A61F]/80 mb-2'>Cart</li></Link>
              <Link href='/'><li className='sm:text-base cursor-pointer hover:text-[#D8A61F]/80 mb-2'>Payment</li></Link>
            </ul>
          </div>


          <div className='space-y-4 sm:space-y-7 sm:block hidden'>
            <h4 className='sm:text-2xl text-sm font-bold font-quattrocento'>Get in touch</h4>
            <ul>
              <li className='sm:text-base hover:text-[#D8A61F]/80'>09020921657</li>
            </ul>
          </div>

        </div>
          <div className='space-y-3 sm:space-y-7 sm:hidden place-self-center text-center'>
            <h4 className='sm:text-2xl text-xs font-bold font-quattrocento'>Get in touch</h4>
            <ul>
              <li>09020921657</li>
            </ul>
          </div>
        

        
      </div>
      <h5 className='py-6 text-center text-slate-200 sm:text-sm text-xs'>@{Year} La-spag. ALL RIGHT RESERVED</h5>
    </div>
  )
}