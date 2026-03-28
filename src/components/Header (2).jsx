import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-yellow-400"
        >
          BlogHive 🐝
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 text-lg font-medium flex items-center">

          {/* Home */}
          <Link
            to="/"
            className="hover:text-yellow-400 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-yellow-400 transition"
          >
            About
          </Link>

          <Link
            to="/blogs"
            className="hover:text-yellow-400 transition"
          >
            Blogs
          </Link>

          {/* Login Button */}
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-400 transition"
          >
            Login
          </Link>

          {/* Signup Button */}
          <Link
            to="/signup"
            className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-300 transition"
          >
            Signup
          </Link>

        </nav>

      </div>
    </header>
  );
};

export default Header;