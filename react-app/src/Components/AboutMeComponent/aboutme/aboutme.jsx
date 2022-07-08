// Imports
import React from 'react'
import './aboutme.css'

// Container Content
import { data } from './data'

// Svg images
import Dash from './svg/dash'
import Profile from './svg/profile'



const Aboutme = (props) => {
  // Language var for this page
  let lang = props.lang

  // JSX Container
  return (
    <div className='main-container'>
      <div className='main-intro-container'>
        <div className="hello-container">
          <Dash />
          <h5>{data.greet[lang]}</h5>
        </div>
        <h1>{data.intro[lang]}</h1>
        <h2>{data.titles[lang]}</h2>
        <p>{data.p1[lang]}</p>
        <p>{data.p2[lang]}</p>
        <div className="main-button-container">
          <button className='main-button-out'>{data.btnProj[lang]}</button>
          <button className='main-button-fill'>{data.btnContact[lang]}</button>
        </div>
      </div>
      <div className="main-im-container">
        <Profile />
      </div>

    </div>
  )
}

// Export Container
export default Aboutme