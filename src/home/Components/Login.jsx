import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAlerts } from "../../Context/AppContext";

const Login = () => {
  const navigate = useNavigate();
  const { addAlert } = useAlerts();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = { ...errors };

    // Email Validation (Gmail only)
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = "Please enter a valid Gmail address.";
      valid = false;
    } else {
      newErrors.email = "";
    }

    // Password Validation
    if (!formData.password) {
      newErrors.password = "Password is required.";
      valid = false;
    } else {
      newErrors.password = "";
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

  const authenticate = () => {
    const record = localStorage.getItem(formData.email);

    if (record) {
      const data = JSON.parse(record);

      if (data.email !== formData.email) {
        setErrors({
          ...errors,
          email: "Email address not found!",
        });
        return false;
      }
      if (data.password !== formData.password) {
        setErrors({
          ...errors,
          password: "Incorrect password!",
        });
        return false;
      }
    } else {
      setErrors({
        ...errors,
        email: "Email address not found!",
      });
      return false;
    }

    return true;
  };

  const completeLogin = (formData) => {
    localStorage.setItem("current_login", JSON.stringify(formData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (authenticate()) {
        completeLogin(formData);
        addAlert({
          title: "Login Successful",
          message: "Your have been logged In successfully!!",
        });
        navigate("/");
      }
    }
  };

  return (
    <div className="flex h-screen">
      {/* Image Section */}
      <div className="hidden lg:block w-1/2 h-screen fixed left-0">
        <img
          src="https://images.unsplash.com/photo-1571349588226-979f98cf76bf?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Login Form Section */}
      <div className="w-full lg:w-1/2 ml-auto p-8 flex flex-col justify-items-start relative">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6 mt-12">
          <h2 className="text-2xl font-semibold">Login</h2>
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
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                Forgot your password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors w-full"
          >
            Login
          </button>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account yet?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
