import Image from 'next/image'
import React from 'react'
import "../../../globals.css"
const WelcomeBanner = () => {
  return (
    <div className='flex gap-5 items-center  rounded-xl p-7 mb-2 shadow border  '>
      <Image src={'/panda.webp'}
        width={100}
        height={100}
        alt='panda'
      />
      <div >
        <h2 className='font-bold text-[29px]'>Welcome to <span className='text-primary Logo'>Umidjon</span> Academy</h2>
        <h2 className='text-gray-500'>Explore,Learn and Build Life Projects</h2>
      </div>
    </div>
  )
}

export default WelcomeBanner