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
        <div className='hamb'>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33325 16.8972H27.9999M46.6666 16.8972H37.3333M9.33325 28.3555H46.6666M9.33325 39.8139H18.6666M46.6666 39.8139H27.9999" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


        </div>
      </div>
    </div>
  )
}

export default Navbar