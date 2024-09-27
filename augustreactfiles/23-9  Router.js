
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import About from './About'
import Courses from './Courses'
function App() {
 
  return (
    <>
    <h1>React Router dom</h1>
    <BrowserRouter>
{/* <a href='/'>HOME</a>
<a href='/about'>ABOUT US</a>
<a href='/courses'>COURSES</a> */}

<Link to='/'>Home</Link>
<Link to='/about'>About Us</Link>
<Link to='/courses'>Courses</Link>
    
<Routes>
<Route path='/' element={<h5>Main Root</h5>}/>
<Route path='/about' element={<About/>}/>
<Route path='/courses' element={<Courses/>} />
</Routes>
    
    </BrowserRouter>
    </>
   
  )
}
export default App