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
  const heroRef = useRef(null);
  const bookYourTripRef = useRef(null);
  const packagesRef = useRef(null);
  const servicesRef = useRef(null);

  const scrollToSection = (section) => {
    console.log("scrolling...");
    switch (section) {
      case "hero":
        heroRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "book":
        bookYourTripRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "packages":
        packagesRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "services":
        servicesRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar onNavClick={scrollToSection} />
      <Hero ref={heroRef} onNavClick={scrollToSection} />
      <BookYourTrip ref={bookYourTripRef} onNavClick={scrollToSection} />
      <PackageGallery ref={packagesRef} onNavClick={scrollToSection} />
      <ServicesSlider ref={servicesRef} onNavClick={scrollToSection} />
      <Gallery />
      <AboutUs />
      <Footer />
    </>
  );
};

export default LandingPage;
