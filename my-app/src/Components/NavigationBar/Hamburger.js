import React from 'react'

import '../../Styles/Hamburger.css'

export default function Hamburger(props) {
    if (!props.showX){
        return (
            <div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
            </div>
        )
    }
    return(
        <div className="button-X"><strong>X</strong></div>
    )
}
