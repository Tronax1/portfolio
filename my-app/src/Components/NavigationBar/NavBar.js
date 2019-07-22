import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import DropDown from './DropDown'
import Nav from '../Elements/Nav'
import NavFlex from '../Elements/NavFlex'

import "./NavDesign.css"

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  showMenu = () =>{
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    return (
      <React.Fragment>
            <Nav>
                <NavFlex>
                    <div className = "Brand">
                        < NavLink className = "textHover Logo" to = "/">JV</NavLink >
                    </div>   
                    <div className="Elements">
                        < NavLink className = "Spacing textHover" to="/About">About</NavLink >
                        < NavLink className = "Spacing textHover" to = "/Resume" > Resume </NavLink >
                        < NavLink className = "Spacing textHover" to = "/Projects" > Projects </NavLink >
                        < NavLink className = "Spacing textHover" to = "/Contact" > Contact </NavLink >     
                    </div>
                    <button className="Hamburger" onClick={this.showMenu}>
                      < div id = "Line" / >
                      < div id = "Line" / >
                      < div id = "Line" / >
                    </button>
                </NavFlex>
            </Nav>
            <DropDown onClose ={this.showMenu} show={this.state.show}/>
        </React.Fragment>
    )
  }
}