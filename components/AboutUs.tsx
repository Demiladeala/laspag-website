import React from 'react'
import AboutPlate from '../public/about-plate.png'
import Babs from '../public/BabsDp.png'
import aboutBlob from '../public/about-blob.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

export default function AboutUs({}: Props) {
  return (
    <div className='about-outer pb-20 bg-gray-100'>
      <div className="about-inner space-y-0 sm:space-y-10">

        <div className='flex pt-[50px] justify-center'>
          <h3 className='text-2xl sm:text-3xl font-bold pb-20 text-center pt-10 uppercase font-poppins'>About</h3>
        </div>


        <div  id='career' className="about-inner-top  flex flex-col md:flex-row relative">
        </div>

        <div  id='career' className="about-inner-top  flex flex-col md:flex-row">
        </div>




      </div>    
    </div>
  )
}

{/* <div className="about-text-top sm:px-7 pl-3 border-l-[3px] border-l-[#facc15] space-y-1 w-5/6 mx-auto">
<h2 className='font-bold sm:text-5xl text-xl'>ASULEWON BABALOLA</h2>
<h4 className='sm:text-3xl font-normal text-base'>FOUNDER & CEO</h4>
<p className='sm:text-base font-normal pt-1 leading-tight pr-5 text-sm'>
  lorem ipsum dolor sit amet lorem ipsum dolo sit amet lorem ipsum dolor sit amet lorem
  ipsum dolor sit amet lorem ipsum dolor sit  lorem ipsum dolor sit amet lorem ipsum dolor
  amet lorem ipsum dolor sit amet
  <br/>
  lorem ipsum dolor sit amet lorem ipsum dolo sit amet lorem ipsum dolor sit amet lorem
  ipsum dolor sit amet lorem ipsum dolor sit  lorem ipsum dolor sit amet lorem ipsum dolor
  amet lorem ipsum dolor sit amet
</p>
</div> 


        <div className="about-inner-bottom flex flex-start items-center sm:space-x-5 sm:w-[90%] w-5/6 mx-auto sm:flex-row flex-col  sm:space-y-0 space-y-5 " >
          <div className="about-text-bottom sm:px-7 pl-3 border-l-[3px] border-l-[#facc15] sm:order-1 order-2">
            <h2 className='font-bold sm:text-5xl text-xl'>LA-SPAG</h2>
            <p className='sm:text-base font-normal pt-2 leading-tight text-sm'>
              lorem ipsum dolor sit amet lorem ipsum dolo sit amet lorem ipsum dolor sit amet lorem
              ipsum dolor sit amet lorem ipsum dolor sit  lorem ipsum dolor sit amet lorem ipsum dolor
              amet lorem ipsum dolor sit amet
              <br/>
              lorem ipsum dolor sit amet lorem ipsum dolo sit amet lorem ipsum dolor sit amet lorem
              ipsum dolor sit amet lorem ipsum dolor sit  lorem ipsum dolor sit amet lorem ipsum dolor
              amet lorem ipsum dolor sit amet
            </p>
          </div>

          <motion.div
          initial={{opacity:0,x:10}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1}}
          viewport={{once: true}}  
          className='about-image-bottom sm:order-2 order-1 sm:w-4/6 py-3 sm:py-0'>
            <Image src={AboutPlate} alt="about-image" className='sm:h-[22em] sm:min-w-[32em]'></Image>
          </motion.div>
*/}