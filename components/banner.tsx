import React from 'react'

type Props = {}

export default function Banner({}: Props) {
  return (
    <div className='banner-outer py-20'>
        <div className="banner w-5/6 mx-auto rounded-3xl bg-[#D8A61F] text-white p-20 text-center space-y-10 font-bold">
            <h2 className='text-5xl'>Join our member and receive a discount of up to 10%</h2>
            <button className='news-btn h-16 rounded-3xl bg-white px-10 text-[#D8A61F] text-lg'>Sign Up</button>
        </div>
    </div>
  )
}