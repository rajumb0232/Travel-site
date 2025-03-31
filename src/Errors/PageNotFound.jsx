// src/home/Components/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <h2>Oops! Page Not Found 😢</h2>
      <p>The page you're looking for doesn't exist.</p>
      <button
        type="submit"
        onClick={() => navigate("/")}
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors w-36"
      >
        Go Home
      </button>
    </div>
  );
};

export default PageNotFound;
