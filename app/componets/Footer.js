"use client";
import React from "react";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "react-feather";

export default function Footer() {
  return (
    <footer className="bg-raisin-black-3  text-gray-300 pt-12 pb-8 px-6 z-50 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-zinc-700 pb-8">
        {/* Brand Info */}
        <div>
          <div className="logo flex justify-center items-center">
              <Image className='rounded-[50%]' width={90} height={90} src='/assets/logo.png' alt='Logo'/>
              <h1 className='text-3xl font-extrabold'>PAO</h1>
                  </div>
          <p className="text-sm text-gray-400">
            The ultimate destination for PUBG, Free Fire & Ludo tournaments.
            Compete, win, and earn real rewards.
          </p>
        </div>
        <div></div>

        {/* Games */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Games</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">PUBG Mobile</a></li>
            <li><a href="#" className="hover:text-white">Free Fire</a></li>
            <li><a href="#" className="hover:text-white">Ludo</a></li>
            <li><a href="#" className="hover:text-white">More Games</a></li>
          </ul>
        </div>

        {/* Support & Legal */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Pao. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white"><Facebook size={18} /></a>
          <a href="#" className="hover:text-white"><Instagram size={18} /></a>
          <a href="#" className="hover:text-white"><Twitter size={18} /></a>
          <a href="#" className="hover:text-white"><Youtube size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
