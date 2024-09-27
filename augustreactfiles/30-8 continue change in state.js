
import {useState} from "react"

const App=()=>{
    const [state, setState]=useState("React App")
    
    const handler=()=>{
        if(state=="React App"){
        setState("Single Page Application")
        
    }
    else{
        setState("React App")
    }
    }
    return(
        <>
        <h1>{state}</h1>
        <button onClick={handler}>onClick</button>
       
        </>
    )

}
export default App 