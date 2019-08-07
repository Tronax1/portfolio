import React, { Component } from 'react'
import Delay from '../Animation/Delay'

import '../../Styles/Home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Delay/>
                <div className="Home-b">
                    <p className="Welcome-Message">Hello, I'm Jorge Villarreal</p>
                </div>
            </div>
        )
    }
}
