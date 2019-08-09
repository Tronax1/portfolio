import React, { Component } from 'react'
import Delay from '../Animation/Delay'

import '../../Styles/About.css'

export default class About extends Component {
    render() {
        return (
            <div>
                <Delay/>
                <div className="About-Content">
                    <h1>About Me</h1>
                    <p>I am a self taught web developer with a strong background in object oriented programming.
                        I also like to play chess and learn new technologies during my free time.
                    </p>
                </div>
            </div>
        )
    }
}
