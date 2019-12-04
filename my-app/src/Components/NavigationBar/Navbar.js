import React from 'react';
import { useState } from 'react'
import {NavLink, withRouter} from 'react-router-dom';
import Hamburger from './Hamburger'
import MobileMenu from './MobileMenu'
import {changeEnglish, changeSpanish} from '../../actions'
import { useDispatch, useSelector } from 'react-redux'

import '../../Styles/NavBar.scss'

function Navbar() {
    const [show, setShow] = useState(false);
    const Lang = useSelector(state => state.language);
    const dispatch = useDispatch();
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
                                    {Lang ? ("About"):("Acerca")}
                                </NavLink>
                                <NavLink activeClassName="active-selected" className="Nav-Elements" id="Desktop-Elements" to="/Resume">
                                    {Lang ? ("Resume"):("Hoja de Vida")}
                                </NavLink>
                                <NavLink activeClassName="active-selected" className="Nav-Elements" id="Desktop-Elements" to="/Projects">
                                    {Lang ? ("Projects"):("Proyectos")}
                                </NavLink>
                                <NavLink activeClassName="active-selected" className="Nav-Elements" id="Desktop-Elements" to="/Contact">
                                    {Lang ? ("Contact"):("Contactame")}
                                </NavLink>
                                {Lang ? 
                                    (<button id="Language-button" onClick={() => dispatch(changeSpanish())}>ENG</button>)
                                :
                                    (<button id="Language-button" onClick={() => dispatch(changeEnglish())}>ESP</button>)
                                }
                                <button id="Mobile-Menu" onClick={showMenu}><Hamburger showX={show} /></button>
                            </div>
                        </div>
                    </nav>
                    <MobileMenu onClose={showMenu} show={show} />
                </React.Fragment>
            )
}
export default withRouter(Navbar);