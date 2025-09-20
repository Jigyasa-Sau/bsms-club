import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const location = useLocation();

  // Reset submenu on route change
  useEffect(() => {
    setMenuOpen(false);
    setClosing(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setClosing(false);
      }, 300);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <section className="relative text-center pt-28 md:pt-32 pb-20 shadow min-h-[60vh] overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://media.giphy.com/media/5CVbRwy9v6Pm2MmBzO/giphy.mp4"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Foreground Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Welcome to the Jigyasa
        </h1>
        <p className="mt-4 max-w-xl mx-auto">
          Bringing together students to learn, share, and grow. Join us for
          events, projects, and fun activities!
        </p>

        {/* Join Now Button + Submenu */}
        <div className="relative flex justify-center mt-6">
          <button
            onClick={toggleMenu}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
          >
            Join Now
          </button>

          {menuOpen && (
            <div
              className={`
                absolute top-full mt-3
                w-[500px] bg-white/20 text-white 
                backdrop-blur-md
                rounded-lg shadow-lg px-6 py-4
                ${closing ? "animate-fadeOutUp" : "animate-fadeInDown"}
              `}
            >
              <div className="flex justify-between gap-4 text-sm md:text-base">
                {/* ✅ updated link from Volunteer → BioClub */}
                <Link to="/bioclub" className="hover:text-blue-300 font-medium">
                  BioClub
                </Link>
                <Link to="/events" className="hover:text-blue-300 font-medium">
                  ChemClub
                </Link>
                <Link to="/membership" className="hover:text-blue-300 font-medium">
                  PhyClub
                </Link>
                <Link to="/contact" className="hover:text-blue-300 font-medium">
                  MathClub
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
