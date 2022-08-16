import React, { useEffect, useRef, useState } from 'react'
import './contact.css'
import { motion } from 'framer-motion'
import Svgs from './svgs'

import { data } from './data'
import { anim } from '../animation'

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = (props) => {
  let lang = props.lang
  let theme = props.theme

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [isSending, setIsSending] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true)
    console.log("Sending Email")
    emailjs.sendForm('service_1uabkxd', 'template_4dyffee', form.current, 'GpAUHpGGFF6w2Pdlp')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: "Email Sent!",
          text: "Thank you, I'll get back to you as soon as I can",
          confirmButtonColor: '#000',
          iconColor: "#6C63FF"
        })
        setIsSending(false)
      }, (error) => {
        console.log(error.text);
        alert('There was an error')
        setIsSending(false)
      });
  };

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

      <form ref={form} onSubmit={sendEmail}>
        <div className='message-container'>
          <div className="id-area">
            <input type="text" placeholder={data.form.name[lang]} name="name" />
            <input type="text" placeholder={data.form.subject[lang]} name="subject" />
            <input type="text" placeholder={data.form.email} name="email" />
          </div>
          <textarea className='message-area' cols="30" rows="10" placeholder={data.form.message[lang]} name="message" ></textarea>
        </div>
        <div className="btn-spacing">
          <button className={theme == "light" ? isSending ? 'main-button-fill light-fill sending' : 'main-button-fill light-fill'  : isSending ? 'main-button-fill dark-fill sending' : 'main-button-fill dark-fill'} onClick={sendEmail} disabled={isSending ? true : false}>
            <div className="btn-contanier"  >
              <h3>{data.sendbtn[lang]}</h3>
              <Svgs name="send" theme={theme} />
            </div>
          </button>
        </div>
      </form>



    </motion.div>
  )
}

export default Contact