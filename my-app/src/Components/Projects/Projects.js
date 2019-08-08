import React, { Component } from 'react'
import Delay from '../Animation/Delay'
import ProjectCard from './ProjectCard'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <Delay/>
                <ProjectCard/>
            </div>
        )
    }
}
