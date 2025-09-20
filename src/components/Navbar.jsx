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
      }, 600); // match animation
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white h-20 px-4 md:px-6 flex justify-between items-center font-poppins shadow-md z-50">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img
          src="/icon.webp"
          alt="BSMS Club Logo"
          className="h-12 md:h-14 w-auto rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transform transition-all duration-300"
        />
      </a>

      {/* Socials + Hamburger */}
      <div className="flex items-center space-x-4">
        <div className="flex space-x-3">
          <FaXTwitter size={22} />
          <FaInstagram size={22} />
          <FaReddit size={22} />
          <FaLinkedin size={22} />
          <FaGithub size={22} />
          <FaTelegram size={22} />
        </div>
        <button
          onClick={toggleMenu}
          className="ml-4 focus:outline-none animate-fadeIn"
        >
          {menuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Dropdown */}
      {menuOpen && (
        <div
          className={`
            absolute top-20 right-0 bg-blue-700 w-64 md:w-56 shadow-lg rounded-l-md flex flex-col py-4 space-y-2
            ${closing ? "animate-fadeOutRight" : "animate-fadeInRight"}
          `}
        >
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
