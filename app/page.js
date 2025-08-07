
import React from 'react'
import Navbar from './componets/Navbar'
import Hero from './componets/Hero'
import Howtouse from './componets/Howtouse'
import Features from './componets/Features'
import Reviews from './componets/Reviews'
import Newsletter from './componets/Newsletter'




function Home() {
  return (
  <div className=" text-white">
      <Navbar />
      <Hero/>     
      <div className="section bg-xiketic px-[11vw] pb-4">

      <Howtouse/>
      <Features/>
      <Reviews/>
      <Newsletter/>
    </div>
  </div>
  )
}

export default Home
