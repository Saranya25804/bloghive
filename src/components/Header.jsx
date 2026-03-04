import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold tracking-wide">
          BlogHive
        </h1>

        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-yellow-300 transition">
            About
          </Link>

          <Link to="/login" className="hover:text-yellow-300 transition">
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-yellow-400 text-black px-4 py-1 rounded-md font-medium hover:bg-yellow-300 transition"
          >
            Sign Up
          </Link>
        </nav>

        <button className="md:hidden text-2xl">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;