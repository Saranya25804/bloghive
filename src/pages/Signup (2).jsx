import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Here you can later connect backend API
    console.log("User Data:", formData);

    // After signup go to login page
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-indigo-200 px-4">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-2xl font-bold text-indigo-700 mb-8 text-center">
          Create Your Account
        </h1>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full mb-6 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-md font-semibold hover:scale-105 hover:shadow-lg transition duration-300 mb-6"
          >
            Sign Up
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="space-y-4 mb-6">

          <button className="flex items-center justify-center gap-3 w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
            <FaGoogle size={20} />
            Continue with Google
          </button>

          <button className="flex items-center justify-center gap-3 w-full py-3 bg-gray-900 text-white rounded-md hover:bg-black transition">
            <FaGithub size={20} />
            Continue with GitHub
          </button>

          <button className="flex items-center justify-center gap-3 w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            <FaLinkedin size={20} />
            Continue with LinkedIn
          </button>

        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-8 mt-6 text-center relative">

          <Link to="/" className="text-indigo-600 hover:underline font-medium">
            ← Back to Home
          </Link>

          <Link to="/login" className="text-indigo-600 hover:underline font-medium">
            Login →
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Signup;