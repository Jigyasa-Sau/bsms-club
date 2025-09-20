import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const location = useLocation();

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
      }, 600); // match duration
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <section className="relative text-center pt-24 md:pt-32 pb-16 shadow min-h-[60vh] overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://media.giphy.com/media/5CVbRwy9v6Pm2MmBzO/giphy.mp4"
      />
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Foreground */}
      <div className="relative z-10 text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold animate-fadeInUp">
          Welcome to the Jigyasa
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg md:text-xl animate-fadeInUp">
          Bringing together students to learn, share, and grow. Join us for
          events, projects, and fun activities!
        </p>

        {/* Join Button */}
        <div className="relative flex justify-center mt-6">
          <button
            onClick={toggleMenu}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all animate-fadeInRight"
          >
            Join Now
          </button>

          {/* Submenu */}
          {menuOpen && (
            <div
              className={`absolute top-full mt-3 w-full sm:w-[500px] bg-white/20 text-white backdrop-blur-md rounded-lg shadow-lg px-4 sm:px-6 py-4
                ${closing ? "animate-fadeOutUp" : "animate-fadeInDown"}`}
            >
              <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
                <Link to="/bioclub" className="hover:text-blue-300 font-medium">BioClub</Link>
                <Link to="/events" className="hover:text-blue-300 font-medium">ChemClub</Link>
                <Link to="/membership" className="hover:text-blue-300 font-medium">PhyClub</Link>
                <Link to="/contact" className="hover:text-blue-300 font-medium">MathClub</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
