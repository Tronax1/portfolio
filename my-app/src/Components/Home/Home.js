import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import '../../Styles/Home.scss'

export default function Home(props) {
    const Lang = useSelector(state => state.language);
    useEffect(() => window.scrollTo(0, 0), props.location);
        return (
            <div className="Home-b">
                    <div className="Home-flex">
                        <p className="Welcome-Message" id="Initial-animation">
                            {Lang ? ("Hello, I'm Jorge Villarreal") : ("Hola, me llamo Jorge Villarreal")}
                        </p>
                        <NavLink className="Project-Redirect" to="/Projects" id="Initial-animation">
                            {Lang ? ("My Work"):("Mis proyectos")}
                        </NavLink>
                        <div className="Link-refs" id="Initial-animation">
                            <a className="Link-icons" href="https://github.com/Tronax1" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github fa-4x"></i>
                            </a>
                            <a className="Link-icons" 
                                href={Lang ? ("https://www.linkedin.com/in/jorgevillarrealgongora/") : ("https://www.linkedin.com/in/jorgevillarrealgongora/?locale=es_ES")} 
                                target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin fa-4x"></i>
                            </a>
                        </div>
                    </div>
            </div>
        )
}