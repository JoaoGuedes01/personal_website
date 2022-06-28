import React from 'react'
import NavbarLogo from './navbarlogo'
import { Link } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <NavbarLogo className='nav-logo' />
        <ul className='nav-menu'>
          <Link className='nav-link' to="/">About me</Link>
          <Link className='nav-link' to="/work">My Work</Link>
          <Link className='nav-link' to="/experience">Experience</Link>
          <Link className='nav-link' to="/education">Education</Link>
          <Link className='nav-link' to="/contacts">Contact me</Link>
          <div className="button-container">
            <button className='nav-button'>Resume</button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar