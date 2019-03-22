import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import DropDown from './DropDown'

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
            <div className="Nav">
                < div className = "Nav-flex" >
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
                </div>
            </div>
            <DropDown show={this.state.show}/>
        </React.Fragment>
    )
  }
}