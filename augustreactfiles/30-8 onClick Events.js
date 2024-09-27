import React from "react"

const App=()=>{
    
    function demo(){
        alert("Welcome to React Functions")
    }
    return(
        <>
        <h1>React</h1>
        <button onClick={demo}>onClick</button>
        <button onMouseOver={demo}>MouseOver</button>
        <button onMouseOut={demo}>MouseOut</button>
        </>
    )

}
export default App 