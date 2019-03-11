import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import "./DropDown.css"

export default class DropDown extends Component {
  render() {
      if (!this.props.show) {
          return null;
      }
    return (
      <div className="Dropdown">
                <div className="ElementsDrop">
                        < NavLink className = "textHover" to="/About">About</NavLink >
                        < NavLink className = "textHover" to = "/Resume" > Resume </NavLink >
                        < NavLink className = "textHover" to = "/Projects" > Projects </NavLink >
                        < NavLink className = "textHover" to = "/Contact" > Contact </NavLink >     
                </div>
      </div>
    )
  }
}
