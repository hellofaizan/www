import Image from 'next/image'
import React from 'react'
import Online from './online'

export default function Profile() {
  return (
    <div className='flex items-center gap-3 md:gap-4'>
        <div className='relative'>
            <Image src='/helloofaizan.png' width={150} height={150} alt='Hellofaizan' className='w-20 h-20 md:w-36 md:h-36' />
            <Online />
            {/* <span className='absolute bottom-0 right-0 md:right-3 md:bottom-3 bg-green-500 rounded-full h-5 w-5 border-4' /> */}
        </div>
        <div className='flex flex-col items-start'>
            <h1 className='text-3xl md:text-5xl font-istok font-bold'>Hello, I'm Faizan</h1>
            <p className='text-lg font-light'>Full stack web, android dev</p>
        </div>
    </div>
  )
}