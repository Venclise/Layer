import React from 'react'
import Image from "next/image"
export default function Footer() {
  return (
    <div className='flex items-center justify-center lg:justify-between flex-col gap-8 lg:gap-0 lg:flex-row pad-2 w-full '>
        <Image src="/logo.svg" width="120" height="40" alt="Logo" />

        <div className='flex items-center gap-8'>
            <a href="#" className='text-gray-400 text-md hover:text-white transition-all'>Contact</a>
            <a href="#" className='text-gray-400 text-md hover:text-white transition-all'>Privacy Policy</a>
            <a href="#" className='text-gray-400 text-md hover:text-white transition-all'>Terms & Conditions</a>

        </div>
    </div>
  )
}
