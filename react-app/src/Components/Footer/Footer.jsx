import React from 'react'
import './Footer.css'



const Footer = ({ setLang, lang }) => {

  const handleChangeLang = () => {
    if (lang == "pt") {
      setLang("eng")
    } else {
      setLang("pt")
    }
  }

  return (
    <div className='footer-margin'>
      <div className='footer-container'>
        {/* Toggle Switch Input */}
        <div>
          <label className="switch">
            <input onChange={handleChangeLang} type="checkbox" />
            <span className="slider round"></span>
          </label>

          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>


        <div className='footer-message'>
          <h5>Designed and built by João Guedes 2022</h5>
        </div>

      </div>
    </div>
  )
}

export default Footer