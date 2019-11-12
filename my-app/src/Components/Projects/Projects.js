import React, { Component } from 'react'
import ProjectCard from './ProjectCard'
import {connect} from 'react-redux'
import Discord from './Discord.png'
import ChangeGear from './ChangeGear.png'
import Money from './moneymanager.jpg'
import Footer from '../Footer/Footer'
import '../../Styles/Projects.css'

class Projects extends Component {
    componentWillUnmount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div className="page">
                <div className="Projects-flex">
                    <ProjectCard projImg={ChangeGear} color="#008073" fontColor="#000f08" ident="Project-1"
                        title={
                            this.props.language ?
                                ("Senior Project")
                                :
                                ("Proyecto de Grado")
                        }
                        description={
                            this.props.language ?
                                ("A full stack web utility that helps a user compare various report tickets using a likert scale.")
                                :
                                ("Una utilidad web full stack que ayuda a un usuario comparar tiquetes usando una escala Likert.")
                        }
                        repo="http://changegear-ticket-system.herokuapp.com" technologies={<ul style={{ listStyleType: "none" }}>
                            <li>React <i className="fab fa-react"></i></li>
                            <li>Redux</li>
                            <li>MongoDB</li>
                            <li>Node <i className="fab fa-node"></i></li>
                        </ul>} invert={false} />
                    <ProjectCard projImg={Money} color="#008073" fontColor="#000f08" ident="Project-2" title="Money Manager" 
                    description={
                        this.props.language ? 
                        ("A finance web application that tracks user expenses and calculates whether the user can afford a mortgage or not.")
                                :
                            ("Una aplicación web que almacena los gastos de un usuario y calcula si un usuario puede pagar una hipoteca.")
                    } 
                        repo="https://managerfolio.herokuapp.com" technologies={<ul style={{listStyleType: "none"}}>
                        <li>React <i className="fab fa-react"></i></li>
                        <li>Redux</li>
                        <li>Firebase <i className="fas fa-fire"></i></li>
                    </ul>} invert={true}/>
                    <ProjectCard projImg={Discord} color="#008073" fontColor="#000f08" ident="Project-3" title="Aldebaran" 
                    description={
                        this.props.language ? 
                        ("A bot application that connects to a Discord server and plays music from YouTube, and defines words like a dictionary.")
                        :
                        ("Una aplicación que se conecta a un servidor Discord, reproduce música de YouTube y define palabras como un diccionario.")
                        } technologies={<ul style={{ listStyleType: "none" }}>
                        <li>Nodejs  <i className="fab fa-node"></i></li>
                        <li>AWS  <i className="fab fa-aws"></i></li>
                    </ul>} 
                        repo="https://github.com/Tronax1/Aldebaran-" invert={false}/>
                        <Footer/>
                </div>       
            </div>
        )
    }
}
function mapStatetoProps({language}){
    return {language};
}
export default connect(mapStatetoProps)(Projects);