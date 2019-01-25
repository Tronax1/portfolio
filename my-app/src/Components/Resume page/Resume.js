import React from 'react'

import './Resumepage.css'

const Resume = ()=>{
    return(
        <React.Fragment>
            <div className="ResumeContent"> 
                <p className="Formatting">
                
                    < span id = "Contents" > #include<span id="orange">&lt;iostream&gt;</span></span>
                    < span id = "Contents" > #include<span id="orange">&lt;stdio.h&gt;</span></span><br/>

                    < span id = "Contents" >Using <span id="lightBlue">namespace</span> std;</span><br/>

                    < span id = "Contents" ><span id="Types">int</span> main() &#123;</span><br/>

                    <span id="Header">Tronax Magneghost</span><br/><br/>

                    < span id = "Header-two" > Education </span> < br / > < br / >
                    <span id="Contents"><strong><span id="Reserved">Bachelor of Science:</span></strong> Computer Engineering, 
                    Expected December 2019 < br / >
                    University of South Florida < br / > < br / > </span>

                    <span id="Header-two">Experience</span> < br / > < br / >

                    < span id = "Header-two" > Skills</span><br/>
                    <span id="Contents">
                        <span><span id="Yellow">switch</span>(skill)&#123;</span><br/>
                        <span id="Indent"><span id="Yellow">case</span> 0: Javascript(Node and React); <span id="lightBlue">break</span>;</span><br/>
                        < span id = "Indent" ><span id="Yellow">case</span> 1: Java, C / C++; <span id="lightBlue">break</span>;</span>< br / >
                        < span id = "Indent" ><span id="Yellow">case</span> 2: Unix / Linux; <span id="lightBlue">break</span>;</span>< br / >
                        <span id="Indent"><span id="Yellow">case</span> 3: Bilingual: English(Fluent) and Spanish(Native); <span id="lightBlue">break</span>;</span> < br / >
                        <span id="Indent"><span id="Yellow">case</span> 4: Amazon Web Services EC2; <span id="lightBlue">break</span>;</span>< br / >
                        <span id="Indent"><span id="Yellow">case</span> 5: HTML5 and CSS; <span id="lightBlue">break</span>;</span>< br / >
                        &#125;
                        <br/>

                    </span>

                    < span id = "Header-two" > Other Activities </span> < br / > < br / >
                    <span id="Contents">
                        Member of the USF Microsoft Developer Club<br/>
                        USF Chess Club President<br/>
                        Taekwondo Black Belt<br/><br/>
                    </span>
                    <span id = "Contents"><span id="lightBlue">return</span> 0;</span>
                    <span id = "Contents">&#125;</span>
                </p>
            </div>
        </React.Fragment >
    );
}

export default Resume;
