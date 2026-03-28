import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    alert("Login Successful (Static Demo)");
    navigate("/dashboard"); // dashboard page open
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 px-4">

      {/* Login Card */}
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-xl p-8 w-full max-w-md hover:shadow-indigo-300 transition">

        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Login to BlogHive
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-indigo-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:border-indigo-400 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full border border-indigo-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:border-indigo-400 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Show Password */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-sm text-indigo-600 mt-1 hover:text-purple-600 transition"
            >
              {showPassword ? "Hide Password" : "Show Password"}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              className="text-sm text-indigo-600 hover:text-purple-600 hover:underline transition"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-md hover:scale-105 hover:shadow-lg transition duration-300"
          >
            Login
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <hr className="flex-1 border-gray-300"/>
          <span className="px-3 text-sm text-gray-600">OR</span>
          <hr className="flex-1 border-gray-300"/>
        </div>

        {/* Social Login */}
        <div className="space-y-3">
          <button className="flex items-center justify-center gap-3 w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 hover:scale-105 transition">
            <FaGoogle />
            Continue with Google
          </button>

          <button className="flex items-center justify-center gap-3 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-black hover:scale-105 transition">
            <FaGithub />
            Continue with Github
          </button>

          <button className="flex items-center justify-center gap-3 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:scale-105 transition">
            <FaLinkedin />
            Continue with LinkedIn
          </button>
        </div>

        {/* Signup Link */}
        <p className="text-center mt-5 text-sm text-gray-700">
          Don't have an account?
          <Link
            to="/signup"
            className="text-indigo-600 font-semibold ml-1 hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Login;