import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { useState } from 'react';
import './App.css'; 

export default function App() {
 
  const [color, setColor] = useState('green');

  
  const update = () => {
    setColor(prevColor => (prevColor === 'green' ? 'red' : 'green'));
  };

  return (
    <>
      
      <h2 style={{ color: color} }>Hello {color}</h2>
      <button onClick={update}>Update Style</button>
    </>
  );
}





