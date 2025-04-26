import React from "react";
import { useNavigate } from "react-router-dom";
import { useAlerts } from "../../Context/AppContext";

const Logout = ({ onCancel }) => {
  const navigate = useNavigate();
  const { addAlert } = useAlerts();

  // Handle Logout Confirmation
  const handleLogout = () => {
    localStorage.removeItem("current_login"); // Clear login record
    addAlert({
      title: "Logout successful",
      message: "Your have been logged out successfully!!",
    });
    navigate("/"); // Redirect to home after logout
    onCancel(); // removing the popup after logout
  };

  return (
    <div className="fixed w-screen h-screen z-50 backdrop-blur-lg backdrop-brightness-50 flex items-center justify-center">
      <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-semibold mb-4">Are you sure?</h2>
        <p className="text-gray-600 mb-6">Do you really want to log out?</p>

        <div className="flex justify-center gap-4">
          {/* Confirm Logout Button */}
          <button
            type="button"
            onClick={handleLogout}
            className="mt-4 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors w-36"
          >
            Logout
          </button>

          {/* Cancel Button */}
          <button
            type="button"
            onClick={onCancel}
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors w-36"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
