import React from 'react'
import { useSelector } from 'react-redux'

export default function FooterIcons() {
    const Lang = useSelector(state => state.language);
    return (
        <div className="Footer-Icon-elements">
            <a className="Footer-Icons" href="https://github.com/Tronax1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github fa-4x"></i>
            </a>
            <a className="Footer-Icons"
                href={Lang ? ("https://www.linkedin.com/in/jorgevillarrealgongora/") : ("https://www.linkedin.com/in/jorgevillarrealgongora/?locale=es_ES")}
                target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-4x"></i>
            </a>
        </div>
    )
}
