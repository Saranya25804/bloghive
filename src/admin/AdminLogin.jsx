import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AdminLogin = () => {

  const navigate = useNavigate();
  const location = useLocation(); // 👈 add chesam

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = (e) => {
    e.preventDefault();

    // Example admin credentials
    if (email === "admin@gmail.com" && password === "admin123") {

      localStorage.setItem("adminAuth", true);

      // 👇 NEW: previous page or dashboard ki redirect
      const from = location.state?.from?.pathname || "/admin/dashboard";
      navigate(from, { replace: true });

    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleAdminLogin}
        className="bg-white p-8 shadow-lg rounded w-96"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Admin Email"
          className="w-full border p-2 mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded"
        >
          Login
        </button>

      </form>

    </div>
  );
};

export default AdminLogin;