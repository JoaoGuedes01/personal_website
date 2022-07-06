import React from 'react'
import './education.css'

import { useState } from 'react'


const Education = () => {
  // Courses
  const miegsiurl = "https://miegsi.dsi.uminho.pt"
  const webdevbooturl = "https://www.udemy.com/course/the-web-developer-bootcamp"
  const meanurl = "https://www.udemy.com/course/angular-2-and-nodejs-the-practical-guide"
  const angularurl = "https://www.udemy.com/course/the-complete-guide-to-angular-2"
  const ethhackurl = "https://www.udemy.com/course/learn-ethical-hacking-from-scratch"


  // Certificates
  const webdevbootcert = "https://www.udemy.com/certificate/UC-c8ada681-95d7-4218-b516-29e0bc3f326b/"
  const meancert = "https://www.udemy.com/certificate/UC-d34f5145-9aa7-47d0-bb63-7a3af15357ea/"
  const angularcert = "https://www.udemy.com/certificate/UC-ab9946d1-c727-4c3b-af52-85b8f6f5e8aa/"
  const ethhackcert = "https://www.udemy.com/certificate/UC-e80e8d34-2f11-481f-aa73-441cccf2fd40/"

  const [toggleState, setToggleState] = useState(1);

  const ToggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <div>
      <div className="title-container">
        <h1>My Education</h1>
      </div>
      <div className="education-container">
        <div className="ed-nav">
          <ul>
            <li onClick={() => setToggleState(1)}>Master's Student of Management and Information Systems</li>
            <li onClick={() => setToggleState(2)}>The Web Developer Bootcamp 2022</li>
            <li onClick={() => setToggleState(3)}>Angular & NodeJS - The MEAN Stack</li>
            <li onClick={() => setToggleState(4)}>Angular - The complete Guide</li>
            <li onClick={() => setToggleState(5)}>Ethical Hacking</li>
          </ul>
        </div>
        <div className="ed-desc">
          {/* MIEGSI Tab */}
          {toggleState == 1 &&
            <div>
              <h1>Master's Student of Management Engineering and Information Systems</h1>
              <div className="ed-details">
                <h5>September 2018 - Present</h5>
                <h5>University of Minho</h5>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
              <a href={miegsiurl} className='main-button-fill'>Check it out</a>
            </div>
          }

          {/* Web Dev Bootcamp Tab */}
          {toggleState == 2 &&
            <div>
              <h1>The Web Developer Bootcamp 2022</h1>
              <div className="ed-details">
                <h5>March 2022 - June 2022</h5>
                <h5>Udemy</h5>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
              <a href={webdevbooturl} className='main-button-fill'>Check it out</a>
              <a href={webdevbootcert} className='main-button-out'>Certificate</a>
            </div>
          }

          {/* MEAN Tab */}
          {toggleState == 3 &&
            <div>
              <h1>Angular & NodeJS - The MEAN Stack</h1>
              <div className="ed-details">
                <h5>June 2020 - August 2020</h5>
                <h5>Udemy</h5>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
              <a href={meanurl} className='main-button-fill'>Check it out</a>
              <a href={meancert} className='main-button-out'>Certificate</a>
            </div>
          }

          {/* Angular Tab */}
          {toggleState == 4 &&
            <div>
              <h1>Angular- The complete Guide</h1>
              <div className="ed-details">
                <h5>June 2020 - August 2020</h5>
                <h5>Udemy</h5>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
              <a href={angularurl} className='main-button-fill'>Check it out</a>
              <a href={angularcert} className='main-button-out'>Certificate</a>
            </div>
          }

          {/* Ethical Hacking Tab */}
          {toggleState == 5 &&
            <div>
              <h1>Learn Ethical Hacking from scratch</h1>
              <div className="ed-details">
                <h5>June 2020 - August 2020</h5>
                <h5>Udemy</h5>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
              <a href={ethhackurl} className='main-button-fill'>Check it out</a>
              <a href={ethhackcert} className='main-button-out'>Certificate</a>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Education