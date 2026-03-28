import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex justify-center mb-8">

      <input
        type="text"
        placeholder="Search blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

    </div>
  );
};

export default SearchBar;