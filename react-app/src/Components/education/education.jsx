import React from 'react'
import './education.css'

import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import { data } from './data-education'

const Education = (props) => {
  let lang = props.lang
  let theme = props.theme

  const [toggleState, setToggleState] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <motion.div initial={{ y: "20%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-20%", opacity: 0 }} transition={{ type: "spring", duration: 0.5 }} className={theme==='light' ? "light-color" : "dark-color"}>
      <div className="title-container">
        <h1>{data.title[lang]}</h1>
      </div>

      <div className="education-container">
        <div className="ed-nav">
          <ul >

            {data.courses.map((item, i) => (
              <motion.li onClick={() => { setToggleState(i); setActiveIndex(i) }}> {activeIndex == i && <motion.span layoutId='highligh' className='highligh' />} {item.title[lang]}</motion.li>
            ))}

          </ul>
        </div>
        <div className="ed-desc">
          {/* MIEGSI Tab */}
          <AnimatePresence exitBeforeEnter>
            <motion.div key={toggleState} initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -10, opacity: 0 }} transition={{ type: "spring", duration: 0.15 }}>
              <h1>{data.courses[toggleState].title[lang]}</h1>
              <div className="ed-details">
                <h5>{data.courses[toggleState].duration[lang]}</h5>
                <h5>{data.courses[toggleState].school[lang]}</h5>
              </div>
              {
                data.courses[toggleState].desc.map((item) => (
                  <p key={item[lang]}>{item[lang]}</p>
                ))
              }

              {
                data.courses[toggleState].courseurl &&
                <a href={data.courses[toggleState].courseurl} className={theme == "light" ? 'main-button-fill light-fill' : 'main-button-fill dark-fill'}>{data.explorebtn[lang]}</a>
              }

              {
                data.courses[toggleState].certurl &&
                <a href={data.courses[toggleState].certurl} className={theme == "light" ? 'main-button-out light-out' : 'main-button-out dark-out'}>{data.certbtn[lang]}</a>
              }
            </motion.div>
          </AnimatePresence>
        </div>
      </div >
    </motion.div >
  )
}

export default Education