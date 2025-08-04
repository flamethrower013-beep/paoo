import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

function Carousel({ children: slides, autoSlide = false, autoSlideInterval = 5000, onSlideChange }) {
  const [curr, setCurr] = useState(0);

  const updateCurr = (newIndex) => {
    setCurr(newIndex);
    if (onSlideChange) onSlideChange(newIndex); // <-- notify parent
  };

  const prev = () => {
    updateCurr(curr === 0 ? slides.length - 1 : curr - 1);
  };

  const next = () => {
    updateCurr(curr === slides.length - 1 ? 0 : curr + 1);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [curr]);

  return (
    <div className='overflow-hidden h-[320px] w-[320px] relative rounded-full inset-shadow-raisin-black-1 shadow-2xl'>
      <div
        className="flex z-[-1] transition-transform ease-out duration-700"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-1">
        <button
          onClick={prev}
          className="p-1 rounded-full border border-orange duration-150 ease-in hover:border-transparent"
        >
          <ChevronLeft size={30} className="text-orange" />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full border border-orange duration-150 ease-in hover:border-transparent"
        >
          <ChevronRight size={30} className="text-orange" />
        </button>
      </div>
    </div>
  );
}
export default Carousel;
