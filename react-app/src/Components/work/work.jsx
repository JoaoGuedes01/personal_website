import React, { useState } from 'react'
import './work.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
/* Project Images */

import { data } from './data'
import { commondata } from '../common'
import SvgsIcons from './svgs-icons'

import { anim } from '../animation'


const Work = (props) => {
  let lang = props.lang
  let theme = props.theme
  const [projsub, setProjsub] = useState("All")

  const options = [
    "All",


    "Web Development",


    "Machine Learning",


    "Networking",




  ]

  const handleSelect = (event) => {
    setProjsub(event.target.value)
  }
  return (
    <>
      <motion.div
        initial={anim.pageTransition.initial}
        animate={anim.pageTransition.animate}
        exit={anim.pageTransition.exit}
        transition={anim.pageTransition.transition}
        className={theme === 'light' ? "light-color" : "dark-color"}>
        <div className="title-container">
          <h1>My Work</h1>
        </div>
        <div className="filter-container">
          <div className="filter">
            <select onChange={handleSelect}>
              {
                options.map((option) => (
                  <option >
                    {option}
                  </option>
                ))
              }
            </select>
          </div>
        </div>


        <div className="work-container">

          {
            data.map((item, index) => (
              (projsub === "All" || projsub === item.sub) &&
              <motion.div className="work-item" key={item.title[lang]}
                initial={anim.appearScroll.initial}
                whileInView={anim.appearScroll.whileInView}
                viewport={anim.appearScroll.viewport}>
                <img className='work-item-im' src={'/workimg/' + item.image + "?auto=compress"} alt="" />
                <div className={theme === "light" ? "work-item-description" : "work-item-description dark-work-item-desc"}>
                  <h2>{item.title[lang]}</h2>
                  <div className='project-type'>
                    <div>{item.subject[lang]}</div>
                    <SvgsIcons name={item.icon} theme={theme} />
                  </div>
                  <div className={theme === 'light' ? 'work-item-right-desc light-work-item' : 'work-item-right-desc dark-work-item'}>{item.description[lang]}</div>
                  <div className={theme == "light" ? 'main-button-fill light-fill' : 'main-button-fill dark-fill'}>
                    <Link className='nav-link' to={{ pathname: '/work/' + item.route }}>
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