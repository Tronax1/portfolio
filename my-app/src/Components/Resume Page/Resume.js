import React, { Component } from 'react'
import ResumeCard from './ResumeCard'
import USFlogo from './University of South Florida Logo.png'
import ResumeSubCard from './ResumeSubCard'
import CV from './CV Jorge Villarreal.pdf'
import CVSpa from './CV Jorge Villarreal SPA.pdf'

import {connect} from 'react-redux'

import '../../Styles/Resume.css'

class Resume extends Component {
    componentWillUnmount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div className="page">
                <div className="Resume-card-flex">
                    {
                        this.props.language ? 
                            (<a href={CV} download="CV Jorge Villarreal.pdf">Download PDF</a>)
                            : 
                            (<a href={CVSpa} download="CV Jorge Villarreal.pdf">Descargar PDF</a>)
                    }
                    <ResumeCard header={
                        this.props.language ? ("Education"):("Educación")
                    } ident="p-1" content={
                        <ResumeSubCard information={
                            <div className="Education-Margin">
                                {
                                    this.props.language ?
                                        (
                                            <p><strong>University of South Florida </strong>
                                            Expected December 2019<br />
                                            B.S. in Computer Engineering<br /><br /> 
                                            <img id="USF" src={USFlogo} alt="" /></p>
                                        )
                                        :
                                        (
                                            <p><strong>University of South Florida </strong>
                                            Esperado Diciembre 2019<br />
                                            B.S. en Computer Engineering<br /><br /> 
                                            <img id="USF" src={USFlogo} alt="" /></p>
                                        ) 
                                }
                            </div>
                        } />
                    } />
                    <ResumeCard header={
                        this.props.language ? ("Skills"):("Habilidades")
                    } ident="p-2" content={
                        <div className="Sub-Cards-Flex">
                            <ResumeSubCard information={
                                <div className="Skills-flex">
                                    <span id="Skill-icons">React</span>
                                    <span id="Skill-icons">Redux</span>
                                    <span id="Skill-icons">Firebase</span>
                                    <span id="Skill-icons">Node.js</span>
                                </div>
                            } />
                            <ResumeSubCard information={
                                <div className="Skills-flex">
                                    <span id="Skill-icons">HTML</span>
                                    <span id="Skill-icons">CSS</span>
                                    <span id="Skill-icons">JavaScript</span>
                                    <span id="Skill-icons">Sass</span>
                                    <span id="Skill-icons">MongoDB</span>
                                </div>
                            } />
                            <ResumeSubCard information={
                                <div className="Skills-flex">
                                    <span id="Skill-icons">C++</span>
                                    <span id="Skill-icons">Java</span>
                                    <span id="Skill-icons"></span>
                                </div>
                            } />
                            <ResumeSubCard information={
                                <div className="Skills-flex">
                                    <span id="Skill-icons">AWS</span>
                                    <span id="Skill-icons">Git</span>
                                    <span id="Skill-icons">Linux</span>
                                    <span id="Skill-icons">RESTful Services</span>
                                </div>
                            } />
                        </div>
                    } />
                    <ResumeCard header={
                        this.props.language ? ("Experience"):("Experiencia")
                    } ident="p-3" content={
                        <ResumeSubCard information={
                            <div className="Experience-Margin">
                                {
                                    this.props.language ? 
                                        (
                                            <p><strong>Programming Tutor </strong><br />05/2017 to 08/2017<br /> Colegio Albania–Mushaisa,
                                            La Guajira <ul>
                                                <li>
                                                    Collaborated with a team of faculty to develop after-school tutorial
                                                    programs for students in need of extra help.
                                                </li>
                                                <li>
                                                    Met with parents to resolve conflicting educational
                                                    priorities and issues.
                                                </li>
                                                <li>
                                                    Designed a summer boot-camp to teach JavaScript and C++ to students.
                                                </li>
                                            </ul>
                                            </p>
                                        )
                                        :
                                        (
                                            <p><strong>Tutor de Programación </strong><br />05/2017 a 08/2017<br /> Colegio Albania–Mushaisa,
                                            La Guajira <ul>
                                                <li>
                                                    Colaborar con un grupo de facultad para crear programas de tutorías hacia estudiantes con necesidades académicas.
                                                </li>
                                                <li>
                                                    Reuniones con padres para discutir problemas o mejoras de aprendizaje.
                                                </li>
                                                <li>
                                                    Diseñar un vacacional para enseñar C++ y JavaScript a estudiantes.
                                                </li>
                                            </ul>
                                            </p>
                                        )
                                }
                            </div>
                        } />
                    } />
                </div>    
            </div>
        )
    }
}
function mapStatetoProps({language}){
    return {language};
}
export default connect(mapStatetoProps)(Resume);