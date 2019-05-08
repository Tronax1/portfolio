import React, { Component } from 'react'

import './ResumeModal.css'

export default class ResumeModal extends Component {
 onClose = (e)=>{
        this.props.onClose && this.props.onClose(e);
    }   
    render(){
        if(!this.props.show){
            return null;
        }
        return(
            <React.Fragment>
                <div id = "Mwindow" className = "Background">
                    <div className="Contents">
                        <div className="Header">
                            <button className = "Close" onClick = {(e) => {this.onClose(e)}}>
                                    < i className = "fas fa-times fa-2x" > </i>
                                </button>
                        </div>
                        <div className="BodyResume">
                            <hr/>
                            <h1 className="Centered">JORGE ALBERTO VILLARREAL GONGORA</h1>
                            < hr / >
                            < hr / >
                            <p  className="Paragraph">C: 8135050890 jvillarreal1@mail.usf.edu  jvilla1714@gmail.com</p>
                            < h3 className="Centered"> PROFESSIONAL SUMMARY </h3>
                            < p className="Paragraph"> Talented computer engineer with a strong background in object oriented
                            programming and web development.<br/> Portfolio available at: 
                            "Website to the folio" </p>
                            < h3 className="Centered"> EDUCATION </h3>
                            <p className="Paragraph"><strong>Bachelor of Science:</strong> Computer Engineering, 
                                Expected <strong> December 2019</strong> <br/>University of South Florida - Tampa, Florida, United States
                            </p>
                            <h3 className="Centered">WORK HISTORY</h3>
                            <p className="Paragraph"> Programming Tutor, 05/2017 to 08/2017<br/>
                            Colegio Albania - Mushaisa, La Guajira <br/></p>
                            <ul>
                                <li>Collaborated with a team of faculty to develop after-school tutorial
                                    programs for students in need of extra help
                                </li>
                                < li >Met with parents to resolve conflicting educational priorities
                                and issues</li>
                                < li >Designed summer a boot-camp to teach Javascript 
                                and C++ to students </li>
                            </ul>

                            <p className="Paragraph"> Chess Tutor, 05/2017 to 08/2017<br/>
                            Colegio Albania - Mushaisa, La Guajira <br/></p>
                            <ul>
                                <li>Designed a summer intensive chess programs for students</li>
                                < li >Organized chess tournaments within the community</li>
                            </ul>

                            
                            <p className="Paragraph"> English Teacher, 08/2013 to 06/2014<br/>
                            Akuaipa - Albania, La Guajira </p>

                            <ul>
                                <li>Volunteered with a team of students to help nearby communities</li>
                                < li >Implement and organized English program to aid fellow students</li>
                            </ul>
                            < h3 className="Centered">SKILLS</h3>
                            <ul>
                                <li>JavaScript (Node, React)</li>
                                < li >Java, C/C++</li>
                                < li >Unix/Linux</li>
                            </ul>
                            <ul>
                                < li >Bilingual: English (Fluent) Spanish (Native)</li>
                                < li >Amazon Web Services EC2</li>
                                < li >HTML5 and CSS</li>
                            </ul>
                            < h3 className="Centered">ACTIVITIES</h3>
                                <ul>
                                < li >Member of the USF Microsoft developers club</li>
                                < li >USF Chess Club President</li>
                                < li >Taekwondo Black Belt</li>
                            </ul>
                        </div>    
                        <div className="Footer">
                        </div>
                    </div>    
                </div>
            </React.Fragment>
        )
    }
}
