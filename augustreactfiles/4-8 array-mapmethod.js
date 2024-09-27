


const App = () => {
  const arr=['a','b','c','d','e']
  
  
return (
    <>
    <h1>REACT JS</h1>
      {arr.map((x)=>{
       return <li>{x}</li>
      })}
    </>
  )
}

export default App;






