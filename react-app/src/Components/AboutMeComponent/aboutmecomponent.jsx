import React from 'react'
import Aboutme from './aboutme/aboutme'
import Aboutmepersonal from './aboutmepersonal/aboutmepersonal'

import { motion } from 'framer-motion'
import { anim } from '../animation'

const AboutmeComponent = (props) => {
  return (
    <div>
      <motion.div
        initial={anim.pageTransition.initial}
        animate={anim.pageTransition.animate}
        exit={anim.pageTransition.exit}
        transition={anim.pageTransition.transition}>
        <Aboutme lang={props.lang} theme={props.theme} />
        <Aboutmepersonal lang={props.lang} theme={props.theme} />
      </motion.div>
    </div>
  )
}

export default AboutmeComponent