import React from 'react'
import {FaTwitter,FaInstagram, FaFacebook} from 'react-icons/fa'
import Logo from '../public/footer-logo.png'
import Image from 'next/image'

type Props = {}

export default function Footer({}: Props) {
  var Year = new Date().getFullYear();

  return (
    <div className='footer-outer bg-black text-white sm:text-xl text-[7px] font-normal'>
      <div className="footer-inner mx-auto  sm:py-12 py-10 pt-14 sm:w-4/6 w-[90%] border-b border-b-white sm:block flex flex-col space-y-10 sm:space-y-0">

        <div className=' flex justify-between items-start'>
          <div className='space-y-4 sm:space-y-7'>
            <Image src={Logo} alt='Laspag company logo' className='sm:h-auto h-8'></Image>
            <ul className='flex sm:pl-5 space-x-5 text-w'>
              <li><FaTwitter size={24}/></li>
              <li><FaInstagram size={24}/></li>
              <li><FaFacebook size={24}/></li>
            </ul>
          </div>


          <div className='space-y-4 sm:space-y-7'>
            <h4 className='sm:text-2xl text-xs font-bold'>Company</h4>
            <ul className='sm:space-y-5 space-y-3'>
              <li>About Us</li>
              <li>Career</li>
              <li>How it works</li>
            </ul>
          </div>


          <div className='space-y-4 sm:space-y-7'>
            <h4 className='sm:text-2xl text-xs font-bold'>Quicklink</h4>
            <ul className='sm:space-y-5 space-y-3'>
              <li>Menu</li>
              <li>Cart</li>
              <li>Payment</li>
            </ul>
          </div>


          <div className='space-y-4 sm:space-y-7 sm:block hidden'>
            <h4 className='sm:text-2xl text-xs font-bold'>Get in touch</h4>
            <ul>
              <li>09020921657</li>
            </ul>
          </div>

        </div>
          <div className='space-y-3 sm:space-y-7 sm:hidden place-self-center text-center'>
            <h4 className='sm:text-2xl text-xs font-bold'>Get in touch</h4>
            <ul>
              <li>09020921657</li>
            </ul>
          </div>
        

        
      </div>
      <h5 className='py-6 text-center sm:text-sm text-[7px]'>@{Year} La-spag. ALL RIGHT RESERVED</h5>
    </div>
  )
}