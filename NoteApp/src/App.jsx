import  React ,{useEffect, useState } from 'react'
import './App.css'
import NotesForm from './components/NotesForm'
import { NotesContextProvider,notesContext,useNotes } from './context/NotesContext'

function App() {


 const [notes,setNotes] = useState([])

  const addNotes=(note)=>{
    console.log(setNotes((prev)=>[{id:Date.now(),...notes},...prev]))
  }
  const updateNotes=(id,note)=>{
    setNotes((prev)=>prev.map((prevnote)=>(prevnote.id===prev.id?note:prev)))
    
  }
  const deleteNotes=(id)=>{
    setNotes((prev)=>{

      return prev.filter((prevNote)=>{
        return prevNote.id!==id
      })

    })
  }

  useEffect(()=>{

   const notes = JSON.parse(localStorage.getItem("notes"))

   if(notes && notes.length) {
    setNotes(notes)
   }
  },[notes])

  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(notes))
  })

  return (
   <NotesContextProvider value={{notes,addNotes,updateNotes,deleteNotes}}>
   <NotesForm/>
   
   </NotesContextProvider>
  )
}

export default App
