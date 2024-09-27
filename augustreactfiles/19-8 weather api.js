
import {useState } from 'react';
import React from 'react';  
export default function App(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=40ff0fdedba4506ea84ba0f65646b8d9')
  .then(res=>res.json())
  .then(json=>console.log(json.main))
  return(
    <>
    
    </>
  )
}
