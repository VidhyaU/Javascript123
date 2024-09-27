import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Data from './Data.json'
import { useState } from 'react';
 

 const App = () => {
  
  const [state,setState]=useState(Data)
 
  return (
    <>
    <div className='container'>
    <div className='row'>
      {state.map((list)=>{
      return( <>
        <div className='col-md-4' align="center">
        <div class="card">
  <img src={list.pic} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{list.name}</h5>
    
  </div>
</div>
        </div>
        
        </> )
           })}
      </div>
      </div>
      </>
 )
 }
export default App