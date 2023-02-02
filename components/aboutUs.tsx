import React from 'react'
import AboutPlate from '../public/about-plate.png'
import {GiForkKnifeSpoon} from 'react-icons/gi'
import Babs from '../public/BabsDp.png'
import Image from 'next/image'

type Props = {}

export default function AboutUs({}: Props) {
  return (
    <div className='about-outer pb-20'>
      <div className="about-inner space-y-0 sm:space-y-10">
        <div className='flex pt-[50px] justify-center'>
          <h3 className='text-2xl sm:text-3xl font-bold pb-3 text-center pt-10'>About</h3>
          <GiForkKnifeSpoon size={25} className='text-[#D8A61F] mt-12 animate-bounce duration-75'/>
        </div>


        <div className="about-inner-top flex flex-start sm:items-center sm:space-x-10 sm:flex-row flex-col sm:space-y-0 space-y-5">
          <div className="about-image-top relative sm:place-self-center place-self-start sm:w-full w-4/6">
            <div className='relative sm:h-72 sm:w-[37rem] bg-[#D8A61F] rounded-r-full w-full h-36 my-2 sm:my-0'>
              <Image src={Babs} alt="Founder Image" className='absolute top-[50%] translate-y-[-50%] right-0 mr-3 w-3/6 sm:w-auto sm:h-full sm:py-3'></Image>
            </div>

          </div>
          <div className="about-text-top sm:px-7 px-3 border-l-4 border-l-[#D8A61F] space-y-1 w-5/6 mx-auto">
            <h2 className='font-bold sm:text-5xl text-xl'>ASULEWON BABALOLA</h2>
            <h4 className='sm:text-3xl font-normal text-sm'>FOUNDER & CEO</h4>
            <p className='sm:text-base font-normal pt-1 leading-tight pr-5 text-xs'>
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



        <div className="about-inner-bottom flex flex-start items-center sm:space-x-5 w-5/6 mx-auto sm:flex-row flex-col  sm:space-y-0 space-y-5 " >
          <div className="about-text-bottom sm:px-7 px-3 border-l-4 border-l-[#D8A61F] sm:order-1 order-2">
            <h2 className='font-bold sm:text-5xl text-xl'>LA-SPAG</h2>
            <p className='sm:text-base font-normal pt-2 leading-tight text-xs'>
              lorem ipsum dolor sit amet lorem ipsum dolo sit amet lorem ipsum dolor sit amet lorem
              ipsum dolor sit amet lorem ipsum dolor sit  lorem ipsum dolor sit amet lorem ipsum dolor
              amet lorem ipsum dolor sit amet
              <br/>
              lorem ipsum dolor sit amet lorem ipsum dolo sit amet lorem ipsum dolor sit amet lorem
              ipsum dolor sit amet lorem ipsum dolor sit  lorem ipsum dolor sit amet lorem ipsum dolor
              amet lorem ipsum dolor sit amet
            </p>
          </div>

          <div className='about-image-bottom sm:order-2 order-1 sm:w-4/6 py-3 sm:py-0'>
            <Image src={AboutPlate} alt="about-image" className='sm:h-[22em] sm:min-w-[32em]'></Image>
          </div>

        </div>
      </div>
      
    </div>
  )
}