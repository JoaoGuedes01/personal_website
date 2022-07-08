import React from 'react'
import './aboutmepersonal.css'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { data } from './data'
import { socialData } from './socialData'

import SvgsTech from './svgs-tech'
import SvgsInt from './svgs-int'
import SvgsApps from './svgs-apps'
import SvgsSocial from './svgs-social'

const Aboutmepersonal = (props) => {

  const [toggleState, setToggleState] = useState(1);

  const ToggleTab = (index) => {
    setToggleState(index);
  }

  let lang = props.lang

  return (
    <div className='main-personal-conatiner'>
      <div className='about-container'>
        <div className='about-nav'>
          <ul>
            {data.map((item) => (
              <li key={item.id} className="about-item" onClick={() => ToggleTab(item.id)}>{item.title[lang]}</li>
            ))}
          </ul>
        </div>
        <div className='about-info'>
          <AnimatePresence exitBeforeEnter>
            {/* Description Tab */}
            {toggleState === 1 &&
              <motion.div key={"abc1"} initial={{ x: "20%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-20%", opacity: 0 }} transition={{ type: "spring", duration: 0.15 }}>
                <h1 className='about-title'>{data[0].description.title[lang]}</h1>
                <p className='about-p'>{data[0].description.p1[lang]}</p>
                <p className="about-p">{data[0].description.p2[lang]}</p>
              </motion.div>
            }
            {/* Soft Skills Tab */}
            {toggleState === 2 &&
              <motion.div key={"abc2"} initial={{ x: "20%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-20%", opacity: 0 }} transition={{ type: "spring", duration: 0.15 }}>
                <h1 className='about-title'>My Soft Skills</h1>
                <div className='soft-container'>
                  <ul>
                    {data[1].description.soft_skills[lang].map((item) => (
                      <li key={item} className="soft-item">{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            }

            {/* Tech Skills Tab */}
            {toggleState === 3 &&
              <motion.div key={"abc3"} initial={{ x: "20%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-20%", opacity: 0 }} transition={{ type: "spring", duration: 0.15 }}>
                <h1 className='about-title'>{data[2].description.title[lang]}</h1>
                <div className="tech-grid">

                  {data[2].description.tech_list.map((item) => (
                    <div key={item.name} className="grid-item">
                      <div className="item-name">{item.name}</div>
                      <div className="item-bar">
                        <SvgsTech level={item.level} />
                      </div>
                    </div>
                  ))}

                </div>
              </motion.div>
            }

            {/* Interests Tab */}
            {toggleState === 4 &&
              <motion.div key={"abc4"} initial={{ x: "20%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-20%", opacity: 0 }} transition={{ type: "spring", duration: 0.15 }}>
                <h1 className='about-title'>{data[3].description.title[lang]}</h1>
                <div className='interests-grid'>
                  {data[3].description.int_list.map((item, index) => (
                    <div key={index} className="interests-item">
                      <div className="interests-icon">
                        <SvgsInt index={index} />
                      </div>
                      <div className="interests-title">{item}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            }

            {/* About this App Tab */}
            {toggleState === 5 &&
              <motion.div key={"abc5"} initial={{ x: "20%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-20%", opacity: 0 }} transition={{ type: "spring", duration: 0.15 }}>
                <h1 className='about-title'>{data[4].description.title[lang]}</h1>

                <div className='soft-container'>
                  <div className='app-built-title'>{data[4].description.sub1[lang]}</div>
                  <div className="app-built-container">
                    {data[4].description.tech.map((item) => (
                      <div key={item}>
                        <SvgsApps name={item} />
                      </div>
                    ))}
                  </div>

                  <div className="app-built-title">{data[4].description.sub2[lang]}</div>
                  <div className="design-apps">
                    {data[4].description.apps.map((item) => (
                      <div key={item} className="designer-app-container">
                        <div className="bar">
                          <SvgsApps name={item} />
                        </div>
                        <div className="app-title">{item}</div>
                      </div>
                    ))}

                    <div>
                      <a className='main-button-out' href={data[4].description.url.drib}>Explore</a>
                    </div>
                    <div>
                      <a className='main-button-out' href={data[4].description.url.figma}>Explore</a>
                    </div>

                  </div>
                </div>
              </motion.div>
            }

          </AnimatePresence>
        </div>

      </div>

      {/* Social Icons */}
      <div className='center-container'>
        <ul className="social-container">

          {socialData.map((item) => (
            <a key={item.name} className="social-item" href={item.url}>
              <SvgsSocial name={item.name} />
            </a>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Aboutmepersonal