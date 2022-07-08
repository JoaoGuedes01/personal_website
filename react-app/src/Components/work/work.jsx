import React from 'react'
import './work.css'
import { motion } from 'framer-motion'
/* Project Images */

import { data } from './data'
import {commondata} from '../common'
import SvgsIcons from './svgs-icons'


const Work = (props) => {
  let lang = props.lang
  return (
    <>
      <motion.div initial={{ y: "20%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-20%", opacity: 0 }} transition={{ type: "spring", duration: 0.5 }}>
        <div className="title-container">
          <h1>My Work</h1>
        </div>
        <div className="work-container">

          {
            data.map((item,index) => (
              <motion.div className="work-item" key={item.title[lang]}>
                <img className='work-item-im' src={require("" + item.image)} alt="" />
                <div className="work-item-description">
                  <h2>{item.title[lang]}</h2>
                  <div className='project-type'>
                    <div>{item.subject[lang]}</div>
                    <SvgsIcons name={item.icon} />
                  </div>
                  <div className='work-item-right-desc'>{item.description[lang]}</div>
                  <a className='main-button-fill'>{commondata.expbtn[lang]}</a>
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