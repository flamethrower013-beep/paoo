"use client";
import React, { useRef, useEffect } from "react";
import { Star } from "react-feather";

const reviews = [
  {
    name: "Rohit Sharma",
    comment: "One of the best tournament platforms. I won multiple matches and withdrawals are super fast!",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    comment: "Great experience! The UI is smooth and support team is very responsive.",
    rating: 4,
  },
  {
    name: "Arjun Verma",
    comment: "Tournaments start on time and are well organized. Highly recommended.",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    comment: "Excellent support and easy to use. I’ve recommended it to all my friends!",
    rating: 5,
  },
  {
    name: "Raj Malhotra",
    comment: "Genuine platform with great competition. Loved the experience.",
    rating: 4,
  },
  {
    name: "Neha Singh",
    comment: "Withdrawals are really fast and tournaments are fair. Totally worth it!",
    rating: 5,
  },
];

export default function Reviews() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollStep = 320; // px per scroll
    const intervalTime = 3000; // 3 seconds

    const scrollInterval = setInterval(() => {
      if (!container) return;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollStep, behavior: "smooth" });
      }
    }, intervalTime);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section id="Reviews" className="relative px-6 py-[12vh]">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-center font-extrabold mb-2 text-white">What Players Say</h2>
        <p className="text-gray-600 text-lg">Trusted by gamers across the country</p>
      </div>

      {/* SHADOWS: absolutely positioned siblings of scroll container */}
      <div className="pointer-events-none absolute h-90 bottom-0 left-0  w-30 bg-gradient-to-r from-xiketic to-transparent z-30" />
      <div className="pointer-events-none absolute h-90 bottom-0 right-0  w-30 bg-gradient-to-l from-xiketic to-transparent z-30" />

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-2 relative z-10"
        style={{ scrollBehavior: "smooth" }}
      >
        {reviews.map(({ name, comment, rating }, idx) => (
          <div
            key={idx}
            className="min-w-[250px] sm:min-w-[300px] bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-3 space-x-1">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-800 italic mb-4">“{comment}”</p>
            <p className="text-gray-900 font-semibold text-right">— {name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
