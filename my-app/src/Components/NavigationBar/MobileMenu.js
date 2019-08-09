import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import '../../Styles/MobileMenu.css'

export default class MobileMenu extends Component {
    render() {
        if(!this.props.show){
            return null;
        }
        return (
            <div className="Nav-Mobile">
                <div className="Nav-Flex-Mobile">
                    <NavLink className="Nav-Elements" to="/About" onClick={this.props.onClose}>About</NavLink>
                    <NavLink className="Nav-Elements" to="/Resume" onClick={this.props.onClose}>Resume</NavLink>
                    <NavLink className="Nav-Elements" to="Projects" onClick={this.props.onClose}>Projects</NavLink>
                    <NavLink className="Nav-Elements" to="/Contact" onClick={this.props.onClose}>Contact</NavLink>
                </div>
            </div>
        )
    }
}
