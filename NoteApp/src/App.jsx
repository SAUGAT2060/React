import  React ,{useState } from 'react'
import './App.css'
import NotesForm from './components/NotesForm'

function App() {
  const [note, setNotes] = useState([{
          id:1,
          title:"Note One",
           content: "This is my first note"

  }],

)

  return (
    <div>
     {(note.map((notes)=>(
      <React.Fragment key={notes.id}>
       <div >Id:{notes.id}</div>
      <h1>{notes.title}</h1>
     
      <h2>{notes.content}</h2> 
      
       <NotesForm/>
      </React.Fragment>

      
     )))}
    </div>
  )
}

export default App
