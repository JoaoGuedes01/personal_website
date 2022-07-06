import React from 'react'
import './education.css'

import { useState } from 'react'


const Experince = () => {
    // Courses
    const checkmarxurl = "https://checkmarx.com/"

    const [toggleState, setToggleState] = useState(1);

    const ToggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div>
            <div className="title-container">
                <h1>My Experience</h1>
            </div>
            <div className="education-container">
                <div className="ed-nav">
                    <ul>
                        <li onClick={() => setToggleState(1)}>Summer Internship for Software Engineering and QA</li>
                    </ul>
                </div>
                <div className="ed-desc">
                    {/* MIEGSI Tab */}
                    {toggleState == 1 &&
                        <div>
                            <h1>Summer Internship for Software Engineering and QA</h1>
                            <div className="ed-details">
                                <h5>August 2021 - October 2021</h5>
                                <h5>Checkmarx</h5>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio</p>
                            <a href={checkmarxurl} className='main-button-fill'>Check it out</a>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Experince