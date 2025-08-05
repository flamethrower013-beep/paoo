import React from 'react'

function Howtouse() {
  return (
    <div id='Howtouse' className='h-[50vh] sm:h-[85vh] flex flex-col gap-4 justify-center items-center'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl text-center font-extrabold'>How To Use</h1>
    <div className="h-0 pb-[280px] w-[370px] md:pb-[460px] sm:pb-[400px] sm:w-[600px] relative overflow-hidden md:w-[700px]">
      <iframe className='absolute top-0 left-0 w-full h-full rounded pt-[8vh]' src="https://www.youtube.com/embed/5AhLRjkFeZk?si=oOzFzGg9BJuyE6br" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
    </div>
    </div>
  )
}

export default Howtouse
