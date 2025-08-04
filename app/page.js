
import React from 'react'
import Navbar from './componets/Navbar'
import Hero from './componets/Hero'
import Howtouse from './componets/Howtouse'
import Features from './componets/Features'
import Reviews from './componets/Reviews'
import Newsletter from './componets/Newsletter'




function Home() {
  return (
  <>
      <Navbar />
      <div className="section bg-xiketic px-[11vw] pb-4">

      <Hero/>     
      <Howtouse/>
      <Features/>
      <Reviews/>
      <Newsletter/>
    </div>
  </>
  )
}

export default Home
