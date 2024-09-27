import  { useState} from "react";
 function App() {
  const[city,setCity]=useState('')
  const[result,setResult]=useState('')
  const changeHandler=e=>{
  setCity(e.target.value)
  }
  const submitHandler=e=>{
    e.preventDefault()
 
  fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dddd8a630f5177b85903c6ec1f224f3b`)
 
.then(res=>res.json()
).then(data=>{
  const kelvin=data.main.temp;
  const celsius=kelvin-273.15
  setResult(Math.round(celsius))
 
})
  }
 return(
  <>
  <h1>hello</h1>
  {result+"deg"}
  <form onSubmit={submitHandler}>
    <input type="text"value={city} onChange={changeHandler}/>
    <br/>
    <input type="submit"/>
  </form>
  </>
 )
}
export default App