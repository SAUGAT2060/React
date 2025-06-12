import React, { useEffect, useState } from 'react'
import './App.css'
import NotesForm from './components/NotesForm'
import NotesList from './components/NotesList'  
import { NotesContextProvider } from './context/NotesContext'

function App() {
  const [notes, setNotes] = useState([])

  // Correct addNotes to properly add a new note
  const addNotes = (note) => {
    setNotes((prev) => [{ id: Date.now(), ...note }, ...prev])
  }

  // Fix updateNotes: use id argument to match, not prev.id
  const updateNotes = (id, updatedNote) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? updatedNote : note))
    )
  }

  const deleteNotes = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id))
  }

  // Load from localStorage only once, on mount: use empty dependency array []
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'))
    if (storedNotes && storedNotes.length) {
      setNotes(storedNotes)
    }
  }, [])

  // Save notes to localStorage whenever notes change: add [notes] dependency
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <NotesContextProvider value={{ notes, addNotes, updateNotes, deleteNotes }}>
      <NotesForm />
      <NotesList />
    </NotesContextProvider>
  )
}

export default App
