import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import { useSelector } from 'react-redux'

import '../../Styles/MobileMenu.scss'

function MobileMenu(props){

    const Lang = useSelector(state => state.language);

    if (!props.show) {
        return null;
    }
    else{
        return (
            <div className="Nav-Mobile">
                <div className="Nav-Flex-Mobile">
                    <NavLink activeClassName="active-selected" className="Nav-Elements-Mobile" to="/About" onClick={props.onClose}>
                        {Lang ? ("About"):("Acerca")}
                    </NavLink>
                    <NavLink activeClassName="active-selected" className="Nav-Elements-Mobile" to="/Resume" onClick={props.onClose}>
                        {Lang ? ("Resume"):("Hoja de Vida")}
                    </NavLink>
                    <NavLink activeClassName="active-selected" className="Nav-Elements-Mobile" to="/Projects" onClick={props.onClose}>
                        {Lang ? ("Projects"):("Proyectos")}
                    </NavLink>
                    <NavLink activeClassName="active-selected" className="Nav-Elements-Mobile" to="/Contact" onClick={props.onClose}>
                        {Lang ? ("Contact"):("Contactame")}
                    </NavLink>
                </div>
            </div>
        )
    }
}
export default withRouter(MobileMenu);