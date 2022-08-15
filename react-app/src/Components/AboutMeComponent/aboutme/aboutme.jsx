// Imports
import React from 'react'
import './aboutme.css'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect';

// Container Content
import { data } from './data'

// Svg images
import Dash from './svg/dash'
import Profile from './svg/profile'



const Aboutme = (props) => {
  // Language var for this page
  let lang = props.lang
  let theme = props.theme

  // JSX Container
  return (
    <div className={theme === 'light' ? 'main-container light-color' : 'main-container dark-color'}>
      <div className='main-intro-container'>
        <div className="hello-container">
          <Dash theme={theme} />
          <h5>{data.greet[lang]}</h5>
        </div>
        <h1>{data.intro[lang]}</h1>
        <h2>

          <Typewriter
            options={{
              strings: data.titles[lang],
              pauseFor: 1000,
              autoStart: true,
              loop: true,
              delay: 35
            }}
          />
        </h2>
        <p>{data.p1[lang]}</p>
        <p>{data.p2[lang]}</p>
        <div className="main-button-container">
          <button className={theme == "light" ? 'main-button-out light-out' : 'main-button-out dark-out'}>
            <Link className='nav-link' to={{ pathname: '/work/' + data.latest }}>{data.btnProj[lang]}</Link>
          </button>
          <button className={theme == "light" ? 'main-button-fill light-fill' : 'main-button-fill dark-fill'}>
            <Link className='nav-link' to={{ pathname: '/contacts' }}>{data.btnContact[lang]}</Link>
          </button>
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