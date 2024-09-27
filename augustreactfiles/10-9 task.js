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
        <div className='col-md-4' align="center" heigth="400px">
        <div class="card">
  <img src={list.pic} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{list.name}</h5>
    <h6 className='cardone'>{list.description}</h6>
    
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