
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
 
  return (
    <>
    <h1>React Router dom</h1>
    <BrowserRouter>
    <Routes>
<Route path='/' element={<h5>Main Root</h5>}/>
<Route path='/about' element={<h5>About Us Page</h5>}/>
<Route path='/courses' element={<h5>Courses</h5>} />
 </Routes>
    
    </BrowserRouter>
    </>
   
  )
}
export default App