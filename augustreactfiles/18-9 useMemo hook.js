
import { useMemo, useState } from 'react';

const App = () => {
  
  const [number, setNumber] = useState(0);
const [product, setProduct] = useState(100);
  
  const handleIncrease = () => {
    setNumber(number + 1);
  };

  
  const handleDecrease = () => {
    setProduct(product - 1);
  };


  // const multiply=()=>{
  //   console.log('React')
  //   return(number*5)
  // }

  const multiplication=useMemo(function multiply(){
    console.log('Hello')
    return number*10
  },[number])
  
  return (
    <>
      <h1>{number} {product} </h1>
      <h2>{multiplication}</h2>

   
      
      <button onClick={handleIncrease}>ADD</button>
      <button onClick={handleDecrease}>MINUS</button>
    </>
  );
};

export default App;
