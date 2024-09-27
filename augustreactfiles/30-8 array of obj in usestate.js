import { useState } from "react"
import Data1,{users} from './Data1.js'
const App=()=>{
    
    const[state, setState]=useState(Data1)
    const [user, setUser]=useState(users)
    return(
        <>
        <h1>REACT</h1>
        <h1>{state}</h1>
        <h2>{user[0].name}</h2>
        <h2>{user[1].name}</h2>
        </>
    )

}
export default App 