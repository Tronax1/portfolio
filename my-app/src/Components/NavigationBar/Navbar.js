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
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            show: false,
            prevScrollpos: window.pageYOffset,
            visible: true
        }
    }
    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll);
    }
    showMenu(){
        this.setState({
            show: !this.state.show
        });
    }
    handleScroll(){
        const {prevScrollpos} = this.state;
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        })
    }
    render() {
        if(this.state.visible){
            return (
                <React.Fragment>
                    <div className="Nav">
                        {this.props.language ? (<div className="Nav-Flex">
                            <div className="Brand">
                                <NavLink className="Nav-Elements Home" to="/">JV</NavLink>
                            </div>
                            <div className="Nav-Elements-Flex">
                                <NavLink className="Nav-Elements" id="Desktop-Elements" to="/About">About</NavLink>
                                <NavLink className="Nav-Elements" id="Desktop-Elements" to="/Resume">Resume</NavLink>
                                <NavLink className="Nav-Elements" id="Desktop-Elements" to="Projects">Projects</NavLink>
                                <NavLink className="Nav-Elements" id="Desktop-Elements" to="/Contact">Contact</NavLink>
                                <button id="Language-button" onClick={() => this.props.changeSpanish()}>ENG</button>
                                <button id="Mobile-Menu" onClick={this.showMenu}><Hamburger showX={this.state.show} /></button>
                            </div>

                        </div>)
                            :
                            (<div className="Nav-Flex">
                                <div className="Brand">
                                    <NavLink className="Nav-Elements Home" to="/">JV</NavLink>
                                </div>
                                <div className="Nav-Elements-Flex">
                                    <NavLink className="Nav-Elements" id="Desktop-Elements" to="/About">Acerca</NavLink>
                                    <NavLink className="Nav-Elements" id="Desktop-Elements" to="/Resume">Hoja de Vida</NavLink>
                                    <NavLink className="Nav-Elements" id="Desktop-Elements" to="Projects">Proyectos</NavLink>
                                    <NavLink className="Nav-Elements" id="Desktop-Elements" to="/Contact">Contactame</NavLink>
                                    <button id="Language-button" onClick={() => this.props.changeEnglish()}>ESP</button>
                                    <button id="Mobile-Menu" onClick={this.showMenu}><Hamburger showX={this.state.show} /></button>
                                </div>
                            </div>)}
                    </div>
                    <MobileMenu onClose={this.showMenu} show={this.state.show} />
                </React.Fragment>
            )
        }
        else{
            return null;
        }
    }
}
function mapStatetoProps({language}){
    return {language};
}
export default connect(mapStatetoProps, {changeEnglish, changeSpanish})(Navbar);