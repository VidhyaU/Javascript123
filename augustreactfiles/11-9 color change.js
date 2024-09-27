import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { useState } from 'react';
import './App.css'; 
export default function App(){
  const[style,setStyle]=useState('txt')
  const update=()=>{
    setStyle('txt1')
  }
  return(
    <>
    <h2 className={style}>Hello</h2>
    <button onClick={update}>Update Style</button>
    </>
  )
}


  
  


