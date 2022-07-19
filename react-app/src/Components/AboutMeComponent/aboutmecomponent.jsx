import React from 'react'
import Aboutme from './aboutme/aboutme'
import Aboutmepersonal from './aboutmepersonal/aboutmepersonal'

import { motion } from 'framer-motion'

const AboutmeComponent = (props) => {
  return (
    <div>
      <motion.div initial={{ y: "20%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-20%", opacity: 0 }} transition={{ type: "spring", duration: 0.5 }}>
        <Aboutme lang={props.lang} theme={props.theme}/>
      </motion.div>
      <Aboutmepersonal lang={props.lang} theme={props.theme}/>
    </div>
  )
}

export default AboutmeComponent