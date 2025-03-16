import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "./Components/Hero";
import BookYourTrip from "./Components/BookYourTrip";
import PackageGallery from "./Components/PackageGallery";
import ServicesSlider from "./Components/ServicesSlider";
import Gallery from "./Components/Gallery";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <BookYourTrip />
      <PackageGallery />
      <ServicesSlider />
      <Gallery />
      <AboutUs />
      <Footer />
    </>
  );
};

export default LandingPage;
