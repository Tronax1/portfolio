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
            <span>&#169; Copyright 2019 Jorge Alberto Villarreal Gongora</span>
        </div>
    )
}
