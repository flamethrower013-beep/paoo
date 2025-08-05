"use client"
import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import Carousel from './Carousel.js'
const slides = [
  {
    logo: '/assets/Bgmi.jpg',
    backImage: '/assets/Bgmi-bg.jpg',
  },
  {
    logo: '/assets/Free Fire.jpg',
    backImage: '/assets/freefirebg.jpg',
  },
  {
    logo: '/assets/Ludo.jpg',
    backImage: '/assets/ludobg.jpg',
  },
]

function Hero() {
const [currentSlide, setCurrentSlide] = useState(0)

useEffect(() => {
  console.log("Slide changed:", currentSlide)
  console.log("Background image:", slides[currentSlide].backImage);
}, [currentSlide]);

  return (
    <div
      className="h-[90vh] pt-[14vh] flex justify-center lg:justify-between items-center object-cover transition-all duration-700 ease-in-out"
      
    >
      <Image className=' h-[90vh] w-full  transition-all duration-700 opacity-20 ease-in-out absolute left-0' src={null} alt='Background'
      style={{
        backgroundImage: `url(${slides[currentSlide].backImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      <div className="pointer-events-none absolute h-40 w-full bottom-2  left-0 bg-gradient-to-b from-transparent to-xiketic z-30" />
      <div className="left flex flex-col gap-2 z-10">
        <h1 className='hidden font-extrabold text-7xl lg:block'>CREATE</h1>
        <h1 className='hidden font-extrabold text-7xl lg:block'>MANAGE</h1>
        <h1 className='hidden font-extrabold text-7xl lg:block'>EARN</h1>
        <h1 className=' md:block lg:hidden text-5xl font-extrabold'>CREATE MANAGE EARN</h1>
        <p className='mx-auto lg:mx-0'>Earn While you play.Make your Own Tournaments </p>
        <input type="button" className='bg-orange px-4 py-2 border border-transparent 
        duration-200 ease-in-out font-bold rounded w-full hover:border-orange
        hover:text-orange hover:bg-raisin-black-2' value="Sign Up/Sign in" />
      </div>
    <div className="right max-w-full">
        <div className="w-full hidden lg:block">
        <Carousel autoSlide={true} onSlideChange={setCurrentSlide}>
            {
                slides.map((s,idx) =>(
                        <Image className=' rounded-full' height={400} width={400} key={idx} src={s.logo} alt='Game'/>
                    ))
                }
            </Carousel>
        </div>
    </div>

      </div>
         )
}

export default Hero
