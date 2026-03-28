import { Link } from "react-router-dom";

const AdminSidebar = () => {

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5">

      {/* Admin Panel Title */}
      <h2 className="text-2xl font-bold mb-8 text-center">
        Admin Panel
      </h2>

      {/* Menu Items */}
      <ul className="space-y-4">

        <li>
          <Link to="/admin/dashboard" className="block hover:text-yellow-400">
            Dashboard
          </Link>
        </li>

        {/* ✅ NEW CREATE BLOG */}
        <li>
          <Link to="/admin/create-blog" className="block hover:text-yellow-400">
            Create Blog
          </Link>
        </li>

        <li>
          <Link to="/admin/manage-posts" className="block hover:text-yellow-400">  
            My Posts
          </Link>
        </li>

        <li>
          <Link to="/admin/blogs" className="block hover:text-yellow-400">
            Manage Blogs
          </Link>
        </li>

        <li>
          <Link to="/admin/add-post" className="block hover:text-yellow-400">
            Add Post
          </Link>
        </li>

        <li>
          <Link to="/admin/users" className="block hover:text-yellow-400">
            Manage Users
          </Link>
        </li>

        <li>
          <Link to="/admin/comments" className="block hover:text-yellow-400">
            Comments
          </Link>
        </li>

        <li>
          <Link to="/admin/categories" className="block hover:text-yellow-400">
            Categories
          </Link>
        </li>

        <li>
          <Link to="/admin/settings" className="block hover:text-yellow-400">
            Settings
          </Link>
        </li>

      </ul>

    </div>
  );
};  

export default AdminSidebar;