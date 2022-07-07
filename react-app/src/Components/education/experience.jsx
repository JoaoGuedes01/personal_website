import React from 'react'
import './education.css'

import { useState } from 'react'

import { motion } from 'framer-motion'


const Education = () => {
  // Courses
  const checkmarxurl = "https://checkmarx.com"


  const [toggleState, setToggleState] = useState(1);
  const [activeIndex, setActiveIndex] = useState(1);

  const ToggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <motion.div initial={{ y: "20%", opacity:0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-20%", opacity: 0 }} transition={{ type: "spring", duration: 0.5 }}>
      <div className="title-container">
        <h1>My Experience</h1>
      </div>

      <div className="education-container">
        <div className="ed-nav">
          <ul >
            <motion.li onClick={() => { setToggleState(1); setActiveIndex(1) }}> {activeIndex == 1 && <motion.span layoutId='highligh' className='highligh' />} Summer Internship for Software Engineering and Quality Assurance</motion.li>
          </ul>
        </div>
        <div className="ed-desc">
          {/* MIEGSI Tab */}
          {toggleState == 1 &&
            <div>
              <h1>Summer Internship for Software Engineering and Quality Assurance</h1>
              <div className="ed-details">
                <h5>September 2018 - Present</h5>
                <h5>University of Minho</h5>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
              <a href={checkmarxurl} className='main-button-fill'>Check it out</a>
            </div>
          }
        </div>
      </div >
    </motion.div >
  )
}

export default Education