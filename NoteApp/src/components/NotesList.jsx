import React, { useState } from 'react';
import { useNotes } from '../context/NotesContext';

function NotesList() {
  const { notes, updateNotes, deleteNotes } = useNotes();

  return (
    <div className="space-y-4 max-w-md mx-auto mt-4">
      {notes.length > 0 ? (
        notes.map((note) => (
          <SingleNote
            key={note.id}
            note={note}
            updateNotes={updateNotes}
            deleteNotes={deleteNotes}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No notes found.</p>
      )}
    </div>
  );
}

function SingleNote({ note, updateNotes, deleteNotes }) {
  const [editText, setEditText] = useState(note.content);

  const handleUpdate = () => {
    if (editText.trim() !== '') {
      updateNotes(note.id, { ...note, content: editText });
    }
  };

  const handleDelete = () => {
    deleteNotes(note.id);
  };

  return (
    <div className="bg-white border border-gray-300 rounded p-4 shadow-sm flex items-center justify-between gap-2">
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        className="flex-1 border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="flex gap-2">
        <button
          onClick={handleUpdate}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NotesList;
