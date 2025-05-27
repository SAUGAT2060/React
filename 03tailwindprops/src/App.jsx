import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card"

function App() {
 
  
  const [count, setCount] = useState(0);
  let myObj ={
    username:'Saugat',
    age:21
  }

  let newArray = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
        <Card username='SaugatGoat' price='100' />
        <Card username = 'RimaSanamSurya'/>
     </>
  );
}

export default App;
