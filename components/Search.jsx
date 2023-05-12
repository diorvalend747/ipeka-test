import React from "react";

const Search = ({ searchText, handleSearchChange = () => {} }) => {
  return (
    <form className="w-full">
      <label
        for="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-Hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="search"
          value={searchText}
          onChange={handleSearchChange}
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-white-300 rounded-lg bg-gray-50 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-grey"
          placeholder="Cari nama murid, lokasi atau kelas"
          required
        />
      </div>
    </form>
  );
};

export default Search;
