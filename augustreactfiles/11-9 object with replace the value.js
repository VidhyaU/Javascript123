import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import Data from './Data.json'
import { useState } from 'react';
 

 const App = () => {
  const students={
    f_name:'Ajay',
    l_name:'Kumar',
    place:'Hyderabad'
  }
  const [state,setState]=useState(students);
  const demo=()=>{
    setState({...state,f_name:'Vijay'})
    setState({f_name:'Vijay',l_name:'Rao'})
  }
  return (
    <>
    <h2>Hello {state.f_name} {state.l_name} From {state.place}</h2>
  <button onClick={demo}>Update</button>
      </>
 )
 }
export default App