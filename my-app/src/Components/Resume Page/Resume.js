import React from 'react'
import { useEffect } from 'react'
import ResumeCard from './ResumeCard'
import USFlogo from './University of South Florida Logo.png'
import ResumeSubCard from './ResumeSubCard'
import CV from './Resumes/CV Jorge Villarreal.pdf'
import CVSpa from './Resumes/CV Jorge Villarreal SPA.pdf'
import Footer from '../Footer/Footer'

import { useSelector } from 'react-redux'

import '../../Styles/Resume.scss'

export default function Resume(props){

    const Lang = useSelector(state => state.language);
    useEffect(() => window.scrollTo(0, 0), props.location);
        return (
            <div className="page">
                <div className="Resume-card-flex">
                    {
                        Lang ? 
                            (<a className = "Download-PDF" href={CV} download="CV Jorge Villarreal.pdf">Download Resume</a>)
                            : 
                            (<a className = "Download-PDF" href={CVSpa} download="CV Jorge Villarreal.pdf">Descargar Hoja de Vida</a>)
                    }
                    <ResumeCard header={
                        Lang ? ("Education"):("Educación")
                    } ident="p-1" content={
                        <ResumeSubCard information={
                            <div className="Education-Margin">
                                {
                                    Lang ?
                                        (
                                            <p><strong>B.S. in Computer Engineering</strong>
                                                <br />University of South Florida<br /> 
                                            <img id="USF" src={USFlogo} alt="" /></p>
                                        )
                                        :
                                        (
                                            <p><strong> B.S. en Computer Engineering</strong>
                                            <br />University of South Florida<br /> 
                                            <img id="USF" src={USFlogo} alt="" /></p>
                                        ) 
                                }
                            </div>
                        } />
                    } />
                    <ResumeCard header={
                        Lang ? ("Skills"):("Habilidades")
                    } ident="p-2" content={
                        <div className="Sub-Cards-Flex">
                            <ResumeSubCard information={
                                <div className="Skills-flex">
                                    <span id="Skill-icons">Front End:</span>
                                    <span id="Skill-icons">React</span>
                                    <span id="Skill-icons">Redux</span>
                                </div>
                            } />
                            <ResumeSubCard information={
                                <div className="Skills-flex">
                                    <span id="Skill-icons">Back End:</span>
                                    <span id="Skill-icons">Nodejs</span>
                                    <span id="Skill-icons">Express</span>
                                </div>
                            } />
                            <ResumeSubCard information={
                                <div className="Skills-flex">
                            <span id="Skill-icons">{Lang ? ("Languages:"):("Lenguajes:")}</span>
                                    <span id="Skill-icons">JavaScript</span>
                                    <span id="Skill-icons">C/C++</span>
                                    <span id="Skill-icons">Java</span>
                                </div>
                            } />
                            <ResumeSubCard information={
                                <div className="Skills-flex">
                                    <span id="Skill-icons">Web:</span>
                                    <span id="Skill-icons">HTML</span>
                                    <span id="Skill-icons">CSS</span>
                                    <span id="Skill-icons">SASS</span>
                                    <span id="Skill-icons">Firebase</span>
                                    <span id="Skill-icons">REST API</span>
                                </div>
                            } />
                            <ResumeSubCard information={
                                <div className="Skills-flex">
                                    <span id="Skill-icons">{Lang ? ("Databases:") : ("Base de datos:")}</span>
                                    <span id="Skill-icons">MongoDB</span>
                                    <span id="Skill-icons">NoSQL</span>
                                </div>
                            } />
                            <ResumeSubCard information={
                                <div className="Skills-flex">
                                    <span id="Skill-icons">DevOps:</span>
                                    <span id="Skill-icons">AWS</span>
                                    <span id="Skill-icons">Git</span>
                                </div>
                            } />
                        </div>
                    } />
                    <ResumeCard header={
                        Lang ? ("Experience"):("Experiencia")
                    } ident="p-3" content={
                        <ResumeSubCard information={
                            <div className="Experience-Margin">
                                {
                                    Lang ? 
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
                    <Footer />
                </div>
                    
            </div>
        )
}