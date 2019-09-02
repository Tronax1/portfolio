import React, { Component } from 'react'
import ProjectCard from './ProjectCard'
import {connect} from 'react-redux'
import Discord from './Discord.png'
import Knight from './Knights.png'
import Money from './moneymanager.jpg'
import TicTacToe from './TicTacToe.png'
import ProjectImage from './ProjectImage.jpg'
import '../../Styles/Projects.css'

class Projects extends Component {
    componentWillUnmount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div className="page">
                {this.props.language ? (<div className="Projects-flex">
                    <ProjectCard projImg={Money} color="#96031a" fontColor="#fbfffe" ident="Project-1" title="Money Manager" description="A finance web application that tracks user expenses and calculates whether the user can afford a mortgage or not." repo="https://github.com/Tronax1/Money-Manager" technologies={<ul>
                        <li>React <i className="fab fa-react"></i></li>
                        <li>Redux</li>
                        <li>Firebase <i className="fas fa-fire"></i></li>
                    </ul>}/>
                    <ProjectCard projImg={Discord} color="#56a3a6" fontColor="#cad49d" ident="Project-2" title="Aldebaran" description="A bot application that connects to a Discord server and plays music from YouTube, and defines words like a dictionary." technologies={<ul>
                        <li>Nodejs  <i class="fab fa-node"></i></li>
                        <li>AWS  <i className="fab fa-aws"></i></li>
                    </ul>} 
                        repo="https://github.com/Tronax1/Aldebaran-"/>
                    <ProjectCard projImg={Knight} color="#b9a44c" fontColor="#1b1b1e" ident="Project-3" title="Knight's Move Game" description="A player vs AI game where both players move a chess 
                    knight around a 4x4 board. You cannot move the knight on the same square again, and defeat occurs when you run out of moves." 
                        repo="https://github.com/Tronax1/Knights-game" technologies={<ul>
                            <li>C++</li>
                        </ul>}/>
                    <ProjectCard projImg={TicTacToe} color="#85cb33" fontColor="#1b1b1e" ident="Project-4" title="Tic-Tac-Toe" description="A player vs AI Tic-Tac-Toe game." 
                        repo="https://github.com/Tronax1/Tic-Tac-Toe" technologies={<ul>
                            <li>Java <i className="fab fa-java"></i></li>
                        </ul>}/>
                    <ProjectCard projImg={ProjectImage} color="#e63462" fontColor="#1b1b1e" ident="Project-5" title="Scientific Calculator" description="Simple calculator that also has trigonometric functions."
                        repo="https://github.com/Tronax1/Calculator" technologies={<ul>
                            <li>C++</li>
                        </ul>}/>
                </div>)
                :
                (<div className="Projects-flex">
                        <ProjectCard projImg={Money} color="#96031a" fontColor="#fbfffe" ident="Project-1" title="Money Manager" description="Una aplicación web que almacena los gastos de un usuario y calcula si un usuario puede pagar una hipoteca." repo="https://github.com/Tronax1/Money-Manager" technologies={<ul>
                        <li>React <i className="fab fa-react"></i></li>
                        <li>Redux</li>
                        <li>Firebase <i className="fas fa-fire"></i></li>
                    </ul>}/>
                        <ProjectCard projImg={Discord} color="#56a3a6" fontColor="#cad49d" ident="Project-2" title="Aldebaran" description="Una aplicación que se conecta a un servidor Discord, reproduce música de YouTube y define palabras como un diccionario." technologies={<ul>
                        <li>Nodejs  <i class="fab fa-node"></i></li>
                        <li>AWS  <i className="fab fa-aws"></i></li>
                    </ul>} 
                        repo="https://github.com/Tronax1/Aldebaran-"/>
                        <ProjectCard projImg={Knight} color="#b9a44c" fontColor="#1b1b1e" ident="Project-3" title="Juego del Caballo" description="Un juego de jugador vs computadora donde ambos mueven un caballo de ajedrez en un tablero 4x4. El jugador que se quede sin jugadas pierde." 
                        repo="https://github.com/Tronax1/Knights-game" technologies={<ul>
                            <li>C++</li>
                        </ul>}/>
                        <ProjectCard projImg={TicTacToe} color="#85cb33" fontColor="#1b1b1e" ident="Project-4" title="Tic-Tac-Toe" description="Un juego de jugador vs computadora Tic-Tac-Toe." 
                        repo="https://github.com/Tronax1/Tic-Tac-Toe" technologies={<ul>
                            <li>Java <i className="fab fa-java"></i></li>
                        </ul>}/>
                        <ProjectCard projImg={ProjectImage} color="#e63462" fontColor="#1b1b1e" ident="Project-5" title="Calculadora Científica" description="Calculadora científica con funciones trigonométricas."
                        repo="https://github.com/Tronax1/Calculator" technologies={<ul>
                            <li>C++</li>
                        </ul>}/>
                </div>)}
                
            </div>
        )
    }
}
function mapStatetoProps({language}){
    return {language};
}
export default connect(mapStatetoProps)(Projects);