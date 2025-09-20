import React, { useState } from "react";
import { FaXTwitter, FaInstagram, FaGithub, FaTelegram, FaReddit, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white h-20 px-6 flex justify-between items-center font-poppins shadow-md z-50">
      
      {/* Logo pinned to top-left */}
      <a href="/" className="flex items-center">
        <img
          src="/icon.webp"
          alt="BSMS Club Logo"
          className="h-20 w-auto rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transform transition-all duration-300"
        />
      </a>

      {/* Right side: socials + hamburger */}
      <div className="flex items-center space-x-6">
        {/* Socials */}
        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:scale-125 transition"><FaXTwitter size={24} /></a>
          <a href="https://www.instagram.com/thejigyasaclub?igsh=MWg3ZWVmMWxwbGtsMg==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 hover:scale-125 transition"><FaInstagram size={24} /></a>
          <a href="https://www.reddit.com/u/pharolen_/s/BqA5iaplPQ" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 hover:scale-125 transition"><FaReddit size={24} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:scale-125 transition"><FaLinkedin size={24} /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 hover:scale-125 transition"><FaGithub size={24} /></a>
          <a href="https://telegram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:scale-125 transition"><FaTelegram size={24} /></a>
        </div>

        {/* Hamburger button (always visible) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-4 focus:outline-none"
        >
          {menuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Menu dropdown (shows when open) */}
      {menuOpen && (
        <div className="absolute top-20 right-4 bg-blue-700 w-48 shadow-lg rounded-md flex flex-col py-4 space-y-2">
          <a href="#" className="px-6 py-2 hover:bg-blue-600 transition">Home</a>
          <a href="#" className="px-6 py-2 hover:bg-blue-600 transition">About</a>
          <a href="#" className="px-6 py-2 hover:bg-blue-600 transition">Events</a>
          <a href="#" className="px-6 py-2 hover:bg-blue-600 transition">Library</a> 
          <a href="#" className="px-6 py-2 hover:bg-blue-600 transition">Internship</a> 
          <a href="#" className="px-6 py-2 hover:bg-blue-600 transition">Donation</a>
          <a href="#" className="px-6 py-2 hover:bg-blue-600 transition">Queries</a>

        </div>
      )}
    </nav>
  );
}
