import React, { Component } from 'react'
import ResumeCard from './ResumeCard'
import USFlogo from './University of South Florida Logo.png'
import ResumeSubCard from './ResumeSubCard'
import CV from './CV Jorge Villarreal.pdf'
import CVSpa from './CV Jorge Villarreal SPA.pdf'
import reactLogo from './ReactIcon.png'
import reduxIcon from './ReduxIcon.png'
import firebaseIcon from './firebase.png'
import htmlIcon from './HTML.png'
import nodeIcon from './node.png'
import cssIcon from './CSS.png'
import cppIcon from './Cpp.png'
import awsIcon from './AWS.png'
import javaIcon from './java.png'
import gitIcon from './Git.png'
import linuxIcon from './Linux.png'
import jsLogo from './jsLogo.png'

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
                                    <img id="Skill-icons" src={reactLogo} alt="" />
                                    <img id="Skill-icons" src={reduxIcon} alt="" />
                                    <img id="Skill-icons" src={firebaseIcon} alt="" />
                                    <img id="Skill-icons" src={nodeIcon} alt="" />
                                </div>
                            } />
                            <ResumeSubCard information={
                                <div className="Skills-flex">
                                    <img id="Skill-icons" src={htmlIcon} alt="" />
                                    <img id="Skill-icons" src={cssIcon} alt="" />
                                    <img id="Skill-icons" src={jsLogo} alt="" />
                                </div>
                            } />
                            <ResumeSubCard information={
                                <div className="Skills-flex">
                                    <img id="Skill-icons" src={cppIcon} alt="" />
                                    <img id="Skill-icons" src={javaIcon} alt="" />
                                </div>
                            } />
                            <ResumeSubCard information={
                                <div className="Skills-flex">
                                    <img id="Skill-icons" src={awsIcon} alt="" />
                                    <img id="Skill-icons" src={gitIcon} alt="" />
                                    <img id="Skill-icons" src={linuxIcon} alt="" />
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