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
                {this.props.language ? (<div className="Nav-Flex-Mobile">
                    <NavLink className="Nav-Elements-Mobile" to="/About" onClick={this.props.onClose}>About</NavLink>
                    <NavLink className="Nav-Elements-Mobile" to="/Resume" onClick={this.props.onClose}>Resume</NavLink>
                    <NavLink className="Nav-Elements-Mobile" to="Projects" onClick={this.props.onClose}>Projects</NavLink>
                    <NavLink className="Nav-Elements-Mobile" to="/Contact" onClick={this.props.onClose}>Contact</NavLink>
                </div>)
                :
                    (<div className="Nav-Flex-Mobile">
                        <NavLink className="Nav-Elements-Mobile" to="/About" onClick={this.props.onClose}>Acerca</NavLink>
                        <NavLink className="Nav-Elements-Mobile" to="/Resume" onClick={this.props.onClose}>Hoja de Vida</NavLink>
                        <NavLink className="Nav-Elements-Mobile" to="Projects" onClick={this.props.onClose}>Proyectos</NavLink>
                        <NavLink className="Nav-Elements-Mobile" to="/Contact" onClick={this.props.onClose}>Contactame</NavLink>
                    </div>)}
                
            </div>
        )
    }
}
function mapStatetoProps({language}){
    return {language};
}
export default connect(mapStatetoProps)(MobileMenu);