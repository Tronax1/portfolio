import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import "./DropDown.css"

export default class DropDown extends Component {
  render() {
      if (!this.props.show) {
          return null;
      }
    return (
      <div id= "drop" className="Dropdown">
                <div className="ElementsDrop">
                        < NavLink className = "textHover Spacing" to="/About" onClick={this.props.onClose}>About</NavLink >
                        < NavLink className = "textHover Spacing" to = "/Resume" onClick={this.props.onClose}> Resume </NavLink >
                        < NavLink className = "textHover Spacing" to = "/Projects" onClick={this.props.onClose}> Projects </NavLink >
                        < NavLink className = "textHover Spacing" to = "/Contact" onClick={this.props.onClose}> Contact </NavLink >     
                </div>
      </div>
    )
  }
}
