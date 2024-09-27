import React from 'react';
import { useState } from 'react';


export default function App() {
 
  const [state, setState] = useState([]);

  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      //.then(json => console.log(json))
      .then(json=>setState(json))
  return (
    <>
    <div className='container'>
    <div className='row'>
      {state.map((list)=>{
      return( <>
        <div className='col-md-4' align="center" text-color="black" >
        <div class="card">

  <div class="card-body">
  <h5 className="card-title">{list.id} </h5>
  <p class="card-text">{list.name}</p>
  <p class="card-text">{list.username}</p>
  <p class="card-text">{list.email}</p>
    
    
  </div>
</div>
        </div>
        
        </> )
           })}
      </div>
      </div>
      </>

  );
}





