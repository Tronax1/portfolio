import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import '../../Styles/MobileMenu.scss'

const MobileMenu = props => {
    if (!props.show) {
        return null;
    }
    else{
        return (
            <div className="Nav-Mobile">
                <div className="Nav-Flex-Mobile">
                    <NavLink activeClassName="active-selected" className="Nav-Elements-Mobile" to="/About" onClick={props.onClose}>
                        {props.language ? ("About"):("Acerca")}
                    </NavLink>
                    <NavLink activeClassName="active-selected" className="Nav-Elements-Mobile" to="/Resume" onClick={props.onClose}>
                        {props.language ? ("Resume"):("Hoja de Vida")}
                    </NavLink>
                    <NavLink activeClassName="active-selected" className="Nav-Elements-Mobile" to="/Projects" onClick={props.onClose}>
                        {props.language ? ("Projects"):("Proyectos")}
                    </NavLink>
                    <NavLink activeClassName="active-selected" className="Nav-Elements-Mobile" to="/Contact" onClick={props.onClose}>
                        {props.language ? ("Contact"):("Contactame")}
                    </NavLink>
                </div>
            </div>
        )
    }
}
function mapStatetoProps({language}){
    return {language};
}
export default withRouter(connect(mapStatetoProps)(MobileMenu));