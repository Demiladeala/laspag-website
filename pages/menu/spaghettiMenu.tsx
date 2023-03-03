import Image from 'next/image'
import React from 'react'
import menuimg from 'public/spag-menu1.png'
import menuimg2 from 'public/mega-pack-img.svg'
import formatCurrency from 'utilities/formatCurrency'
import { motion } from 'framer-motion'

type Props = {
  spagMenu: any,
}

export async function getServerSideProps() {
  const res = await fetch(`https://laspag.onrender.com/api/account/list_menu/`)
  const data = await res.json()

  return {
    props: {
      spagMenu: data,
    }, // will be passed to the page component as props
  }
}

export default function spaghettiMenu({spagMenu}: Props) {
  return (
    <>
      {
        
      }
    </>
  )
}