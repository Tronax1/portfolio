import React from 'react';
import { useState } from 'react'
import {NavLink, withRouter} from 'react-router-dom';
import Hamburger from './Hamburger'
import MobileMenu from './MobileMenu'
import {changeEnglish} from '../../actions'
import {changeSpanish} from '../../actions'
import {connect} from 'react-redux'

import '../../Styles/NavBar.scss'

function Navbar(props){
    const [show, setShow] = useState(false);
    const showMenu = () => {
        setShow(!show);
    }
            return (
                <React.Fragment>
                    <nav className="Nav">
                        <div className="Nav-Flex">
                            <div className="Brand">
                                <NavLink activeClassName="active-selected" className="Nav-Elements Home" to="/" exact>JV</NavLink>
                            </div>
                            <div className="Nav-Elements-Flex">
                                <NavLink activeClassName="active-selected" className="Nav-Elements" id="Desktop-Elements" to="/About">
                                    {props.language ? ("About"):("Acerca")}
                                </NavLink>
                                <NavLink activeClassName="active-selected" className="Nav-Elements" id="Desktop-Elements" to="/Resume">
                                    {props.language ? ("Resume"):("Hoja de Vida")}
                                </NavLink>
                                <NavLink activeClassName="active-selected" className="Nav-Elements" id="Desktop-Elements" to="/Projects">
                                    {props.language ? ("Projects"):("Proyectos")}
                                </NavLink>
                                <NavLink activeClassName="active-selected" className="Nav-Elements" id="Desktop-Elements" to="/Contact">
                                    {props.language ? ("Contact"):("Contactame")}
                                </NavLink>
                                {props.language ? 
                                    (<button id="Language-button" onClick={() => props.changeSpanish()}>ENG</button>)
                                :
                                    (<button id="Language-button" onClick={() => props.changeEnglish()}>ESP</button>)
                                }
                                <button id="Mobile-Menu" onClick={showMenu}><Hamburger showX={show} /></button>
                            </div>
                        </div>
                    </nav>
                    <MobileMenu onClose={showMenu} show={show} />
                </React.Fragment>
            )
}
function mapStatetoProps({language}){
    return {language};
}
export default withRouter(connect(mapStatetoProps, {changeEnglish, changeSpanish})(Navbar));