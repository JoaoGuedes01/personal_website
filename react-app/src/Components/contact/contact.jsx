import React, { useEffect } from 'react'
import './contact.css'
import { motion } from 'framer-motion'
import Svgs from './svgs'

import { data } from './data'
import { anim } from '../animation'



const Contact = (props) => {
  let lang = props.lang
  let theme = props.theme

  useEffect(() => {
    window.scrollTo(0, 0)
}, [])

  return (
    <motion.div
      initial={anim.pageTransition.initial}
      animate={anim.pageTransition.animate}
      exit={anim.pageTransition.exit}
      transition={anim.pageTransition.transition}
      className={theme === 'light' ? 'light-color ctc-ctnr' : 'dark-color ctc-ctnr'}>
      <div className="title-container">
        <h1> {data.pageTitle[lang]}</h1>
      </div>

      <div className="contact-container">
        <div className="contact-item">
          <Svgs name="phone" theme={theme} />

          <h3>{data.phone}</h3>
        </div>

        <div className="contact-item">
          <Svgs name="location" theme={theme} />

          <h3>{data.address.pt1}</h3>
          <h3>{data.address.pt2}</h3>
        </div>

        <div className="contact-item">
          <Svgs name="email" theme={theme} />
          <h3>{data.email}</h3>

        </div>
      </div>

      <div className="title-container">
        <h1>{data.messageTitle[lang]}</h1>
      </div>

      <div className='message-container'>
        <div className="id-area">
          <input type="text" placeholder={data.form.name[lang]} />
          <input type="text" placeholder={data.form.subject[lang]} />
          <input type="text" placeholder={data.form.email} />
        </div>
        <textarea className='message-area' cols="30" rows="10" placeholder={data.form.message[lang]}></textarea>
      </div>

      <div className="btn-spacing">
        <button className={theme == "light" ? 'main-button-fill light-fill' : 'main-button-fill dark-fill'}>
          <div className="btn-contanier">
            <h3>{data.sendbtn[lang]}</h3>
            <Svgs name="send" theme={theme} />
          </div>
        </button>
      </div>

    </motion.div>
  )
}

export default Contact