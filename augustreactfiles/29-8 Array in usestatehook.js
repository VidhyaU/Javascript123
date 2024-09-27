import { useState } from "react"

const App=()=>{
    const students=['Seetha','Geetha','Raina','Dhoni']
    const[state, setState]=useState(students)
   
    return(
        <>
        <h1>{state[0]}</h1>
        
        <input type="text" value={state[1]}/>
        </>
    )

}
export default App 