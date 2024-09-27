import React from 'react'
import CompA from './CompA'
import {createContext} from 'react'
export const context=createContext()
function App() {
  let uid="MouriTech"
  return (
    <>
    <context.Provider value={uid}>
     <CompA />
     </context.Provider>
    </>
   
  )
}
export default App