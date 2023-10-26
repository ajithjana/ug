import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../assets/icon.png'

import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  
  return (
  <nav className="navbar navbar-expand-lg bg-dark text-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo1} alt=".." className='logo img-fluid'/></a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <a className='nav-link login-btn' id='coloring'><Link className='nav-sub-link' to='/Login'>Login</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link className='nav-sub-link' id='home' to='/'>Home</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link className='nav-sub-link' id='Games'to='/menu'>Games</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link className='nav-sub-link' id ='About'to='/about'>About</Link></a>
        </li>
        <li className='nav-item'>
           <a className='nav-link'><Link className='nav-sub-link' id = 'Contact'to='/contact'>Contact</Link></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
