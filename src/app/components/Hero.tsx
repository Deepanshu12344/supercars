import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div>
      <div className='hero__secondary'>
        <div className='title'>
          <p>Find Your Dream Car</p>
        </div>
        <div className='flex justify-center mt-14'>
          <Navbar />
        </div>
        <Image 
            src="/main.png"
            alt='mustang'
            fill className="car__image"
        />
      </div>
    </div>
  )
}

export default Hero