import React, { Component } from 'react'
import Delay from '../Animation/Delay'

import '../../Styles/About.css'

export default class About extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                <Delay/>
                <div className="About-Content">
                    <h1>About Me</h1>
                    <p><strong>I am a self taught web developer with a strong background in object oriented programming.
                        I also like to play chess and learn new technologies during my free time.</strong>
                    </p>
                </div>
            </div>
        )
    }
}
