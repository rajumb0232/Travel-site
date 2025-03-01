import React, { useState, useEffect } from "react";

// Option component: represents a single navigation item.
// It accepts a name, style modifiers (scrolled, mobile), an optional list of dropdown items,
// and an onClick handler for navigation.
export const Option = ({ name, scrolled, mobile, dropdownItems, onClick }) => {
  const baseClass = `cursor-pointer hover:underline ${
    mobile
      ? "block text-black hover:text-gray-700"
      : scrolled
      ? "text-gray-800 hover:text-gray-600"
      : "text-white hover:text-gray-200"
  }`;

  return (
    <li className="relative group">
      {/* Attach onClick to trigger navigation */}
      <span className={baseClass} onClick={onClick}>
        {name}
      </span>
      {dropdownItems && dropdownItems.length > 0 && (
        <ul
          className={
            mobile
              ? `mt-2 ml-4 flex flex-col ${
                  scrolled ? "bg-gray-100 text-gray-800" : "bg-white text-black"
                }`
              : `absolute left-0 top-full w-40 ${
                  scrolled
                    ? "bg-gray-100 text-gray-800"
                    : "bg-gray-900/50 text-white"
                } hidden group-hover:flex flex-col`
          }
        >
          {dropdownItems.map((item) => (
            <li
              key={item}
              className={`px-4 py-2 cursor-pointer ${
                mobile
                  ? scrolled
                    ? "hover:bg-gray-300"
                    : "hover:bg-gray-600"
                  : scrolled
                  ? "hover:bg-gray-300"
                  : "hover:bg-gray-600"
              }`}
              // Optionally, you can attach onClick here if you want dropdown items to trigger navigation
              onClick={onClick}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

// Logo component: displays one of two logos based on whether the mobile menu is open or the page is scrolled.
const Logo = ({ isOpen, scrolled }) => {
  const src =
    isOpen || scrolled ? "/logo-trip-buddy-dark.png" : "/logo-trip-buddy4.png";
  return <img src={src} alt="Brand Logo" className="h-10" />;
};

// DesktopNav component: displays the navigation options for desktop view.
const DesktopNav = ({ scrolled, onNavClick }) => (
  <ul className="hidden md:flex space-x-6">
    <Option name="Home" scrolled={scrolled} onClick={() => onNavClick("hero")} />
    <Option name="Book" scrolled={scrolled} onClick={() => onNavClick("book")} />
    <Option
      name="Packages"
      scrolled={scrolled}
      dropdownItems={["United States", "India", "France", "Germany"]}
      onClick={() => onNavClick("packages")}
    />
    <Option
      name="Services"
      scrolled={scrolled}
      onClick={() => onNavClick("services")}
    />
    <Option name="Gallery" scrolled={scrolled} />
    <Option name="About" scrolled={scrolled} />
  </ul>
);

// DesktopAuthButtons component: renders "Login" and "Register" buttons for desktop.
const DesktopAuthButtons = ({ scrolled }) => (
  <div className="hidden md:flex space-x-4">
    {["Login", "Register"].map((btn) => (
      <button
        key={btn}
        className={`border px-4 py-1.5 rounded transition-colors duration-300 ${
          scrolled
            ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
            : "border-white text-white hover:bg-white hover:text-gray-800"
        }`}
      >
        {btn}
      </button>
    ))}
  </div>
);

// MobileMenuButton component: hamburger button for mobile navigation.
const MobileMenuButton = ({ isOpen, toggleMenu, scrolled }) => (
  <div className="md:hidden flex items-center">
    <button onClick={toggleMenu} className="focus:outline-none">
      <svg
        className="w-6 h-6 transition-transform duration-300"
        fill="none"
        stroke={isOpen ? "black" : scrolled ? "black" : "white"}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  </div>
);

// MobileNav component: displays the mobile navigation menu.
const MobileNav = ({ scrolled, onNavClick }) => (
  <div className="mt-3 border-t transition-colors duration-300 bg-white border-black">
    <ul className="flex flex-col space-y-2 p-4">
      <Option
        name="Home"
        scrolled={scrolled}
        mobile
        onClick={() => onNavClick("hero")}
      />
      <Option
        name="Book"
        scrolled={scrolled}
        mobile
        onClick={() => onNavClick("book")}
      />
      <Option
        name="Packages"
        scrolled={scrolled}
        mobile
        dropdownItems={["United States", "India", "France", "Germany"]}
        onClick={() => onNavClick("packages")}
      />
      <Option
        name="Services"
        scrolled={scrolled}
        mobile
        onClick={() => onNavClick("services")}
      />
      <Option name="Gallery" scrolled={scrolled} mobile />
      <Option name="About" scrolled={scrolled} mobile />
    </ul>
    <div className="flex flex-col space-y-2 p-4 border-t transition-colors duration-300">
      {["Login", "Register"].map((btn) => (
        <button
          key={btn}
          className={`border px-4 py-1.5 rounded transition-colors duration-300 w-full text-center ${
            scrolled
              ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
              : "border-white text-white hover:bg-white hover:text-gray-800"
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  </div>
);

// Navbar component: the top navigation bar that adjusts styles based on scroll state and toggles the mobile menu.
const Navbar = ({ onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Update 'scrolled' state based on window scroll position.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav
      className={`p-3 w-full fixed z-40 transition-all duration-300 border-b ${
        isOpen
          ? "bg-white border-black"
          : scrolled
          ? "bg-white/90 border-white/90"
          : "bg-transparent border-white/90"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Logo isOpen={isOpen} scrolled={scrolled} />
        </div>
        <DesktopNav scrolled={scrolled} onNavClick={onNavClick} />
        <DesktopAuthButtons scrolled={scrolled} />
        <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} scrolled={scrolled} />
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <MobileNav scrolled={scrolled} onNavClick={onNavClick} />
      </div>
    </nav>
  );
};

export default Navbar;
