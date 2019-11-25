import React, { Component } from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import Hamburger from './Hamburger'
import MobileMenu from './MobileMenu'
import {changeEnglish} from '../../actions'
import {changeSpanish} from '../../actions'
import {connect} from 'react-redux'

import '../../Styles/NavBar.scss'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.showMenu = this.showMenu.bind(this);
        this.state = {
            show: false,
            prevScrollpos: window.pageYOffset,
            visible: true
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
                        <div className="Nav-Flex">
                            <div className="Brand">
                                <NavLink activeClassName="active-selected" className="Nav-Elements Home" to="/" exact>JV</NavLink>
                            </div>
                            <div className="Nav-Elements-Flex">
                                <NavLink activeClassName="active-selected" className="Nav-Elements" id="Desktop-Elements" to="/About">
                                    {this.props.language ? ("About"):("Acerca")}
                                </NavLink>
                                <NavLink activeClassName="active-selected" className="Nav-Elements" id="Desktop-Elements" to="/Resume">
                                    {this.props.language ? ("Resume"):("Hoja de Vida")}
                                </NavLink>
                                <NavLink activeClassName="active-selected" className="Nav-Elements" id="Desktop-Elements" to="/Projects">
                                    {this.props.language ? ("Projects"):("Proyectos")}
                                </NavLink>
                                <NavLink activeClassName="active-selected" className="Nav-Elements" id="Desktop-Elements" to="/Contact">
                                    {this.props.language ? ("Contact"):("Contactame")}
                                </NavLink>
                                {this.props.language ? 
                                    (<button id="Language-button" onClick={() => this.props.changeSpanish()}>ENG</button>)
                                :
                                    (<button id="Language-button" onClick={() => this.props.changeEnglish()}>ESP</button>)
                                }
                                <button id="Mobile-Menu" onClick={this.showMenu}><Hamburger showX={this.state.show} /></button>
                            </div>
                        </div>
                    </div>
                    <MobileMenu onClose={this.showMenu} show={this.state.show} />
                </React.Fragment>
            )
    }
}
function mapStatetoProps({language}){
    return {language};
}
export default withRouter(connect(mapStatetoProps, {changeEnglish, changeSpanish})(Navbar));