import  React ,{useState } from 'react'
import './App.css'

function App() {
  const [note, setNotes] = useState([{
          id:1,
          title:"Note One",
           content: "This is my first note"

  },{
           id:2,
          title:"Note two",
           content: "This is my second note"
  },
{
          id:3,
          title:"Note three",
           content: "This is my third note"
}])

  return (
    <div>
     {(note.map((notes)=>(
      <React.Fragment key={notes.id}>
       <div >Id:{notes.id}</div>
      <h1>{notes.title}</h1>
     
      <h2>{notes.content}</h2>
      </React.Fragment>

     )))}
    </div>
  )
}

export default App
