
import React from 'react';
import './App.css'
import { useState } from 'react';


export default function App(){
  var[state,setState]=useState("yellow")
  const handler=(e)=>{             
    setState(e.target.value)
  }
  return(
    <>
    <h2 className={state}>{state}</h2>
    <select  onChange={handler} >
     
      <option >yellow</option>
      <option >red</option>
      <option >green</option>
      <option >black</option>
      
      </select>
      
     
    </>
  )
}



 








































