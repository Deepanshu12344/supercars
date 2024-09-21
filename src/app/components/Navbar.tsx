"use client";
import Link from 'next/link'
import React from 'react'
import Custombtn from './Custombtn'

const Navbar = () => {
  return (
    <div className='flex gap-4'>
    <div className='navbar'>
      <div className='nav__links'>
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/rent">RENT</Link>
      </div>
    </div>
    <div>
        <Custombtn 
            text='Login'
            disabled={false}
            className="bg-blue-800 rounded-full w-20 h-[45px] text-white"
            style={{}}
        />
    </div>
    </div>
    
  )
}

export default Navbar
