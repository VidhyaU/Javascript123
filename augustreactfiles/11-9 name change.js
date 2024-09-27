import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { useState } from 'react';
import './App.css'; 
export default function App(){
  const emp={
    fname:"Anil"
  }
  const[style,setStyle]=useState(emp)
  const update=()=>{
   (style.fname=="Anil"?setStyle({fname:'Sunil'}):setStyle({fname:'Pavan'}))
  }
  return(
    <>
    <h2>Hello {style.fname}</h2>
    <button onClick={update}>Update Style</button>
    </>
  )
}


  
  


