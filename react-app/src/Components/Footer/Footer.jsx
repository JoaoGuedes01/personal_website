import React from 'react'
import './Footer.css'

import FooterSvg from './footer-svg'


const Footer = ({ setLang, lang, setTheme, theme }) => {

  const handleChangeLang = () => {
    if (lang == "pt") {
      setLang("eng")
    } else {
      setLang("pt")
    }
  }

  const handleChangeTheme = () => {
    if (theme == "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <div className='footer-margin'>
      <div className='footer-container'>
        {/* Toggle Switch Input */}
        <div className='btn-container' >
          <a onClick={handleChangeLang} className={theme==='light' ? "langbtn light-color" : "langbtn dark-color"} >{lang == "pt" ? "PT" : "ENG"}</a>
          <a onClick={handleChangeTheme} className="themebtn" ><FooterSvg name={theme == "light" ? "light" : "dark"} /></a>

        </div>


        <div className={theme==='light' ? "footer-message light-color" : "footer-message dark-color"}>
          {
            lang == "eng" ?
              <h5>Designed and built by João Guedes 2022</h5> :
              <h5>Concebido e constuído por João Guedes 2022</h5>
          }

        </div>

      </div>
    </div>
  )
}

export default Footer