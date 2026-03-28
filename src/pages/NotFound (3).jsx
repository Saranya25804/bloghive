import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">

      <h1 className="text-6xl font-bold text-indigo-600">
        404
      </h1>

      <h2 className="text-2xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600"
      >
        Go Home
      </Link>

    </div>
  );
};

export default NotFound;