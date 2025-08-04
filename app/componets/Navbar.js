"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Menu, X,PlayCircle, Star, UserPlus, Zap } from 'react-feather'

function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
    <nav className='z-40 flex justify-between items-center h-auto w-full py-0 px-10 lg:px-28 bg-raisin-black-3 fixed top-0 '>
        <div className="logo flex justify-center items-center">
    <Image className='rounded-[50%]' width={80} height={80} src='/assets/logo.png' alt='Logo'/>
    <h1 className='text-3xl font-extrabold'>PAO</h1>
        </div>
        <ul className="hidden lg:flex items-center justify-center ">
            <li><a href="#Howtouse" className='flex gap-2 justify-center items-center font-semibold px-4 py-7 border-b-4 border-transparent
             duration-300 ease-in-out hover:border-orange
              hover:bg-raisin-black-2 hover:text-orange'>How To Use<PlayCircle className='text-orange' size={20}></PlayCircle> </a></li>
            <li><a href="#Features" className='flex gap-2 justify-center items-center font-semibold px-4 py-7 border-b-4 border-transparent 
             duration-300 ease-in-out hover:border-orange
              hover:bg-raisin-black-2 hover:text-orange'>Features<Zap className='text-orange' size={20}></Zap></a></li>
            <li><a href="#Reviews" className='flex gap-2 justify-center items-center font-semibold px-4 py-7 border-b-4 border-transparent
              duration-300 ease-in-out hover:border-orange
               hover:bg-raisin-black-2 hover:text-orange'>Reviews<Star className='text-orange' size={20}></Star></a></li>
            <li><a href="#" className='flex gap-2 justify-center items-center bg-orange font-semibold px-2 py-1 ml-2 border-b-4 rounded border-transparent 
             duration-300 ease-in-out border hover:border-orange
              hover:bg-raisin-black-2 hover:text-orange'><UserPlus size={20}></UserPlus>Sign-Up</a></li>
        </ul>
        <div className="lg:hidden flex items-center">
            <button  onClick={toggleMenu}>
              {isOpen ? null : <Menu size={40} />}
            </button>
  {isOpen && (
    <ul className="lg:hidden flex flex-col h-full w-auto items-center bg-raisin-black-3 fixed right-0 top-0 z-50">
      <li><X className=' bg-raisin-black-2 text-white w-80 h-20 py-3' onClick={toggleMenu}/></li>
    <li className='w-full'><a href="#Howtouse" className='flex items-center justify-center font-semibold py-7 mt-3 border-b-4 border-transparent
     duration-300 ease-in-out hover:border-orange
      hover:bg-raisin-black-2 hover:text-orange'>How To Use<PlayCircle className='text-orange' size={20}></PlayCircle> </a></li>
    <li className='w-full'><a href="#Features" className='flex items-center justify-center font-semibold py-7 border-b-4 border-transparent 
     duration-300 ease-in-out hover:border-orange
      hover:bg-raisin-black-2 hover:text-orange'>Features<Zap className='text-orange' size={20}></Zap></a></li>
    <li className='w-full'><a href="#Reviews" className='flex items-center justify-center font-semibold py-7 border-b-4 border-transparent 
     duration-300 ease-in-out hover:border-orange
      hover:bg-raisin-black-2 hover:text-orange'>Reviews<Star className='text-orange' size={20}></Star></a></li>
    <li className=''><a href="#" className='flex items-center justify-center bg-orange font-semibold px-28 py-1 mt-3 border-b-4 rounded border-transparent 
     duration-300 ease-in-out border hover:border-orange
     hover:bg-raisin-black-2 hover:text-orange'><UserPlus size={20}></UserPlus>Sign-Up</a></li>
</ul>
)}
</div>
</nav>
</>
  )
}

export default Navbar
