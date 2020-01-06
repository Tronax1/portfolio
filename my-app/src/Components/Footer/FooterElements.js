import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function FooterElements() {
    const Lang = useSelector(state => state.language);
    return (
        <div className="Footer-elements">
            <NavLink className="Footer-links" to="/" exact >{Lang ? ("Home") : ("Inicio")}</NavLink>
            <NavLink className="Footer-links" to="/About" >{Lang ? ("About") : ("Acerca")}</NavLink>
            <NavLink className="Footer-links" to="/Resume" >{Lang ? ("Resume") : ("Hoja de Vida")}</NavLink>
            <NavLink className="Footer-links" to="Projects" >{Lang ? ("Projects") : ("Proyectos")}</NavLink>
            <NavLink className="Footer-links" to="Contact" >{Lang ? ("Contact") : ("Contactame")}</NavLink>
        </div>
    )
}
