import { useState } from 'react'
import Data from './Data.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Data name="Saugat" age={21} goal="Software-Developer"/>
    <Data name="Sanam" age={23} goal= "Practical Nurse"/>
    <Data/>
   
    </>
  )
}

export default App
