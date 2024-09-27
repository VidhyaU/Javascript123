import { useState } from "react"

const App=()=>{
    const students={
        name:'Arohi',
        place:'Mumbai',
        age:22
    }
    const[state, setState]=useState(students)
    
    return(
        <>
        <h1>{state.name}</h1>
        
        <input type="text" value={state.place}/>
        </>
    )

}
export default App 