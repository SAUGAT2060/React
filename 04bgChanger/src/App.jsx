import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")


  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{backgroundColor:color}}
     
     >
      <div className="fixed flex flex-wrap justify-center
      
      bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg
      bg-white px-3 py-2 rounded-3xl">
        <button
      className="outline-none px-4  py-1
      rounded-full text-white shadown-lg"
      onClick={(()=>setColor("red"))}
      style={{backgroundColor:"red"}}
      
      >Red</button>
       <button
      className="outline-none px-4  py-1
      rounded-full text-white shadown-lg"
      onClick={()=>{setColor("green")}}
      style={{backgroundColor:"green"}}
      
      >Green</button>
       <button
      className="outline-none px-4  py-1
      rounded-full text-white shadown-lg"
      onClick={()=>{
       setColor("blue") 
      }}
      style={{backgroundColor:"blue"}}
      
      >Blue</button>
      <button className="outline-2 px-4 py-1 rounded-full text-black shadown-lg
      "onClick={()=>{
        setColor("white")
      }}
      style={{backgroundColor:"white"}}>white</button>
      <button className="outline-2 px-4 py-1 rounded-full text-white shadown-lg"
      onClick={()=>{
        setColor("purple")
      }}
      style={{backgroundColor:"purple"}}>Purple</button>
      </div>
        </div>
     </div>
    </>
  )
}

export default App
