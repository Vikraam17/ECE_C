import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import COntact from './components/Pages/COntact'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/About' element={<About/>}/>
          <Route path="/contact" element={<COntact/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
