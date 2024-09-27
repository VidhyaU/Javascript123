import React from 'react';
import { useState,useEffect } from 'react';


export default function App() {
 var[value,setValue]=useState(0)
  useEffect(()=>{console.log("Hello useEffect")},[])
  function test(){
    setValue(value+1)
  }

  return (
    <>
    {value}
    <button onClick={test}>increment</button>
      </>

  );
}





