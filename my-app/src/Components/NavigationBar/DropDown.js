import React, { Component } from 'react'
import NavLinkElements from '../Elements/NavLinkElements'

import "./DropDown.css"

export default class DropDown extends Component {
  render() {
      if (!this.props.show) {
          return null;
      }
    return (
      <div id= "drop" className="Dropdown">
                <div className="ElementsDrop">
                        < NavLinkElements to="/About" onClick={this.props.onClose}>About</NavLinkElements >
                        < NavLinkElements to = "/Resume" onClick={this.props.onClose}> Resume </NavLinkElements >
                        < NavLinkElements to = "/Projects" onClick={this.props.onClose}> Projects </NavLinkElements >
                        < NavLinkElements to = "/Contact" onClick={this.props.onClose}> Contact </NavLinkElements >     
                </div>
      </div>
    )
  }
}
