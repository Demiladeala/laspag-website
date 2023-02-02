import React from 'react'

type Props = {}

export default function Banner({}: Props) {
  return (
    <div className='banner-outer sm:py-20 py-20 pt-80'>
        <div className="banner w-5/6 mx-auto rounded-3xl bg-[#D8A61F] text-white sm:p-20 p-10  text-center sm:space-y-10 space-y-5 font-bold">
            <h2 className='sm:text-5xl text-sm'>Join our member and receive a discount of up to 10%</h2>
            <button className='news-btn sm:h-16 h-8 rounded-3xl bg-white px-10 text-[#D8A61F] sm:text-lg text-[7px]'>Sign Up</button>
        </div>
    </div>
  )
}