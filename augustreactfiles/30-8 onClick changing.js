
import {useState} from "react"

const App=()=>{
    const [state, setState]=useState("React App")
    const handler=()=>{
        setState("Single Page Application")
    }
    
    return(
        <>
        <h1>{state}</h1>
        <button onClick={handler}>onClick</button>
       
        </>
    )

}
export default App 