import React, { useState, useEffect } from "react";

const getTextColor = (scrolled, mobile) => {
  if (mobile) return "text-black hover:text-gray-700";
  return scrolled
    ? "text-gray-800 hover:text-gray-600"
    : "text-white hover:text-gray-200";
};

const getDropdownBg = (scrolled, mobile) => {
  if (mobile) return "bg-transparent";
  return scrolled ? "bg-white text-black" : "bg-black/60 text-white";
};

export const Option = ({ name, scrolled, mobile, dropdownItems, href }) => (
  <li className="relative group">
    {href ? (
      <a
        href={href}
        className={`cursor-pointer hover:underline block ${getTextColor(
          scrolled,
          mobile
        )}`}
      >
        {name}
      </a>
    ) : (
      <span
        className={`cursor-pointer hover:underline block ${getTextColor(
          scrolled,
          mobile
        )}`}
      >
        {name}
      </span>
    )}

    {dropdownItems?.length > 0 && (
      <ul
        className={`absolute left-0 top-full w-40 hidden group-hover:flex flex-col transition-opacity duration-300 ${
          mobile ? "block mt-2 ml-4 space-y-2" : "group-hover:flex"
        } ${getDropdownBg(scrolled, mobile)} rounded-md shadow-lg`}
      >
        {dropdownItems.map((item) => (
          <li key={item} className="px-4 py-2 cursor-pointer hover:bg-gray-300">
            {item}
          </li>
        ))}
      </ul>
    )}
  </li>
);

const Logo = ({ isOpen, scrolled }) => (
  <img
    src={
      isOpen || scrolled ? "/logo-trip-buddy-dark.png" : "/logo-trip-buddy4.png"
    }
    alt="Brand Logo"
    className="h-10"
  />
);

const AuthButtons = ({ scrolled, isMobile }) => {
  const baseClass = `border px-4 py-1.5 rounded-lg transition-colors duration-300 w-full md:w-auto`;
  const dynamicClass = scrolled && !isMobile
    ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
    : !isMobile
    ? "border-white text-white hover:bg-white hover:text-gray-800"
    : "border-transparent text-white bg-gray-800";
  return ["Login", "Register"].map((btn) => (
    <button key={btn} className={`${baseClass} ${dynamicClass}`}>
      {btn}
    </button>
  ));
};

const navItems = {
  Home: { id: "hero", dropdownItems: undefined },
  Book: { id: "book", dropdownItems: undefined },
  Packages: {
    id: "packages",
    dropdownItems: ["United States", "India", "France", "Germany"],
  },
  Services: { id: "services", dropdownItems: undefined },
  Gallery: { id: "gallery", dropdownItems: undefined },
  AboutUs: { id: "about-us", dropdownItems: undefined },
};

const NavLinks = ({ scrolled, mobile }) => (
  <>
    {Object.entries(navItems).map(([section, sectionAttr]) => (
      <Option
        key={section}
        name={section}
        scrolled={scrolled}
        mobile={mobile}
        href={`#${sectionAttr.id}`}
        dropdownItems={sectionAttr.dropdownItems}
      />
    ))}
  </>
);

const DesktopNav = ({ scrolled }) => (
  <ul className="hidden md:flex space-x-6">
    <NavLinks scrolled={scrolled} />
  </ul>
);

const MobileNav = ({ scrolled }) => (
  <div className="mt-3 border-t bg-transparent border-black transition-colors duration-300">
    <ul className="flex flex-col space-y-2 p-4">
      <NavLinks scrolled={scrolled} mobile />
    </ul>
    <div className="flex flex-col space-y-2 p-4 border-t">
      <AuthButtons scrolled={scrolled} isMobile={true} />
    </div>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`p-3 fixed left-0 right-0 z-40 transition-all duration-300  ${
        isOpen
          ? "bg-white shadow-2xl rounded-b-2xl border-black left-0 right-0 top-0"
          : scrolled
          ? "bg-white border-transparent border-t border-t-gray-100 left-8 right-8 top-4 rounded-2xl px-5 shadow-lg"
          : "bg-transparent border-b border-white/90"
      }`}
    >
      <div className="flex justify-between items-center">
        <Logo isOpen={isOpen} scrolled={scrolled} />
        <DesktopNav scrolled={scrolled} />
        <div className="hidden md:flex space-x-4">
          <AuthButtons scrolled={scrolled} isMobile={false} />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 transition-transform duration-300"
            fill="none"
            stroke={isOpen || scrolled ? "black" : "white"}
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
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] rounded" : "max-h-0"
        }`}
      >
        <MobileNav scrolled={scrolled} />
      </div>
    </nav>
  );
};

export default Navbar;
