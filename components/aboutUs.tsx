import React from 'react'
import AboutPlate from '../public/about-plate.png'
import Babs from '../public/BabsDp.png'
import Image from 'next/image'

type Props = {}

export default function AboutUs({}: Props) {
  return (
    <div className='about-outer pb-20'>
      <div className="about-inner space-y-0">
        <h3 className='text-[#D8A61F] font-bold text-4xl text-center pb-5'>About</h3>


        <div className="about-inner-top flex flex-start items-center space-x-10">
          <div className="about-image-top relative ">
            <div className='relative h-72 w-[37rem] bg-[#D8A61F] rounded-r-full'>
              <Image src={Babs} alt="Founder Image" className='absolute top-[50%] translate-y-[-50%] right-0 mr-3'></Image>
            </div>

          </div>
          <div className="about-text-top px-7 border-l-4 border-l-[#D8A61F] space-y-1">
            <h2 className='font-bold text-5xl'>ASULEWON BABALOLA</h2>
            <h4 className='text-3xl font-normal'>FOUNDER & CEO</h4>
            <p className='text-base font-normal pt-1 leading-tight pr-5'>
              lorem ipsum dolor sit amet lorem ipsum dolo sit amet lorem ipsum dolor sit amet lorem
              ipsum dolor sit amet lorem ipsum dolor sit  lorem ipsum dolor sit amet lorem ipsum dolor
              amet lorem ipsum dolor sit amet
              <br/>
              lorem ipsum dolor sit amet lorem ipsum dolo sit amet lorem ipsum dolor sit amet lorem
              ipsum dolor sit amet lorem ipsum dolor sit  lorem ipsum dolor sit amet lorem ipsum dolor
              amet lorem ipsum dolor sit amet
            </p>
          </div>
        </div>



        <div className="about-inner-bottom flex flex-start items-center space-x-10 w-5/6 mx-auto " >
          <div className="about-text-bottom w-3/6 pl-7 border-l-4 border-l-[#D8A61F]">
            <h2 className='font-bold text-5xl'>LA-SPAG</h2>
            <p className='text-base font-normal pt-2 leading-tight'>
              lorem ipsum dolor sit amet lorem ipsum dolo sit amet lorem ipsum dolor sit amet lorem
              ipsum dolor sit amet lorem ipsum dolor sit  lorem ipsum dolor sit amet lorem ipsum dolor
              amet lorem ipsum dolor sit amet
              <br/>
              lorem ipsum dolor sit amet lorem ipsum dolo sit amet lorem ipsum dolor sit amet lorem
              ipsum dolor sit amet lorem ipsum dolor sit  lorem ipsum dolor sit amet lorem ipsum dolor
              amet lorem ipsum dolor sit amet
            </p>
          </div>

          <div className='about-image-bottom w-auto'>
            <Image src={AboutPlate} alt="about-image" className='w-full'></Image>
          </div>

        </div>
      </div>
      
    </div>
  )
}