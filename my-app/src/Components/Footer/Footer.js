import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import '../../Styles/Footer.scss'

export default function Footer() {

    const Lang = useSelector(state => state.language);

    return (
        <div className="Copyright-footer">
            <h1>Jorge Villarreal</h1>
            <div className="Footer-elements">
                <NavLink className = "Footer-links" to = "/" exact >{Lang ? ("Home"):("Inicio")}</NavLink>
                <NavLink className = "Footer-links" to = "/About" >{Lang ? ("About") : ("Acerca")}</NavLink>
                <NavLink className = "Footer-links" to = "/Resume" >{Lang ? ("Resume") : ("Hoja de Vida")}</NavLink>
                <NavLink className = "Footer-links" to = "Projects" >{Lang ? ("Projects") : ("Proyectos")}</NavLink>
                <NavLink className = "Footer-links" to = "Contact" >{Lang ? ("Contact") : ("Contactame")}</NavLink>
            </div>
            <div className = "Footer-Icon-elements">
                <a className="Footer-Icons" href="https://github.com/Tronax1" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-4x"></i>
                </a>
                <a className="Footer-Icons"
                    href={Lang ? ("https://www.linkedin.com/in/jorgevillarrealgongora/") : ("https://www.linkedin.com/in/jorgevillarrealgongora/?locale=es_ES")}
                    target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-4x"></i>
                </a>
            </div>
            <span>&#169; Copyright 2019 Jorge Alberto Villarreal Gongora</span>
        </div>
    )
}
