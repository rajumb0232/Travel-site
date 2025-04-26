import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "./Components/Hero";
import BookYourTrip from "./Components/BookYourTrip";
import PackageGallery from "./Components/PackageGallery";
import ServicesSlider from "./Components/ServicesSlider";
import Gallery from "./Components/Gallery";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Logout from "./Components/Logout";
import { useAlerts } from "../Context/AppContext";

const LandingPage = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Open Logout Modal
  const openLogoutModal = () => setShowLogoutModal(true);

  // Close Logout Modal
  const closeLogoutModal = () => setShowLogoutModal(false);

  return (
    <>
      {/* Navbar with Logout Button */}
      <Navbar askLogout={openLogoutModal} />

      {/* Logout Modal if triggered */}
      {showLogoutModal && <Logout onCancel={closeLogoutModal} />}

      {/* Main Sections */}
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
