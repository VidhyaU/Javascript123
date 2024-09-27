
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import About from './About'
import Courses from './Courses'
import Cards from './Cards'
import Menu from './Menu'
function App() {
 
  return (
    <>
    
    <BrowserRouter>
{/* <a href='/'>HOME</a>
<a href='/about'>ABOUT US</a>
<a href='/courses'>COURSES</a> */}

<Link to='/menu'></Link>
<Link to='/'></Link>
<Link to='/about'></Link>
<Link to='/courses'></Link>
<Link to='/cards'></Link>

    
<Routes>
<Route path='/menu' element={<Menu/>}/>
<Route path='/' element={<h5>Main Root</h5>}/>
<Route path='/about' element={<About/>}/>
<Route path='/courses' element={<Courses/>} />
<Route path='/cards' element={<Cards/>}/>
<Route path='/menu' element={<Menu/>}/>

</Routes>
    
    </BrowserRouter>
    </>
   
  )
}
export default App