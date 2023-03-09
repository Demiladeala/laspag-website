import Image from 'next/image'
import React from 'react'
import menuimg from 'public/burger-menu.jpg'
import { useShoppingCart } from 'context/ShoppingCartContext'

type Props = {
  burgerMenu: any
  id: number
}

export async function getServerSideProps() {
  const res = await fetch(`https://laspag.onrender.com/api/account/list_menu/`)
  const data = await res.json()


  return {
    props: {
      burgerMenu: data.slice(3,6),
    }, // will be passed to the page component as props
  }
}

export default function spaghettiMenu({ burgerMenu, id}: Props) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
  const quantity = getItemQuantity(id)
  return (
    <>
    <div className='py-10 spagMenu-outer'>
      <h1 className='w-full text-center font-bold text-lg sm:text-xl py-20 mb-24'>BURGER, CHICKEN AND CHIPS</h1>
      <div className='w-[90%] m-auto grid grid-cols-1 md:grid-cols-3 gap-20'>
      {
        burgerMenu.map((burger: any) => {
          return(
            <div key={burger.menu_title} className='shadow-card rounded-3xl space-y-2 mb-20 relative'>
              <div className='absolute w-full top-[-120px] flex justify-center'>
                <div className='border-8 border-[#facc15] w-[170px] h-[170px] rounded-full'>
                     <Image src={menuimg} alt='spaghetti' className='w-[170px] min-h-full object-cover bg-center rounded-full'></Image>
                </div>
              </div>
              <h3 className='text-center text-lg sm:text-xl font-bold pt-16'>{burger.menu_title}</h3>
              <p className='text-center text-[#718096] m-2'>Indulge in the taste of our premium, handcrafted burger,chicken and chips - made with only the finest ingredients and authentic recipes.</p>
              <div className='w-[95%] mx-auto pb-10 flex justify-between items-center flex-row'>
                <p className='border border-black px-3 py-2 rounded-lg'>₦{burger.price}</p>
                <div>
                  {quantity === 0? 
                     <button onClick={() => increaseCartQuantity(id)} className='px-4 py-2 bg-[#facc15] hover:bg-opacity-80 text-white rounded-lg text-center'>Add to Cart</button>
                   : <div className='flex flex-col items-center gap-2'>
                      <div className='flex items-center justify-center gap-2'>
                        <button onClick={() => decreaseCartQuantity(id)} className='bg-[#facc15] px-3 py-2 text-white rounded-lg'>-</button>
                        <div>
                          <span className='text-lg font-semibold'>{quantity}</span> in cart
                        </div>
                        <button onClick={() => increaseCartQuantity(id)} className='bg-[#facc15] px-3 py-2 text-white rounded-lg'>+</button>
                      </div>
                      <button onClick={() => removeFromCart(id)} className='px-3 py-2 rounded-lg bg-red-500 text-white text-xs'>Remove</button>
                   </div>
                   }
                </div>
              </div>
              
            </div>
          )
        })
      }
      </div>
    </div>
    </>
  )
}