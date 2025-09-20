import React, { useState } from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaTelegram,
  FaReddit,
  FaLinkedin,
} from "react-icons/fa6";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setClosing(false);
      }, 600); // match tailwind animation duration
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white h-16 md:h-20 px-3 md:px-6 flex justify-between items-center font-poppins shadow-md z-50">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img
          src="/icon.webp"
          alt="BSMS Club Logo"
          className="h-10 md:h-14 w-auto rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transform transition-all duration-300"
        />
      </a>

      {/* Right side: socials + hamburger (always visible) */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Social icons (restored links) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black hover:scale-125 transition"
            aria-label="X (Twitter)"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="https://www.instagram.com/thejigyasaclub?igsh=MWg3ZWVmMWxwbGtsMg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 hover:scale-125 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.reddit.com/u/pharolen_/s/BqA5iaplPQ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 hover:scale-125 transition"
            aria-label="Reddit"
          >
            <FaReddit size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-125 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 hover:scale-125 transition"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://telegram.org" /* replace with your real Telegram link */
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 hover:scale-125 transition"
            aria-label="Telegram"
          >
            <FaTelegram size={20} />
          </a>
        </div>

        {/* Hamburger (always visible) */}
        <button
          onClick={toggleMenu}
          className="ml-2 sm:ml-3 focus:outline-none animate-fadeIn"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiOutlineX size={26} /> : <HiOutlineMenu size={26} />}
        </button>
      </div>

      {/* Dropdown (sticks to right edge, responsive width, with closing animation) */}
      {menuOpen && (
        <div
          className={`absolute top-16 md:top-20 right-0 bg-blue-700 w-[min(88vw,16rem)] md:w-56 shadow-lg rounded-l-md flex flex-col py-4 space-y-2
          ${closing ? "animate-fadeOutRight" : "animate-fadeInRight"}`}
        >
          <a href="#" className="px-6 py-2 hover:bg-blue-600 transition">
            Home
          </a>
          <a href="#" className="px-6 py-2 hover:bg-blue-600 transition">
            About
          </a>
          <a href="#" className="px-6 py-2 hover:bg-blue-600 transition">
            Events
          </a>
          <a href="#" className="px-6 py-2 hover:bg-blue-600 transition">
            Library
          </a>
          
          {/* Internship - Direct Google Drive Download */}
          <a 
            href="https://drive.usercontent.google.com/download?id=15vXAG2Bm5eWb7QxLUEdb8D_h2Oj0ZuaQ&export=download"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 hover:bg-blue-600 transition"
          >
            Internship
          </a>
          
          <a href="#" className="px-6 py-2 hover:bg-blue-600 transition">
            Donation
          </a>
          <a href="#" className="px-6 py-2 hover:bg-blue-600 transition">
            Queries
          </a>
        </div>
      )}
    </nav>
  );
}
