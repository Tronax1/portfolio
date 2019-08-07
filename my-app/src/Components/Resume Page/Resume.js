import React, { Component } from 'react'
import Delay from '../Animation/Delay'
import ResumeCard from './ResumeCard'

import '../../Styles/Resume.css'

export default class Resume extends Component {
    render() {
        return (
            <div>
                <Delay/>
                <div className="Home-b">
                    <div className="Resume-card-flex">
                        <ResumeCard header="Education" content={<p><strong>Bachelor of Science: </strong> 
                        Computer Engineering, Expected December 2019<br/>
                        University of South Florida-Tampa, FL,United States</p>}/>
                        <ResumeCard header="Skills" content={<ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Firebase</li>
                            <li>HTML5 and CSS</li>
                            <li>Java</li>
                            <li>C/C++</li>
                            <li>Unix/Linux</li>
                            <li>Bilingual: English (Fluent), Spanish (Native)</li>
                            <li>Amazon Web Services EC2</li> 
                        </ul>} />
                        <ResumeCard header="Experience" content={<p><strong>Programming Tutor </strong>,05/2017 to 08/2017 Colegio Albania–Mushaisa,
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
                        </div>
                </div>
            </div>
        )
    }
}
