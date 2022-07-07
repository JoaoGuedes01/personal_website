import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div className='ctc-ctnr'>
      <div className="title-container">
        <h1>Let's Talk</h1>
      </div>

      <div className="contact-container">
        <div className="contact-item">
          <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="57.6863" cy="57.5889" r="57.3082" fill="#2F2F2F" />
            <g clipPath="url(#clip0_0_1)">
              <path d="M82.1506 70.5073C80.2894 66.9887 73.826 63.1735 73.5414 63.0067C72.7109 62.5339 71.8442 62.2837 71.0331 62.2837C69.8272 62.2837 68.84 62.8361 68.2422 63.8409C67.2967 64.9717 66.1242 66.2935 65.8396 66.4984C63.6372 67.9926 61.9132 67.823 60.0056 65.9154L49.3589 55.2678C47.4634 53.3723 47.2891 51.6269 48.7731 49.4365C48.9808 49.1501 50.3025 47.9766 51.4334 47.0303C52.1545 46.6011 52.6495 45.9634 52.8664 45.1811C53.1547 44.1401 52.9424 42.9157 52.2621 41.7227C52.1017 41.4483 48.2846 34.984 44.7679 33.1237C44.1116 32.7761 43.372 32.5925 42.6304 32.5925C41.4087 32.5925 40.2594 33.069 39.3955 33.9319L37.0429 36.2835C33.3223 40.0033 31.9755 44.2198 33.0377 48.8155C33.9238 52.6455 36.5062 56.7212 40.7145 60.9285L54.3448 74.5589C59.6709 79.885 64.7486 82.586 69.437 82.586C69.437 82.586 69.437 82.586 69.4379 82.586C72.8861 82.586 76.1006 81.1206 78.9898 78.2314L81.3414 75.8798C82.7708 74.4514 83.0952 72.2916 82.1506 70.5073Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_0_1">
                <rect width="50" height="50" fill="white" transform="translate(32.6864 32.5889)" />
              </clipPath>
            </defs>
          </svg>

          <h3>+351 926909235</h3>
        </div>

        <div className="contact-item">
          <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="57.5" cy="57.5889" r="57.3082" fill="#2F2F2F" />
            <path d="M80.8334 47.5889C80.8334 34.7023 70.3867 24.2556 57.5 24.2556C44.6134 24.2556 34.1667 34.7023 34.1667 47.5889C34.1667 52.2123 35.5334 56.5123 37.85 60.139H37.8234C45.69 72.4556 57.5 90.9223 57.5 90.9223L77.1767 60.139H77.1534C79.4667 56.5123 80.8334 52.2123 80.8334 47.5889ZM57.5 57.589C51.9767 57.589 47.5 53.1123 47.5 47.5889C47.5 42.0656 51.9767 37.5889 57.5 37.5889C63.0234 37.5889 67.5 42.0656 67.5 47.5889C67.5 53.1123 63.0234 57.589 57.5 57.589Z" fill="white" />
          </svg>

          <h3>Av. Dr. Artur Soares nº23</h3>
          <h3>S.Vicente, Braga</h3>
        </div>

        <div className="contact-item">
          <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="57.314" cy="57.5889" r="57.3082" fill="#2F2F2F" />
            <g clipPath="url(#clip0_0_1)">
              <path d="M58.658 59.4216C58.2578 59.715 57.7859 59.8615 57.314 59.8615C56.8419 59.8615 56.3701 59.715 55.97 59.4216L36.8594 45.4073L32.3141 42.0741L32.314 74.2555C32.3141 75.5107 33.3315 76.5283 34.5867 76.5283L80.0412 76.5281C81.2965 76.5281 82.314 75.5105 82.314 74.2555V42.074L77.7684 45.4073L58.658 59.4216Z" fill="white" />
              <path d="M57.314 54.7706L79.2967 38.6496L35.3308 38.6494L57.314 54.7706Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_0_1">
                <rect width="50" height="50" fill="white" transform="translate(32.314 32.5889)" />
              </clipPath>
            </defs>
          </svg>

          <h3>joaoguedes.cjp@gmail.com</h3>
        </div>
      </div>

      <div className="title-container">
        <h1>Send me a message</h1>
      </div>

      <div className='message-container'>
        <div className="id-area">
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Subject' />
          <input type="text" placeholder='E-mail' />
        </div>
        <textarea className='message-area' cols="30" rows="10" placeholder='Message'></textarea>
        <button className='main-button-fill'>
          <div className="btn-contanier">
            Send
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.6036 3.45729L25.6749 13.5349C26.2977 13.8327 26.5611 14.5791 26.2632 15.2019C26.1401 15.4594 25.9324 15.667 25.6749 15.7902L4.6036 25.8678C3.9808 26.1656 3.23447 25.9022 2.93661 25.2794C2.80718 25.0088 2.77939 24.7006 2.85832 24.4112L4.96587 16.6833C5.01867 16.4897 5.18211 16.3464 5.38096 16.3194L15.5916 14.9324C15.6795 14.9199 15.7525 14.8621 15.7861 14.7831L15.8037 14.7203C15.8204 14.6032 15.753 14.4934 15.6474 14.4521L15.5916 14.4375L5.39291 13.0506C5.19408 13.0235 5.03068 12.8802 4.97789 12.6867L2.85832 4.91386C2.67668 4.24783 3.06935 3.56065 3.73538 3.37901C4.0248 3.30007 4.33296 3.32786 4.6036 3.45729Z" fill="white" />
            </svg>

          </div>
        </button>
      </div>
    </div>
  )
}

export default Contact