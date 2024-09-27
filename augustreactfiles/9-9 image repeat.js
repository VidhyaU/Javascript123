
import Data from './Data.json'
import { useState } from 'react';
 

 const App = () => {
  
  const [state,setState]=useState(Data)
 
  return (
    <>
    
    
      {state.map((list)=>{
      return(
        <>
        <img src={list.pic} alt="" width="300px"/>
        <p>{list.name}</p>
        
        </>
      )


      
      })}
      </>
 )
 }
export default App