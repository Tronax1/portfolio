import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import '../../Styles/Home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="Home-b" >
                    <p className="Welcome-Message" id="Initial-animation">Hello, I'm Jorge Villarreal</p>
                    <NavLink className="Project-Redirect" to="/Projects" id="Initial-animation">My Work</NavLink>
                    <div className="Link-refs" id="Initial-animation">
                        <a className="Link-icons" href="https://github.com/Tronax1" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github fa-4x"></i>
                        </a>
                        <a className="Link-icons" href="https://www.linkedin.com/in/jorgevillarrealgongora/" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-linkedin fa-4x"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
