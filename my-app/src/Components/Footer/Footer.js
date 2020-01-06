import React from 'react'
import FooterIcons from './FooterIcons'
import FooterElements from './FooterElements'

import '../../Styles/Footer.scss'

export default function Footer() {
    return (
        <div className="Copyright-footer">
            <h1>Jorge Villarreal</h1>
                <FooterElements/>
                <FooterIcons/>
            <span>&#169; Copyright 2019 Jorge Alberto Villarreal Gongora</span>
        </div>
    )
}
