import React from 'react'
import { useEffect } from 'react'
import ProjectCard from './ProjectCard'
import { useSelector} from 'react-redux'
import Footer from '../Footer/Footer'
import ProjectInfo from './ProjectInfo'
import '../../Styles/Projects.scss'

export default function Projects(props){

    const Lang = useSelector(state => state.language);

    useEffect(() => window.scrollTo(0, 0), props.location);
        return (
            <div className="page">
                <div className="Projects-flex">
                    {ProjectInfo.map((item, i)=>(
                        <ProjectCard key={i} projImg={item.imag} ident={item.ident}
                            title={
                                Lang ?
                                    (item.title[0])
                                    :
                                    (item.title[1])
                            }
                            description={
                                Lang ?
                                    (item.description[0])
                                    :
                                    (item.description[1])
                            }
                            repo={item.repo} technologies={item.technologies} invert={item.invert} />
                    ))}
                    <Footer/>
                </div>       
            </div>
        )
}