import React from 'react'
import './work.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
/* Project Images */

import { data } from './data'
import { commondata } from '../common'
import SvgsIcons from './svgs-icons'


const Work = (props) => {
  let lang = props.lang
  let theme = props.theme
  return (
    <>
      <motion.div initial={{ y: "20%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-20%", opacity: 0 }} transition={{ type: "spring", duration: 0.5 }} className={theme === 'light' ? "light-color" : "dark-color"}>
        <div className="title-container">
          <h1>My Work</h1>
        </div>
        <div className="work-container">

          {
            data.map((item, index) => (
              <motion.div className="work-item" key={item.title[lang]}>
                <img className='work-item-im' src={require("" + item.image)} alt="" />
                <div className={theme === "light" ? "work-item-description" : "work-item-description dark-work-item-desc"}>
                  <h2>{item.title[lang]}</h2>
                  <div className='project-type'>
                    <div>{item.subject[lang]}</div>
                    <SvgsIcons name={item.icon} theme={theme} />
                  </div>
                  <div className={theme === 'light' ? 'work-item-right-desc light-work-item' : 'work-item-right-desc dark-work-item'}>{item.description[lang]}</div>

                  <div className={theme == "light" ? 'main-button-fill light-fill' : 'main-button-fill dark-fill'}>
                    <Link className='nav-link' to={item.route}>
                      {commondata.expbtn[lang]}
                    </Link>
                  </div>

                </div>
              </motion.div>
            ))
          }
        </div>
      </motion.div>
    </>

  )
}
export default Work