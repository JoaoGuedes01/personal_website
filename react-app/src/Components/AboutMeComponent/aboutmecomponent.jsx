import React from 'react'
import Aboutme from './aboutme/aboutme'
import Aboutmepersonal from './aboutmepersonal/aboutmepersonal'

import { motion } from 'framer-motion'

const AboutmeComponent = () => {
  return (
    <div>
      <motion.div initial={{ y: "20%", opacity:0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-20%", opacity: 0 }} transition={{ type: "spring", duration: 0.5 }}>
        <Aboutme />
      </motion.div>
      <Aboutmepersonal />
    </div>
  )
}

export default AboutmeComponent