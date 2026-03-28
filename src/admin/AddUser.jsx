import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "User"
  });

  // Handle input change
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ GET existing users
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // ✅ ADD new user
    const newUser = {
      id: Date.now(),
      ...user
    };

    const updatedUsers = [...existingUsers, newUser];

    // ✅ SAVE to localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    console.log("New User:", newUser);

    alert("User Created Successfully ✅");

    // redirect back to users page
    navigate("/admin/users");
  };

  return (
    <div className="p-8 max-w-xl mx-auto">

      <h1 className="text-3xl font-bold mb-6 text-indigo-600 text-center">
        Add New User
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        {/* Role */}
        <select
          name="role"
          value={user.role}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>

        {/* Buttons */}
        <div className="flex justify-between">

          <button
            type="button"
            onClick={() => navigate("/admin/users")}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Create User
          </button>

        </div>

      </form>

    </div>
  );
};

export default AddUser;