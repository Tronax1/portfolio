import React from 'react'

import '../../Styles/ResumeSubCard.scss'

export default function ResumeSubCard(props) {  
        return (
            <div className="Sub-Card">
                {props.information}
            </div>
        )
}
