import React from "react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Us Section with videos on left and right */}
      <section className="relative py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left side video (local hosted video) */}
          <div className="flex justify-center">
            <video
              className="w-72 h-48 rounded-xl shadow-xl object-cover transform hover:scale-105 transition-all duration-300"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/left-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Middle floating About card */}
          <div
            className="
              bg-white
              rounded-2xl
              shadow-2xl
              p-8
              transform
              transition-all
              duration-500
              hover:scale-105
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
              animate-fadeInUp
            "
          >
            <h2 className="text-3xl font-extrabold mb-4 text-center text-gray-800">
              About Us
            </h2>
            <p className="leading-relaxed text-gray-600 text-lg text-center">
              Welcome to the BSMS Club site! We’re a creative community
              that shares ideas, builds projects, and has fun while learning
              together.
            </p>
          </div>

          {/* Right side video (YouTube example) */}
          <div className="flex justify-center">
            <iframe
              className="w-72 h-48 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
