import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAlerts } from "../../Context/AppContext";

const UserRegistration = () => {
  const navigate = useNavigate();
  const { addAlert } = useAlerts();

  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    email: "",
    password: "",
    dateOfBirth: "",
    gender: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    contact: "",
    email: "",
    password: "",
    dateOfBirth: "",
    gender: "",
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = { ...errors };

    // Full Name Validation
    if (!/^[A-Za-z\s]{3,}$/.test(formData.fullName)) {
      newErrors.fullName =
        "Full Name must contain only letters and spaces (min 3 characters).";
      valid = false;
    } else {
      newErrors.fullName = "";
    }

    // Contact Validation
    if (!/^[0-9]{10}$/.test(formData.contact)) {
      newErrors.contact = "Contact must be a 10-digit number.";
      valid = false;
    } else {
      newErrors.contact = "";
    }

    // Email Validation (Gmail only)
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = "Please enter a valid Gmail address.";
      valid = false;
    } else {
      newErrors.email = "";
    }

    // Password Validation
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters with 1 letter and 1 number.";
      valid = false;
    } else {
      newErrors.password = "";
    }

    // Date of Birth Validation
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of Birth is required.";
      valid = false;
    } else {
      newErrors.dateOfBirth = "";
    }

    // Gender Validation
    if (!formData.gender) {
      newErrors.gender = "Please select your gender.";
      valid = false;
    } else {
      newErrors.gender = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateIfUserIsUnique = (email) => {
    const record = localStorage.getItem(email);
    if (record) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "User already registered!! Try with an other Gmail address.",
      }));
      return false;
    }
    return true;
  };

  const completeRegistration = (user) => {
    localStorage.setItem(user.email, JSON.stringify(user));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (!validateIfUserIsUnique(formData.email)) {
        return;
      }
      completeRegistration(formData);
      addAlert({
        title: "Registration Successful",
        message: "Your have been Registered successfully!!",
      });
      navigate("/");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Image Section */}
      <div className="hidden lg:block w-1/2 h-screen fixed left-0">
        <img
          src="https://images.unsplash.com/photo-1507608443039-bfde4fbcd142?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
          alt="Registration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Registration Form Section */}
      <div className="w-full lg:w-1/2 ml-auto p-8 flex flex-col justify-items-start relative overflow-y-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6 mt-4">
          <h2 className="text-2xl font-semibold">Register</h2>
          <Link to={"/"}>
            <img
              src="/logo-trip-buddy-dark.png"
              alt="Trip Buddy Logo"
              className="h-10"
            />
          </Link>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contact:
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your contact number"
            />
            {errors.contact && (
              <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date of Birth:
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.dateOfBirth && (
              <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender:
            </label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Other
              </label>
            </div>
            {errors.gender && (
              <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
            )}
          </div>
          <button
            type="submit"
            className="mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors w-full"
          >
            Register
          </button>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already registered?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;
