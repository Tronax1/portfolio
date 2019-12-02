import React from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import '../../Styles/Home.scss'

function Home(props){
    useEffect(() => window.scrollTo(0, 0));
        return (
            <div className="Home-b">
                    <div className="Home-flex">
                        <p className="Welcome-Message" id="Initial-animation">
                            {props.language ? ("Hello, I'm Jorge Villarreal") : ("Hola, me llamo Jorge Villarreal")}
                        </p>
                        <NavLink className="Project-Redirect" to="/Projects" id="Initial-animation">
                            {props.language ? ("My Work"):("Mis proyectos")}
                        </NavLink>
                        <div className="Link-refs" id="Initial-animation">
                            <a className="Link-icons" href="https://github.com/Tronax1" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github fa-4x"></i>
                            </a>
                            <a className="Link-icons" 
                                href={props.language ? ("https://www.linkedin.com/in/jorgevillarrealgongora/") : ("https://www.linkedin.com/in/jorgevillarrealgongora/?locale=es_ES")} 
                                target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin fa-4x"></i>
                            </a>
                        </div>
                    </div>
            </div>
        )
}
function mapStatetoProps({language}){
    return {language};
}
export default connect(mapStatetoProps)(Home);

