import React, { Component } from 'react';


import './Resumepage.css'
import ResumeModal from './Resume Modal/ResumeModal'
import Delay from "../Animation/Delay"
import ImageBackground from '../Image Backgrounds/ImageBackground'
import Aldebaran from '../Projects/Aldebaran repo.jpg'

export default class Resume extends Component{
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }
    showModal = () => {
        this.setState({
            show: !this.state.show
        });
       }
    render(){
    return(
        <div className="Stay-put">
            < Delay / >
            <ImageBackground img={Aldebaran}/>
            <div className="ResumeContent"> 
                <p className="Formatting">
                
                    < span id = "Contents" > <span id="Magenta">#include</span><span id="orange">&lt;iostream&gt;</span></span>
                    < span id = "Contents" > <span id="Magenta">#include</span><span id="orange">&lt;stdio.h&gt;</span></span><br/>

                    < span id = "Contents" >using <span id="lightBlue">namespace</span> std;</span><br/>

                    < span id = "Contents" ><span id="Types">int</span> main() &#123;</span>

                    <span id="Header"><strong>Jorge Villarreal</strong></span><br/>

                    < span id = "Header-two" > <strong>Education</strong> </span> < br / >
                    <span id="Contents"><strong><span id="Reserved">Bachelor of Science:</span></strong> Computer Engineering, 
                    Expected December 2019 < br / >
                    University of South Florida < br / > < br / > </span>

                    <span id="Header-two"><strong>Experience</strong></span> < br / >
                    <span id="Contents"><span><span id="Reserved"><strong><i className="fas fa-arrow-right"></i> Programming tutor</strong> 05/2017 to 08/2017< br / >
                     Colegio Albania - Mushaisa, La Guajira<br/></span></span>
                     <span id="Indent"><i className="fab fa-codepen"></i> Collaborated with a team of faculty to develop after-school tutorial programs
                     for students in need of extra help</span><br/>
                     <span id="Indent"><i className="fab fa-codepen"></i> Met with parents to resolve conflicting educational priorities and issues<br/></span>
                     <span id="Indent"><i className="fab fa-codepen"></i> Designed a summer boot - camp to teach JavaScript and C++ to students.<br/></span>
                     </span><br/>
                     <span id="Contents"><span><span id="Reserved"><strong><i className="fas fa-arrow-right"></i> Chess tutor</strong> 05/2017 to 08/2017< br / >
                     Colegio Albania - Mushaisa, La Guajira<br/></span></span>
                     <span id="Indent"><i className="fab fa-codepen"></i> Designed a summer intensive chess program for students.</span><br/>
                     <span id="Indent"><i className="fab fa-codepen"></i> Organized chess tournaments within the community<br/></span>
                     </span><br/>
                     <span id="Contents"><span><span id="Reserved"><strong><i className="fas fa-arrow-right"></i> English Teacher</strong> 08/2013 to 06/2014< br / >
                     Akuaipa - Albania, La Guajira<br/></span></span>
                     <span id="Indent"><i className="fab fa-codepen"></i> Volunteered with a team of students to help nearby communities.</span><br/>
                     <span id="Indent"><i className="fab fa-codepen"></i> Implement an organized English program to aid fellow students<br/></span>
                     </span>

                    < span id = "Header-two" > <strong>Skills</strong></span><br/>
                    <span id="Contents">
                        <span><span id="Yellow">switch</span>(skill)&#123;</span><br/>
                        <span id="Indent"><span id="Yellow">case</span> 0: Javascript(Node <i className="fab fa-node"></i> and React <i className="fab fa-react"></i>); <span id="lightBlue">break</span>;</span><br/>
                        < span id = "Indent" ><span id="Yellow">case</span> 1: Java <i className="fab fa-java"></i>, C/C++; <span id="lightBlue">break</span>;</span>< br / >
                        < span id = "Indent" ><span id="Yellow">case</span> 2: Unix/Linux <i className="fab fa-linux"></i>; <span id="lightBlue">break</span>;</span>< br / >
                        <span id="Indent"><span id="Yellow">case</span> 3: Bilingual: English(Fluent) and Spanish(Native); <span id="lightBlue">break</span>;</span> < br / >
                        <span id="Indent"><span id="Yellow">case</span> 4: Amazon Web Services <i className="fab fa-aws"></i> EC2; <span id="lightBlue">break</span>;</span>< br / >
                        <span id="Indent"><span id="Yellow">case</span> 5: HTML5 <i className="fab fa-html5"></i> and CSS <i className="fab fa-css3"></i>; <span id="lightBlue">break</span>;</span>< br / >
                        &#125;
                        <br/>

                    </span>

                    < span id = "Header-two" > <strong>Other Activities</strong></span> < br / > 
                    <span id="Contents">
                        <i className="fab fa-codepen"></i> Member of the USF Microsoft Developer Club<br/>
                        <i className="fab fa-codepen"></i> USF Chess Club President<br/>
                        <i className="fab fa-codepen"></i> Taekwondo Black Belt<br/><br/>
                    </span>
                    <span id = "Contents"><span id="lightBlue">return</span> 0;</span>
                    <span id = "Contents">&#125;</span>
                </p>
            </div>
            <input className="button" type="button"
            onClick={this.showModal}
             value="View PDF"/>
            <ResumeModal onClose={this.showModal} show={this.state.show}/>
        </div >
    );
    }
}


