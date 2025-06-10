import  React ,{useState } from 'react'
import './App.css'
import NotesForm from './components/NotesForm'
import { NotesContextProvider,notesContext,useNotes } from './context/NotesContext'

function App() {


 const [notes,setNotes] = useState([])

  const addNotes=(note)=>{
    console.log(setNotes((prev)=>[{id:Date.now(),...notes},...prev]))
  }
  const updateNotes=()=>{
    
  }



  return (
   <>
   <NotesForm/>
   
   </>
  )
}

export default App
