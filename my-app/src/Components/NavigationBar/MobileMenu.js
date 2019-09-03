import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import '../../Styles/MobileMenu.css'

class MobileMenu extends Component {
    render() {
        if(!this.props.show){
            return null;
        }
        return (
            <div className="Nav-Mobile">
                <div className="Nav-Flex-Mobile">
                    <NavLink className="Nav-Elements-Mobile" to="/About" onClick={this.props.onClose}>
                        {this.props.language ? ("About"):("Acerca")}
                    </NavLink>
                    <NavLink className="Nav-Elements-Mobile" to="/Resume" onClick={this.props.onClose}>
                        {this.props.language ? ("Resume"):("Hoja de Vida")}
                    </NavLink>
                    <NavLink className="Nav-Elements-Mobile" to="Projects" onClick={this.props.onClose}>
                        {this.props.language ? ("Projects"):("Proyectos")}
                    </NavLink>
                    <NavLink className="Nav-Elements-Mobile" to="/Contact" onClick={this.props.onClose}>
                        {this.props.language ? ("Contact"):("Contactame")}
                    </NavLink>
                </div>
            </div>
        )
    }
}
function mapStatetoProps({language}){
    return {language};
}
export default connect(mapStatetoProps)(MobileMenu);