
import { useState } from 'react';

const App = () => {
  
  const [number, setNumber] = useState(0);
const [product, setProduct] = useState(100);
  
  const handleIncrease = () => {
    setNumber(number + 1);
  };

  
  const handleDecrease = () => {
    setProduct(product - 1);
  };

  return (
    <>
      <h1>{number} {product}</h1>
      
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleIncrease}>+</button>
    </>
  );
};

export default App;
