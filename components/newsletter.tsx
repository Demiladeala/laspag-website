import React from 'react'

type Props = {}

export default function Newsletter({}: Props) {
  return (
    <div className='newsletter-outer py-20 font-normal'>
      <div className="newsletter-inner w-4/6 mx-auto rounded-3xl bg-white text-center space-y-10 p-14">
        <h3 className='text-3xl font-bold border-l-[#D8A61F]'>SUBSCRIBE TO OUR NEWSLETTER</h3>
        <p className='text-xl'>Subscribe to our newsletter to get updates on our products</p>

        <form action="" className='w-5/6 mx-auto h-20 flex flex-between border-[#D8A61F] rounded-3xl border-2 overflow-hidden'>
          <input type="email" name="newsletter" id="newsletter" required className='text-xl h-full w-full bg-[transparent] outline-none border-none pl-5 text-black ' placeholder='Enter Email Address'/>
          <button type="submit" className='news-btn h-full w-2/6 bg-[#D8A61F] rounded-2xl text-xl text-white'>Subscribe</button>
        </form>
        <h6 className='!py-0 !my-2 text-left w-5/6 mx-auto pl-5 text-sm'>Don’t worry you’ll not be spammed</h6>
      </div>
    </div>
  )
}