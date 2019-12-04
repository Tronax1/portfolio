import React from 'react'
import { useSelector } from 'react-redux'

import '../../Styles/ProjectCard.scss'

export default function ProjectCard(props){

    const Lang = useSelector(state => state.language);
        return (
            <div>
                <div id={props.ident} className="Project-Card">
                    <div className="Project-Card-Flex">
                        {!props.invert ?
                            (<React.Fragment>
                                <div className="Project-Card-Header">
                                    <img src={props.projImg} alt=""></img>
                                </div>
                                <div className="Project-Content-Flex">
                                    <div className="Project-Card-Body">
                                        <h1>{props.title}</h1>
                                        <p>{props.description}</p>
                                    </div>
                                    <div className="Project-Card-Footer">
                                        {Lang ? (<h3>Technologies</h3>) : (<h3>Tecnologias</h3>)}
                                        <div>{props.technologies}</div>
                                        {Lang ? (<a href={props.repo} target="_blank" rel="noopener noreferrer"
                                        >View Project</a>) : (<a href={props.repo} target="_blank" rel="noopener noreferrer"
                                        >Ver Proyecto</a>)}
                                    </div>
                                </div>
                            </React.Fragment>)
                            :
                            (
                                <React.Fragment>
                                    <div className="Project-Content-Flex">
                                        <div className="Project-Card-Body">
                                            <h1>{props.title}</h1>
                                            <p>{props.description}</p>
                                        </div>
                                        <div className="Project-Card-Footer">
                                            {Lang ? (<h3>Technologies</h3>) : (<h3>Tecnologias</h3>)}
                                            <div>{props.technologies}</div>
                                            {Lang ? (<a href={props.repo} target="_blank" rel="noopener noreferrer"
                                            >View Project</a>) : (<a href={props.repo} target="_blank" rel="noopener noreferrer"
                                            >Ver Proyecto</a>)}
                                        </div>
                                    </div>
                                    <div className="Project-Card-Header">
                                        <img src={props.projImg} alt=""></img>
                                    </div>
                                </React.Fragment>
                            )
                        }
                        </div>
                    </div>
                <div id={props.ident} className="Project-Card-Mobile" >
                    <div className="Project-Card-Flex">
                        <div className="Project-Card-Header">
                            <img src={props.projImg} alt=""></img>
                        </div>
                        <div className="Project-Content-Flex">
                            <div className="Project-Card-Body">
                                <h1>{props.title}</h1>
                                <p>{props.description}</p>
                            </div>
                            <div className="Project-Card-Footer">
                                {Lang ? (<h3>Technologies</h3>) : (<h3>Tecnologias</h3>)}
                                <div>{props.technologies}</div>
                                {Lang ? (<a href={props.repo} target="_blank" rel="noopener noreferrer"
                                >View Project</a>) : (<a href={props.repo} target="_blank" rel="noopener noreferrer"
                                >Ver Proyecto</a>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}