import React from 'react'

function NotesForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-8">
      <form className="flex flex-col gap-4">
        <label htmlFor="noteTitle" className="text-gray-700 font-semibold">
          Add Note:
        </label>
        <input
          id="noteTitle"
          type="text"
          placeholder="Enter the note title"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default NotesForm
