import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <div className='hero__secondary'>
        <div className='title'>
          <p>Find Your Dream Car</p>
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