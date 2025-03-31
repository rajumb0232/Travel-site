import { useState } from "react";
import Logout from "./Logout";
import { Link } from "react-router-dom";

const AuthButtons = ({ scrolled, isMobile, onLogoutRequest}) => {
  const authLinkData = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ];
  const authData = localStorage.getItem("current_login");

  const baseClass = `border px-4 py-1.5 rounded-lg transition-colors duration-300 w-full md:w-auto`;
  const dynamicClass =
    scrolled && !isMobile
      ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
      : !isMobile
      ? "border-white text-white hover:bg-white hover:text-gray-800"
      : "border-transparent text-white bg-gray-800";


  if (authData) {
    // Logout button when logged in
    return (
      <>
        <button
          onClick={onLogoutRequest}
          className={`${baseClass} ${dynamicClass} flex justify-center`}
        >
          Logout
        </button>
      </>
    );
  } else {
    // Login and Register buttons if not logged in
    return authLinkData.map((data) => (
      <Link
        key={data.name}
        to={data.href}
        className={`${baseClass} ${dynamicClass} flex justify-center`}
      >
        {data.name}
      </Link>
    ));
  }
};

export default AuthButtons;
