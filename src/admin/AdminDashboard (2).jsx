import { Link } from "react-router-dom";

const AdminDashboard = () => {

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-indigo-600 mb-8">
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Total Users</h2>
          <p className="text-3xl font-bold text-indigo-600 mt-2">120</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Total Blogs</h2>
          <p className="text-3xl font-bold text-indigo-600 mt-2">45</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Published Blogs</h2>
          <p className="text-3xl font-bold text-indigo-600 mt-2">38</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Pending Blogs</h2>
          <p className="text-3xl font-bold text-indigo-600 mt-2">7</p>
        </div>

      </div>

      {/* Management Section */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Manage Blogs */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-indigo-600 mb-3">
            Manage Blogs
          </h2>
          <p className="text-gray-600 mb-5">
            View, edit, approve or delete blog posts created by users.
          </p>
          <Link to="/admin/manageblogs">
            <button className="bg-indigo-600 text-white px-5 py-2 rounded">
              Open
            </button>
          </Link>
        </div>

        {/* Manage Users */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-indigo-600 mb-3">
            Manage Users
          </h2>
          <p className="text-gray-600 mb-5">
            View registered users and remove inactive or spam accounts.
          </p>
          <Link to="/admin/manageusers">
            <button className="bg-indigo-600 text-white px-5 py-2 rounded">
              Open
            </button>
          </Link>
        </div>

        {/* ✅ Create Blog (FIXED) */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-indigo-600 mb-3">
            Create Blog
          </h2>
          <p className="text-gray-600 mb-5">
            Admin can directly publish blogs for announcements or updates.
          </p>
          <Link to="/admin/createblog">
            <button className="bg-indigo-600 text-white px-5 py-2 rounded">
              Create
            </button>
          </Link>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="mt-12 bg-white p-8 rounded-xl shadow">

        <h2 className="text-xl font-semibold mb-6 text-indigo-600">
          Recent Activity
        </h2>

        <ul className="space-y-3 text-gray-600">
          <li>• New user registered</li>
          <li>• Blog "MERN Guide" published</li>
          <li>• Blog "React Tips" deleted</li>
          <li>• New comment added</li>
        </ul>

      </div>

    </div>
  );
};

export default AdminDashboard;