import React from "react";
import { motion } from "framer-motion";

export default function PageHero({
  title,
  subtitle,
  gradient = "bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700",
  bgImage = null,
  bgPattern = null, // ✅ allow background pattern
}) {
  return (
    <motion.section
      className="relative flex flex-col justify-center items-center text-center min-h-[60vh] text-white overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Background: choose priority → image > pattern > gradient */}
      {bgImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      ) : bgPattern ? (
        <div className={`absolute inset-0 ${bgPattern} bg-repeat`} />
      ) : (
        <div className={`absolute inset-0 ${gradient}`} />
      )}

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 animate-fadeIn" />

      {/* Foreground content */}
      <div className="relative z-10 px-6">
        <h1
          className="opacity-0 text-5xl md:text-6xl font-extrabold mb-6 text-blue-600
                     [text-shadow:2px_2px_0px_#1e3a8a,4px_4px_0px_#172554,6px_6px_8px_rgba(0,0,0,0.7)]
                     animate-fadeInUp font-poppins"
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="opacity-0 max-w-2xl mx-auto text-xl md:text-2xl leading-relaxed
                       animate-fadeInUpDelayed font-slab italic"
          >
            {subtitle}
          </p>
        )}
      </div>
    </motion.section>
  );
}
