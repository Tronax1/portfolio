import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Hamburger from './Hamburger'
import MobileMenu from './MobileMenu'
import {changeEnglish} from '../../actions'
import {changeSpanish} from '../../actions'
import {connect} from 'react-redux'

import '../../Styles/NavBar.css'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.showMenu = this.showMenu.bind(this);
        this.state = {
            show: false
        }
    }
    showMenu(){
        this.setState({
            show: !this.state.show
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="Nav">
                    {this.props.language ? (<div className="Nav-Flex">
                        <NavLink className="Nav-Elements Home" to="/">Home</NavLink>
                        <NavLink className="Nav-Elements" id="Desktop-Elements" to="/About">About</NavLink>
                        <NavLink className="Nav-Elements" id="Desktop-Elements" to="/Resume">Resume</NavLink>
                        <NavLink className="Nav-Elements" id="Desktop-Elements" to="Projects">Projects</NavLink>
                        <NavLink className="Nav-Elements" id="Desktop-Elements" to="/Contact">Contact</NavLink>
                        <button id="Language-button" onClick={() => this.props.changeSpanish()}>ENG</button>
                        <button id="Mobile-Menu" onClick={this.showMenu}><Hamburger showX={this.state.show} /></button>
                    </div>)
                    :
                        (<div className="Nav-Flex">
                            <NavLink className="Nav-Elements Home" to="/">Inicio</NavLink>
                            <NavLink className="Nav-Elements" id="Desktop-Elements" to="/About">Acerca</NavLink>
                            <NavLink className="Nav-Elements" id="Desktop-Elements" to="/Resume">Hoja de Vida</NavLink>
                            <NavLink className="Nav-Elements" id="Desktop-Elements" to="Projects">Proyectos</NavLink>
                            <NavLink className="Nav-Elements" id="Desktop-Elements" to="/Contact">Contactame</NavLink>
                            <button id="Language-button" onClick={() => this.props.changeEnglish()}>ESP</button>
                            <button id="Mobile-Menu" onClick={this.showMenu}><Hamburger showX={this.state.show} /></button>
                        </div>)}
                </div>
                <MobileMenu onClose={this.showMenu} show={this.state.show}/>
            </React.Fragment>
        )
    }
}
function mapStatetoProps({language}){
    return {language};
}
export default connect(mapStatetoProps, {changeEnglish, changeSpanish})(Navbar);