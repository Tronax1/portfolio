import React, { Component } from 'react'
import {connect} from 'react-redux'

import '../../Styles/ProjectCard.css'

class ProjectCard extends Component {
    render() {
        return (
            <div>
                <div id={this.props.ident} className="Project-Card" style={{ backgroundImage: `radial-gradient(${this.props.color}, black)`}}>
                    <div className="Project-Card-Flex">
                        <div className="Project-Card-Header">
                            <img src={this.props.projImg} alt=""></img>
                        </div>
                        <div className="Project-Card-Body" style={{ color: this.props.fontColor }}>
                            <h1>{this.props.title}</h1>
                            <p>{this.props.description}</p>
                        </div>
                        <div className="Project-Card-Footer" style={{ color: this.props.fontColor }}>
                            {this.props.language ? (<h3>Technologies</h3>) : (<h3>Tecnologias</h3>)}
                            <div>{this.props.technologies}</div>
                            {this.props.language ? (<a href={this.props.repo} target="_blank" rel="noopener noreferrer"
                            >View Source</a>) : (<a href={this.props.repo} target="_blank" rel="noopener noreferrer"
                            >Ver Código</a>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStatetoProps({language}){
    return {language};
}
export default connect(mapStatetoProps)(ProjectCard);