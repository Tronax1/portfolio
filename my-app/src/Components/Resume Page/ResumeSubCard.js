import React, { Component } from 'react'

import '../../Styles/ResumeSubCard.css'
export default class ResumeSubCard extends Component {
    render() {
        return (
            <div className="Sub-Card">
                {this.props.information}
            </div>
        )
    }
}
