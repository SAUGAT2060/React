import React from 'react';

export default function Home() {
  return (
    <div className="max-w-xl mx-auto mt-12 px-4">
      {/* 🔥 GIF Banner */}
      <div className="mb-6 rounded-xl overflow-hidden border-4 border-orange-300 shadow-lg">
        <img
          src="../../images/Bookfinder.gif"
          alt="Reading animation"
          className="w-full h-100% object-cover"
        />
      </div>

      {/* 🔍 Label */}
      <label
        htmlFor="Api"
        className="block text-lg font-semibold text-gray-700 mb-2"
      >
        🔍 Book Search
      </label>

      {/* 📘 Input */}
      <input
        id="Api"
        className="
          w-full
          px-4
          py-3
          text-base
          rounded-md
          border border-gray-300
          focus:outline-none
          focus:ring-2
          focus:ring-orange-500
          bg-white
          text-gray-800
          placeholder:text-gray-400
        "
        placeholder="Enter a book title or author..."
      />

      {/* 🚀 Button */}
      <button
        className="
          mt-4
          w-full
          bg-orange-600
          hover:bg-orange-700
          text-white
          font-medium
          py-3
          px-4
          rounded-md
          transition
          duration-200
        "
      >
        Fetch Book
      </button>
    </div>
  );
}
