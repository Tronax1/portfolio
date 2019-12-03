import React from 'react'

import '../../Styles/ResumeCard.scss'

export default function ResumeCard(props){
        return (
                <div id={props.ident} className="Card-b">
                    <div className="Card-header">
                        <h1>{props.header}</h1>
                    </div>
                    <div className="Card-body">
                           {props.content}
                    </div>
                </div>
        )
}
