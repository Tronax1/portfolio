import React, { Component } from 'react'
import ProjectImage from './ProjectImage.jpg'

import '../../Styles/ProjectCard.css'

export default class ProjectCard extends Component {
    render() {
        return (
            <div>
                <div id={this.props.ident} className="Project-Card">
                    <div className="Project-Card-Header">
                        <img src={ProjectImage} alt=""></img>
                    </div>
                    <div className="Project-Card-Body">
                        <h1>{this.props.title}</h1>
                        {this.props.description}
                    </div>
                    <div className="Project-Card-Body">
                        <a href={this.props.repo} target="_blank" rel="noopener noreferrer">View Source</a>
                    </div>
                </div>
            </div>
        )
    }
}
