import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Hamburger from './Hamburger'
import MobileMenu from './MobileMenu'

import '../../Styles/NavBar.css'

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.showMenu = this.showMenu.bind(this);
        this.state = {
            show: false
        }
    }
    showMenu(){
        this.setState({
            show: !this.state.show
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="Nav">
                    <div className="Nav-Flex">
                        <NavLink className="Nav-Elements Home" to="/">Home</NavLink>
                        <NavLink className="Nav-Elements" id="Desktop-Elements" to="/About">About</NavLink>
                        <NavLink className="Nav-Elements" id="Desktop-Elements" to="/Resume">Resume</NavLink>
                        <NavLink className="Nav-Elements" id="Desktop-Elements" to="Projects">Projects</NavLink>
                        <NavLink className="Nav-Elements" id="Desktop-Elements" to="/Contact">Contact</NavLink>
                        <button id="Mobile-Menu" onClick={this.showMenu}><Hamburger /></button>
                    </div>
                </div>
                <MobileMenu onClose={this.showMenu} show={this.state.show}/>
            </React.Fragment>
        )
    }
}
