import React, { Component } from 'react'
import Delay from '../Animation/Delay'
import ResumeCard from './ResumeCard'
import USFlogo from './University of South Florida Logo.png'
import CV from './CV Jorge Villarreal.pdf'

import '../../Styles/Resume.css'

export default class Resume extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                <Delay/>
                    <div className="Resume-card-flex">
                        <ResumeCard header="Education" ident="p-1" content={<p><strong>Bachelor of Science: </strong> 
                        Computer Engineering, Expected December 2019<br/>
                        University of South Florida-Tampa, FL,United States<br /><br /> <img id="USF" src={USFlogo} alt="" /></p>}/>
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
                        <ResumeCard header="Experience" ident="p-3" content={<p><strong>Programming Tutor </strong><br/>05/2017 to 08/2017<br/> Colegio Albania–Mushaisa,
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
                        </div>
                
            </div>
        )
    }
}
