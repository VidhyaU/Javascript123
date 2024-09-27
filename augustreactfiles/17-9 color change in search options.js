
import React from 'react';

import { useState } from 'react';


export default function App(){
  const data=['Apple','Banana','Grapes','Watermelon','Avacado','Water']
const[fruit,setFruit]=useState(data)   //1st state for data purpose

const [search,setSearch]=useState()  //2nd state for searching purpose

const handler=(e)=>{
  setSearch(e.target.value)   //this targets the value={search} and onChange={handler} and this handler will update the every time they updated.
}
  
  return(
    <>
    <input type='text' value={search} onChange={handler}/>

   {fruit.filter(x=>x.includes(search)).map((list=>{  
    return(
      <>
      
      <li>{list}</li>
      </>
    )
   }))}
      
     
    </>
  )
}



 








































