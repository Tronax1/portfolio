import React from 'react'
import {NavLink} from 'react-router-dom'

import "./NavDesign.css"

const NavBar = () => {
    return(
        <div className="Nav">
            < div className = "Nav-flex" >
                < NavLink className = "Logo textHover" to = "/">TRONAX</NavLink >
                <p/>
                < NavLink className = "Spacing textHover" to="/About">About</NavLink >
                < NavLink className = "Spacing textHover" to = "/Contact" > Contacts </NavLink >
                < NavLink className = "Spacing textHover" to = "/Projects" > Projects </NavLink >
            </div>
        </div>
    );
}

export default NavBar;