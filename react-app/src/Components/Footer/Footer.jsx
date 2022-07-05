import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-container">
        {/* Toggle Switch Input */}
        <div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>


        <h5>Designed and built by João Guedes 2022</h5>
      </div>
    </div>
  )
}

export default Footer