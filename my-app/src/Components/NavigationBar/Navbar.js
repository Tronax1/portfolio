import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import '../../Styles/NavBar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div className="Nav">
                <div className="Nav-Flex">
                    <NavLink className="Nav-Elements Home" to="/">Home</NavLink>
                    <NavLink className="Nav-Elements" to="/About">About</NavLink>
                    <NavLink className="Nav-Elements" to="/Resume">Resume</NavLink>
                    <NavLink className="Nav-Elements" to="Projects">Projects</NavLink>
                    <NavLink className="Nav-Elements" to="/Contact">Contact</NavLink>
                </div>
            </div>
        )
    }
}
