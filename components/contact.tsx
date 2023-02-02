import React from 'react'
import {FiHome, FiPhone} from 'react-icons/fi'
import {CiMail} from 'react-icons/ci'
import {BiUser} from 'react-icons/bi'
import {FaTwitter,FaInstagram, FaFacebook,FaTelegram} from 'react-icons/fa'




type Props = {}

export default function Contact({}: Props) {
  return (
    <div className='contact-outer py-28 pb-40 font-normal sm:pl-20  relative'>
        <div className="contact-inner w-5/6 mx-auto relative">

            <div className="contact-details-outer text-white bg-[#D8A61F] sm:w-[40%] w-5/6 mx-auto sm:mx-0 rounded-3xl px-5 py-10 sm:space-y-10 space-y-5 relative z-10">
                <h3 className='sm:text-3xl text-base font-bold pl-2 border-l-2 border-l-white w-3/6  mx-auto text-center'>Contact Us</h3>

                <div className="contact-details-main sm:space-y-5 space-y-3 sm:text-xl text-xs">
                    <h4 className='flex items-center'><span className='pr-3'><FiHome size={24}/></span>Aluta Market, Federal University Of Technology, Akure.</h4>
                    <h4 className='flex items-center'><span className='pr-3'><CiMail size={24}/></span>Sisilaspag@gmail.com</h4>
                    <h4 className='flex items-center'><span className='pr-3'><BiUser size={24}/></span>Asulewon Babalola</h4>
                    <h4 className='flex items-center'><span className='pr-3'><FiPhone size={24}/></span>07060928727 <br/>08048382782</h4>
                </div>
                <div className="social-contact-icons">
                    <ul className='flex sm:pl-7 space-x-5 sm:justify-start justify-center'>
                        <li><FaTwitter size={24}/></li>
                        <li><FaInstagram size={24}/></li>
                        <li><FaFacebook size={24}/></li>
                        <li><FaTelegram size={24}/></li>
                    </ul>
                </div>
            </div>



            <div className="git-outer bg-white rounded-3xl absolute sm:-top-10 sm:left-1/4 sm:w-4/6 top-72 w-full text-xl mb-20">
                <div className="git-inner w-full h-auto">
                    <div className="git-main-content sm:w-[75%] w-full sm:ml-[22%] py-20 sm:!pb-10 !pb-5 px-5 space-y-3">
                        <h3 className='sm:text-3xl text-base font-bold pl-2 border-l-2 border-l-[#D8A61F] w-3/6 mx-auto text-center'>GET IN TOUCH</h3>
                        <h5 className='text-center text-xs'>Contact us for an order, help, or to join the team</h5>
                        
                        <div className="form-outer w-full mx-auto">
                            <form action="" className="w-full space-y-3 sm:text-lg text-base">
                                <input type="text" name="name" id="name" placeholder='Name' required className='bg-[#F3F3F3] w-full sm:h-14 h-10 sm:rounded-3xl rounded-lg pl-5 outline-none'/>
                                <input type="email" name='email' id='email' placeholder='Email' required className='bg-[#F3F3F3] w-full sm:h-14 h-10 sm:rounded-3xl rounded-lg pl-5 outline-none'/>
                                <input type="tel" name='number' id='number' placeholder='Phone Number' required className='bg-[#F3F3F3] w-full sm:h-14 h-10 sm:rounded-3xl rounded-lg pl-5 outline-none'/>
                                <textarea name="message" id="message" cols={30} rows={10} placeholder='Enter Message' required className='bg-[#F3F3F3] w-full sm:h-14 h-14 sm:rounded-3xl rounded-lg pl-5 outline-none pt-2'></textarea>
                                <button type="submit" className='git-btn sm:h-14 h-10 rounded-3xl bg-[#D8A61F] text-white w-2/6 ml-[70%]'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}