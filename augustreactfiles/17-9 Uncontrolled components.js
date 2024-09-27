import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { useState } from 'react';
export default function App(){
  var[state,setState]=useState("React")
  const handler=(e)=>{             //uncntrolled components 
    setState(e.target.value)
  }
  return(
    <>
    <h2>{state}</h2>
    <input type="text" value={state} onChange={handler}/>
    </>
  )
}



 

