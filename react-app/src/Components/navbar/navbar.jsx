import React from 'react'
import NavbarLogo from './navbarlogo'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import './navbar.css'

const variants = {
  open: { x: 0 },
  closed: { x: "-100%" }
}

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => setIsActive(!isActive)

  return (
    <div className='navbar'>
      <div className="container">
        <NavbarLogo className='nav-logo' />
        <ul className='nav-menu'>
          <motion.div initial={{ y: "-100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "just", duration: 0.5, delay: 0.1 }}><Link className='nav-link' to="/">About me</Link></motion.div>
          <motion.div initial={{ y: "-100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "just", duration: 0.5, delay: 0.2 }}><Link className='nav-link' to="/work">My Work</Link></motion.div>
          <motion.div initial={{ y: "-100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "just", duration: 0.5, delay: 0.3 }}><Link className='nav-link' to="/experience">Experience</Link></motion.div>
          <motion.div initial={{ y: "-100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "just", duration: 0.5, delay: 0.4 }}><Link className='nav-link' to="/education">Education</Link></motion.div>
          <motion.div initial={{ y: "-100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "just", duration: 0.5, delay: 0.5 }}><Link className='nav-link' to="/contacts">Contact me</Link></motion.div>

          <div className="button-container">
            <motion.div initial={{ y: "-100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "just", duration: 0.5, delay: 0.6 }}>
              <a className='main-button-out'>Resume</a>
            </motion.div>
          </div>
        </ul>

        <motion.div initial={{ y: "-100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "just", duration: 0.5, delay: 0.1 }} className='hamb' onClick={toggleSidebar}>
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.33325 16.8972H27.9999M46.6666 16.8972H37.3333M9.33325 28.3555H46.6666M9.33325 39.8139H18.6666M46.6666 39.8139H27.9999" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        <AnimatePresence>
          {isActive && (
            <motion.div className='hamb-menu-active' initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", duration: 0.5 }}>
              <div className='hamb-menu-close' onClick={toggleSidebar}>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.891113 1.07031L24.4613 24.6405M0.891113 24.6405L24.4613 1.07031" stroke="black" strokeLinecap="square" />
                </svg>
              </div>

              <div className='hamb-menu-items'>
                <ul>
                  <Link className='nav-link' to="/" onClick={toggleSidebar}>About me</Link>
                  <Link className='nav-link' to="/work" onClick={toggleSidebar}>My Work</Link>
                  <Link className='nav-link' to="/experience" onClick={toggleSidebar}>Experience</Link>
                  <Link className='nav-link' to="/education" onClick={toggleSidebar}>Education</Link>
                  <Link className='nav-link' to="/contacts" onClick={toggleSidebar}>Contact me</Link>
                  <div className="button-container">
                    <button className='nav-button'>Resume</button>
                  </div>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}

export default Navbar