
import { useState  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter , setCounter]  = useState(15)

   
 const addValue = ()=>{
  if(counter >=20){
  
  
    const button= document.querySelector('.first-button');
    button.innerHTML="Woops! Can't add more than 20 bud";
  }
  else{
    const button= document.querySelector('.first-button');
    button.innerHTML="Add Value";
  setCounter(counter +1) ;
  }



 }
 const removeValue =()=>{

if(counter<=0){
  const button = document.querySelector('.second-button');
  button.innerHTML="Woops ! Can't go below 0 bud"

  
}
else{
  const button = document.querySelector('.second-button');
  button.innerHTML="Remove Value"
setCounter(counter -1);
}
  
 }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button 
      
      className="first-button"
      onClick= {addValue}
      
      >Add Value</button>
      <br />
      <button
      className="second-button"
      onClick= {removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
