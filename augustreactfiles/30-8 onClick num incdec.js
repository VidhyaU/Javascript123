
import { useState } from 'react';

const App = () => {
  
  const [number, setNumber] = useState(0);

  
  const handleIncrease = () => {
    setNumber(number + 1);
  };

  
  const handleDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <h1>{number}</h1>
      
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleIncrease}>+</button>
    </>
  );
};

export default App;
