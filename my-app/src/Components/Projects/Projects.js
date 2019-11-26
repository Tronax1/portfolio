import React, { Component } from 'react'
import ProjectCard from './ProjectCard'
import {connect} from 'react-redux'
import Footer from '../Footer/Footer'
import ProjectInfo from './ProjectInfo'
import '../../Styles/Projects.scss'

class Projects extends Component {
    componentWillUnmount(){
        window.scrollTo(0,0);
    }
    render() {
        console.log(ProjectInfo);
        return (
            <div className="page">
                <div className="Projects-flex">
                    {ProjectInfo.map((item, i)=>(
                        <ProjectCard key={i} projImg={item.imag} ident={item.ident}
                            title={
                                this.props.language ?
                                    (item.title[0])
                                    :
                                    (item.title[1])
                            }
                            description={
                                this.props.language ?
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
}
function mapStatetoProps({language}){
    return {language};
}
export default connect(mapStatetoProps)(Projects);