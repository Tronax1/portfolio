import React, { Component } from 'react'

import '../../Styles/ResumeCard.css'

export default class ResumeCard extends Component {
    render() {
        return (
            <div>
                <div className="Card-b">
                    <div className="Card-header">
                        <h1>{this.props.header}</h1>
                    </div>
                    <div className="Card-body">
                           {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
}
