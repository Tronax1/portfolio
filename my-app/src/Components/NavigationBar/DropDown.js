import React, { Component } from 'react'
import NavLinkElements from '../Elements/NavLinkElements'
import NavDropDown from '../Elements/NavDropDown'
import NavDropDownElements from '../Elements/NavDropDownElements'

export default class DropDown extends Component {
  render() {
      if (!this.props.show) {
          return null;
      }
    return (
      <NavDropDown>
                <NavDropDownElements>
                        < NavLinkElements to="/About" onClick={this.props.onClose}>About</NavLinkElements >
                        < NavLinkElements to = "/Resume" onClick={this.props.onClose}> Resume </NavLinkElements >
                        < NavLinkElements to = "/Projects" onClick={this.props.onClose}> Projects </NavLinkElements >
                        < NavLinkElements to = "/Contact" onClick={this.props.onClose}> Contact </NavLinkElements >     
                </NavDropDownElements>
      </NavDropDown>
    )
  }
}
