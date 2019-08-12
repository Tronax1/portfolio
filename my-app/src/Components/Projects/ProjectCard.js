import React, { Component } from 'react'
import ProjectImage from './ProjectImage.jpg'

import '../../Styles/ProjectCard.css'

export default class ProjectCard extends Component {
    render() {
        return (
            <div>
                <div id={this.props.ident} className="Project-Card" style={{backgroundColor: this.props.color}}>
                    <div className="Project-Card-Header">
                        <img src={ProjectImage} alt=""></img>
                    </div>
                    <div className="Project-Card-Body" style={{color: this.props.fontColor}}>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="Project-Card-Footer" style={{color: this.props.fontColor}}>
                        <h3>Technologies</h3>
                        {this.props.technologies}
                        <a href={this.props.repo} target="_blank" rel="noopener noreferrer" 
                        >View Source</a>
                    </div>
                </div>
            </div>
        )
    }
}
