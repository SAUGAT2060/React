import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(12)

 const increase=()=>{
  if(counter>=20){
const btn1= document.querySelector('.first-button');  
btn1.innerHTML='Max limit';
  }
  else{
    const btn1= document.querySelector('.first-button');
    btn1.innerHTML= 'Add Value';
    setCount(counter+1);
   

  }
 }
  
 const decrease= ()=>{

  if(counter<=0){
    const btn2 = document.querySelector('.second-button');
    btn2.innerHTML='Lowest limit';

  }
  else{
    const btn2= document.querySelector('.second-button');
    btn2.innerHTML = 'Decrease Value';
    setCount(counter-1);
  }
 }


  

  

  return (
    <>
      <h1>Counter:{counter}</h1>
      <button className='first-button' onClick={increase}>Increase</button>
      <br />
      <button className='second-button' onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
