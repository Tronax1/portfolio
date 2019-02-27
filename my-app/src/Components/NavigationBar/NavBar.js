import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import "./NavDesign.css"

export default class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
            <div className="Nav">
                < div className = "Nav-flex" >
                    <div className = "Brand">
                        < NavLink className = "textHover Logo" to = "/">TRONAX</NavLink >
                    </div>   
                    <div className="Elements">
                        < NavLink className = "Spacing textHover" to="/About">About</NavLink >
                        < NavLink className = "Spacing textHover" to = "/Resume" > Resume </NavLink >
                        < NavLink className = "Spacing textHover" to = "/Projects" > Projects </NavLink >
                        < NavLink className = "Spacing textHover" to = "/Contact" > Contact </NavLink >     
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
  }
}