import React from 'react'
import NavbarLogo from './navbarlogo'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import './navbar.css'

import { data } from './data'

const Navbar = (props) => {
  let lang = props.lang
  let theme = props.theme

  const [isActive, setIsActive] = useState(false);
  const [index, setIndex] = useState(0);
  const toggleSidebar = () => setIsActive(!isActive)

  return (
    <div className='navbar'>
      <div className="container">
        <NavbarLogo className='nav-logo' theme={theme} />
        <ul className='nav-menu'>
          {data.map((item, i) => (
            <motion.div
            key={item[lang]}
              className={theme === "light" ? 'light-color' : 'dark-color'}
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "just", duration: 0.5, delay: 0.1 * i }}
              onClick={()=>setIndex(i)}>
              <Link className={index == i ? 'nav-link selected' : 'nav-link'} to={{ pathname: item.route }}>
                {item[lang]}
              </Link>
            </motion.div>
          ))}
          <div className="button-container">
            <motion.div initial={{ y: "-100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "just", duration: 0.5, delay: 0.6 }}>
              {
                lang == "eng" ?
                  <a className={theme == "light" ? 'main-button-out light-out' : 'main-button-out dark-out'}>Resume</a> :
                  <a className={theme == "light" ? 'main-button-out light-out' : 'main-button-out dark-out'}>Currículo</a>
              }
            </motion.div>
          </div>
        </ul>

        <motion.div initial={{ y: "-100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "just", duration: 0.5, delay: 0.1 }} className='hamb' onClick={toggleSidebar}>
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.33325 16.8972H27.9999M46.6666 16.8972H37.3333M9.33325 28.3555H46.6666M9.33325 39.8139H18.6666M46.6666 39.8139H27.9999" stroke={theme === "light" ? 'black' : 'white'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        <AnimatePresence exitBeforeEnter>
          {isActive && (
            <motion.div className={theme === "light" ? 'hamb-menu-active' : 'hamb-menu-active dark-menu'} initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", duration: 0.5 }}>
              <div className='hamb-menu-close' onClick={toggleSidebar}>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.891113 1.07031L24.4613 24.6405M0.891113 24.6405L24.4613 1.07031" stroke={theme === "light" ? 'black' : 'white'} strokeLinecap="square" />
                </svg>
              </div>
              <div className='hamb-menu-items'>
                <ul>

                  {
                    data.map((item, i) => (
                      <motion.div key={i} initial={{ y: "-100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", delay: 0.03 * i + 0.15 }}>
                        <Link className='nav-link' to={{ pathname: item.route }} onClick={toggleSidebar}>{item[lang]}</Link>
                      </motion.div>
                    ))
                  }

                  <motion.div className="button-container" initial={{ y: "-100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", delay: 0.30 }}>
                    {
                      lang == "eng" ?
                        <a className={theme == "light" ? 'main-button-out light-out' : 'main-button-out dark-out'}>Resume</a> :
                        <a className={theme == "light" ? 'main-button-out light-out' : 'main-button-out dark-out'}>Currículo</a>
                    }
                  </motion.div>

                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div >
    </div >
  )
}

export default Navbar