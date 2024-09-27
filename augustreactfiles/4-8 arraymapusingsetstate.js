
import { useState } from "react"

const App = () => {
  const arr=['a','b','c','d','e']
  const [state, setState]=useState(arr)
  
return (
    <>
    <h1>REACT JS</h1>
      <ul>{arr.map((x)=>{
       return <li>{x}</li>
      
      })}
       </ul>
    </>
  )
}

export default App;






