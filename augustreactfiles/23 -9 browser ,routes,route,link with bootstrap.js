
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import About from './About'
import Courses from './Courses'

function App() {

  return (

    <>
      <BrowserRouter>
        <div className='container-fluid'>




          {/* <Link to='/menu'>Menu</Link>
              <Link to='/'>Main</Link>
              <Link to='/about'>About</Link>
              <Link to='/courses'>Courses</Link>
              <Link to='/cards'>Cards</Link> */}

          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/courses">Courses</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className='row'>
            <div className='col-md-4'>
              left
            </div>

            <div className='col-md-8'>
            <Routes>
            <Route path='/' element={<h5>Main Root</h5>} />
            <Route path='/about' element={<About />} />
            <Route path='/courses' element={<Courses />} />
          </Routes>
            </div>

          </div>
          

</div>




      </BrowserRouter>
    </>

  )
}
export default App