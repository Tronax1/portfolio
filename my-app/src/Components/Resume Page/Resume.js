import React, { Component } from 'react'
import ResumeCard from './ResumeCard'
import USFlogo from './University of South Florida Logo.png'
import CV from './CV Jorge Villarreal.pdf'
import CVSpa from './CV Jorge Villarreal SPA.pdf'

import {connect} from 'react-redux'

import '../../Styles/Resume.css'

class Resume extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                {this.props.language ? (<div className="Resume-card-flex">
                    <ResumeCard header="Education" ident="p-1" content={<p><strong>Bachelor of Science: </strong>
                        Computer Engineering, Expected December 2019<br />
                        University of South Florida-Tampa, FL,United States<br /><br /> <img id="USF" src={USFlogo} alt="" /></p>} />
                    <ResumeCard header="Skills" ident="p-2" content={<ul>
                        <li>React <i className="fab fa-react"></i></li>
                        <li>Redux</li>
                        <li>Firebase <i className="fas fa-fire"></i></li>
                        <li>HTML5 and CSS <i className="fab fa-html5"></i> <i className="fab fa-css3-alt"></i></li>
                        <li>Java  <i className="fab fa-java"></i></li>
                        <li>C/C++</li>
                        <li>Unix/Linux <i className="fab fa-linux"></i></li>
                        <li>Bilingual: English (Fluent), Spanish (Native)</li>
                        <li>Amazon Web Services EC2  <i className="fab fa-aws"></i></li>
                    </ul>} />
                    <ResumeCard header="Experience" ident="p-3" content={<p><strong>Programming Tutor </strong><br />05/2017 to 08/2017<br /> Colegio Albania–Mushaisa,
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
                    </p>} />
                    <a href={CV} download="CV Jorge Villarreal.pdf">Download PDF</a>
                </div>) : (<div className="Resume-card-flex">
                    <ResumeCard header="Educación" ident="p-1" content={<p><strong>Bachiller de las Ciencias: </strong>
                        Computer Engineering, Esperado Diciembre 2019<br />
                        University of South Florida, Tampa, FL, Estados Unidos<br /><br /> <img id="USF" src={USFlogo} alt="" /></p>} />
                    <ResumeCard header="Habilidades" ident="p-2" content={<ul>
                        <li>React <i className="fab fa-react"></i></li>
                        <li>Redux</li>
                        <li>Firebase <i className="fas fa-fire"></i></li>
                        <li>HTML5 and CSS <i className="fab fa-html5"></i> <i className="fab fa-css3-alt"></i></li>
                        <li>Java  <i className="fab fa-java"></i></li>
                        <li>C/C++</li>
                        <li>Unix/Linux <i className="fab fa-linux"></i></li>
                        <li>Bilingüe: Ingles (Fluido), Español (Nativo)</li>
                        <li>Amazon Web Services EC2  <i className="fab fa-aws"></i></li>
                    </ul>} />
                    <ResumeCard header="Experiencia" ident="p-3" content={<p><strong>Tutor de Programación </strong><br />05/2017 a 08/2017<br /> Colegio Albania–Mushaisa,
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
                    </p>} />
                    <a href={CVSpa} download="CV Jorge Villarreal.pdf">Descargar PDF</a>
                </div>)}
                
            </div>
        )
    }
}
function mapStatetoProps({language}){
    return {language};
}
export default connect(mapStatetoProps)(Resume);