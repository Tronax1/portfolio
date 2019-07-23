import React, { Component } from 'react'
import DropDown from './DropDown'
import Nav from '../Elements/Nav'
import NavFlex from '../Elements/NavFlex'
import NavLinkElements from '../Elements/NavLinkElements'
import NavLinkBrand from '../Elements/NavLinkBrand'
import NavBrand from '../Elements/NavBrand'
import NavElements from '../Elements/NavElements'
import Hamburger from '../Elements/Hamburger'
import HamburgerLines from '../Elements/HamburgerLines'

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
                    <NavBrand>
                        < NavLinkBrand to = "/">JV</NavLinkBrand >
                    </NavBrand>   
                    <NavElements>
                        < NavLinkElements to="/About">About</NavLinkElements >
                        < NavLinkElements to = "/Resume" > Resume </NavLinkElements >
                        < NavLinkElements to = "/Projects" > Projects </NavLinkElements >
                        < NavLinkElements to = "/Contact" > Contact </NavLinkElements >     
                    </NavElements>
                    <Hamburger onClick={this.showMenu}>
                      <HamburgerLines/>
                      <HamburgerLines/>
                      <HamburgerLines/>
                    </Hamburger>
                </NavFlex>
            </Nav>
            <DropDown onClose ={this.showMenu} show={this.state.show}/>
        </React.Fragment>
    )
  }
}