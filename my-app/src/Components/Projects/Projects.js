import React, { Component } from 'react'
import Delay from '../Animation/Delay'
import ProjectCard from './ProjectCard'

import '../../Styles/Projects.css'

export default class Projects extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                <Delay/>
                <div className="Projects-flex">
                    <ProjectCard ident="Project-1" title="Money Manager" description="A finance web application that tracks user expenses and calculates 
                    whether the user can afford a mortgage or not." repo="https://github.com/Tronax1/Money-Manager" technologies={<ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Firebase</li>
                    </ul>}/>
                    <ProjectCard ident="Project-2" title="Aldebaran" description="A bot application that connects to a 
                    Discord server and plays music from YouTube, and defines words suchas a dictionary." technologies={<ul>
                        <li>Nodejs</li>
                        <li>AWS</li>
                    </ul>} 
                        repo="https://github.com/Tronax1/Aldebaran-"/>
                    <ProjectCard ident="Project-3" title="Knight's Move Game" description="A player vs AI game where both players move a chess 
                    knight around a 4x4 board. You cannot move the knight on the same square again, and the 
                    loose is the one that ran out ofmoves" 
                        repo="https://github.com/Tronax1/Knights-game" technologies={<ul>
                            <li>C++</li>
                        </ul>}/>
                    <ProjectCard ident="Project-4" title="Tic-Tac-Toe" description="A player vs AI Tic-Tac-Toe game" 
                        repo="https://github.com/Tronax1/Tic-Tac-Toe" technologies={<ul>
                            <li>Java</li>
                        </ul>}/>
                    <ProjectCard ident="Project-5" title="Scientific Calculator" description="Simple calculator that also has 
                    trigonometric functions"
                        repo="https://github.com/Tronax1/Calculator" technologies={<ul>
                            <li>C++</li>
                        </ul>}/>
                </div>
            </div>
        )
    }
}
