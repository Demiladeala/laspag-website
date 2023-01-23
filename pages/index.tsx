import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>La-Spag</title>
        <meta name="La Spag" content="Order your spaghetti on the La Spag Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='flex bg-yellow-400 uppercase text-center p-5 mx-auto items-center justify-center'>
        LA-SPAG
      </div>
    </>
  )
}
