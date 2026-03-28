import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <div className="flex flex-col items-center">

        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Loading text */}
        <p className="mt-3 text-indigo-600 font-semibold">
          Loading...
        </p>

      </div>

    </div>
  );
};

export default Loader;