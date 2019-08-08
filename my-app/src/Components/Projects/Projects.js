import React, { Component } from 'react'
import Delay from '../Animation/Delay'
import ProjectCard from './ProjectCard'

import '../../Styles/Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <Delay/>
                <div className="Projects-flex">
                    <ProjectCard title="Money Manager" description="A finance web application that tracks user expenses and calculates 
                    whether the user can afford a mortgage or not." repo="https://github.com/Tronax1/Money-Manager"/>
                    <ProjectCard title="Aldebaran" description="A bot application that connects to a 
                    Discord server and plays music from YouTube, and defines words suchas a dictionary." 
                        repo="https://github.com/Tronax1/Aldebaran-"/>
                    <ProjectCard title="Knight's Move Game" description="A player vs AI game where both players move a chess 
                    knight around a 4x4 board. You cannot move the knight on the same square again, and the 
                    loose is the one that ran out ofmoves" 
                        repo="https://github.com/Tronax1/Knights-game"/>
                    <ProjectCard title="Tic-Tac-Toe" description="A player vs AI Tic-Tac-Toe game" 
                        repo="https://github.com/Tronax1/Tic-Tac-Toe"/>
                    <ProjectCard title="Scientific Calculator" description="Simple calculator that also has 
                    trigonometric functions"
                        repo="https://github.com/Tronax1/Calculator" />
                </div>
            </div>
        )
    }
}
