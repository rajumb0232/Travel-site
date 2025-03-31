import React, { useState, useEffect, forwardRef } from "react";

const Hero = () => {
  // List of countries to display
  const countries = ["USA", "India", "France", "Germany", "Brazil", "Japan"];

  // State to keep track of the current country index
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);

  // Change the country index every 0.3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCountryIndex((prev) => (prev + 1) % countries.length);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-[url('/travel-theme-image.webp')]"
      id="hero"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-2 opacity-75">
          Welcome to TripBuddy
        </h2>
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-4">
          Visit {countries[currentCountryIndex]}
        </h1>
        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
          <a href="#book">Book Now</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
