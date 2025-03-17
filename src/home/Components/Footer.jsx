import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10 rounded-t-3xl px-4 sm:px-6 md:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Brand Name */}
        <img src="/logo-trip-buddy4.png" alt="Tripbuddy" className="h-10" />

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 sm:space-x-6 text-gray-400 text-sm mb-4 md:mb-0">
          <a href="#hero" className="hover:text-white transition duration-300">Home</a>
          <a href="#book" className="hover:text-white transition duration-300">Book Your Trip</a>
          <a href="#packages" className="hover:text-white transition duration-300">Packages</a>
          <a href="#services" className="hover:text-white transition duration-300">Services</a>
          <a href="#gallery" className="hover:text-white transition duration-300">Gallery</a>
          <a href="#about-us" className="hover:text-white transition duration-300">About Us</a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs sm:text-sm mt-4">
        &copy; {new Date().getFullYear()} Tripbuddy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;