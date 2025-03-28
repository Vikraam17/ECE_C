import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link className='Link' to="/">Home</Link></li>
          <li><Link className='Link' to="/About">About</Link></li>
          <li><Link className='Link' to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar