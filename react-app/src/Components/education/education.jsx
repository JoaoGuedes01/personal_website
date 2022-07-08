import React from 'react'
import './education.css'

import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'


const Education = () => {
  // Courses
  const miegsiurl = "https://miegsi.dsi.uminho.pt"
  const webdevbooturl = "https://www.udemy.com/course/the-web-developer-bootcamp"
  const meanurl = "https://www.udemy.com/course/angular-2-and-nodejs-the-practical-guide"
  const angularurl = "https://www.udemy.com/course/the-complete-guide-to-angular-2"
  const ethhackurl = "https://www.udemy.com/course/learn-ethical-hacking-from-scratch"


  // Certificates
  const webdevbootcert = "https://www.udemy.com/certificate/UC-c8ada681-95d7-4218-b516-29e0bc3f326b/"
  const meancert = "https://www.udemy.com/certificate/UC-d34f5145-9aa7-47d0-bb63-7a3af15357ea/"
  const angularcert = "https://www.udemy.com/certificate/UC-ab9946d1-c727-4c3b-af52-85b8f6f5e8aa/"
  const ethhackcert = "https://www.udemy.com/certificate/UC-e80e8d34-2f11-481f-aa73-441cccf2fd40/"

  const [toggleState, setToggleState] = useState(1);
  const [activeIndex, setActiveIndex] = useState(1);

  const ToggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <motion.div initial={{ y: "20%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-20%", opacity: 0 }} transition={{ type: "spring", duration: 0.5 }}>
      <div className="title-container">
        <h1>My Education</h1>
      </div>

      <div className="education-container">
        <div className="ed-nav">
          <ul >
            <motion.li onClick={() => { setToggleState(1); setActiveIndex(1) }}> {activeIndex == 1 && <motion.span layoutId='highligh' className='highligh' />} Master's Student of Management and Information Systems</motion.li>
            <motion.li onClick={() => { setToggleState(2); setActiveIndex(2) }}> {activeIndex == 2 && <motion.span layoutId='highligh' className='highligh' />}The Web Developer Bootcamp 2022</motion.li>
            <motion.li onClick={() => { setToggleState(3); setActiveIndex(3) }}> {activeIndex == 3 && <motion.span layoutId='highligh' className='highligh' />}Angular & NodeJS - The MEAN Stack</motion.li>
            <motion.li onClick={() => { setToggleState(4); setActiveIndex(4) }}> {activeIndex == 4 && <motion.span layoutId='highligh' className='highligh' />}Angular - The complete Guide</motion.li>
            <motion.li onClick={() => { setToggleState(5); setActiveIndex(5) }}> {activeIndex == 5 && <motion.span layoutId='highligh' className='highligh' />}Ethical Hacking</motion.li>
          </ul>
        </div>
        <div className="ed-desc">
          {/* MIEGSI Tab */}
          <AnimatePresence exitBeforeEnter>
            {toggleState == 1 &&
              <motion.div key={"abc1"} initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -10, opacity: 0 }} transition={{ type: "spring", duration: 0.15 }}>
                <h1>Master's Student of Management Engineering and Information Systems</h1>
                <div className="ed-details">
                  <h5>September 2018 - Present</h5>
                  <h5>University of Minho</h5>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
                <a href={miegsiurl} className='main-button-fill'>Check it out</a>
              </motion.div>
            }

            {/* Web Dev Bootcamp Tab */}
            {toggleState == 2 &&
              <motion.div key={"abc2"} initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -10, opacity: 0 }} transition={{ type: "spring", duration: 0.15 }}>
                <h1>The Web Developer Bootcamp 2022</h1>
                <div className="ed-details">
                  <h5>March 2022 - June 2022</h5>
                  <h5>Udemy</h5>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
                <a href={webdevbooturl} className='main-button-fill'>Check it out</a>
                <a href={webdevbootcert} className='main-button-out'>Certificate</a>
              </motion.div>
            }

            {/* MEAN Tab */}
            {toggleState == 3 &&
              <motion.div key={"abc3"} initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -10, opacity: 0 }} transition={{ type: "spring", duration: 0.15 }}>
                <h1>Angular & NodeJS - The MEAN Stack</h1>
                <div className="ed-details">
                  <h5>June 2020 - August 2020</h5>
                  <h5>Udemy</h5>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
                <a href={meanurl} className='main-button-fill'>Check it out</a>
                <a href={meancert} className='main-button-out'>Certificate</a>
              </motion.div>
            }

            {/* Angular Tab */}
            {toggleState == 4 &&
              <motion.div key={"abc4"} initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -10, opacity: 0 }} transition={{ type: "spring", duration: 0.15 }}>
                <h1>Angular- The complete Guide</h1>
                <div className="ed-details">
                  <h5>June 2020 - August 2020</h5>
                  <h5>Udemy</h5>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
                <a href={angularurl} className='main-button-fill'>Check it out</a>
                <a href={angularcert} className='main-button-out'>Certificate</a>
              </motion.div>
            }

            {/* Ethical Hacking Tab */}
            {toggleState == 5 &&
              <motion.div key={"abc5"} initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -10, opacity: 0 }} transition={{ type: "spring", duration: 0.15 }}>
                <h1>Learn Ethical Hacking from scratch</h1>
                <div className="ed-details">
                  <h5>June 2020 - August 2020</h5>
                  <h5>Udemy</h5>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
                <a href={ethhackurl} className='main-button-fill'>Check it out</a>
                <a href={ethhackcert} className='main-button-out'>Certificate</a>
              </motion.div>
            }
          </AnimatePresence>
        </div>
      </div >
    </motion.div >
  )
}

export default Education