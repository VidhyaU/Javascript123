import { useState } from "react"

const App=()=>{
    const[state, setState]=useState("Single Page Application")
    const[age ,setAge]=useState(22)
    return(
        <>
        <h1>{state}</h1>
        <h1>{age}</h1>
 <input type="text" value={state}/>
        </>
    )

}
export default App 