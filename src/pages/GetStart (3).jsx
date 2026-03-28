import { Link } from "react-router-dom";

const GetStart = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50">

      <div className="bg-white p-10 rounded-xl shadow-lg text-center w-96">

        <h1 className="text-3xl font-bold text-indigo-600 mb-4">
          Welcome to BlogHive
        </h1>

        <p className="text-gray-600 mb-6">
          Start reading amazing blogs or create your own.
        </p>

        {/* Link to Login page */}
        <Link
          to="/login"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Login
        </Link>

      </div>

    </div>
  );
};

export default GetStart;