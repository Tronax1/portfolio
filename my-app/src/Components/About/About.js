import React, { Component } from 'react'
import SampleImage from './pangolin6.jpg'
import {connect} from 'react-redux'
import Footer from '../Footer/Footer'

import '../../Styles/About.css'

class About extends Component {
    componentWillUnmount(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="page">
                <div className="About-Content">
                    <h1>{this.props.language ? ("About Me") : ("Acerca de Mi")}</h1>
                    <div className="Content-Flex">
                        <img src={SampleImage} alt="" />
                        {this.props.language ? 
                            (<p><strong>I am a self taught web developer with a strong background in object oriented programming.
                            I also like to play chess and learn new technologies during my free time.</strong>
                            </p>)
                        :
                            (<p><strong>Soy un desarrollador web autodidacto con conocimientos en programación orientada a objetos.
                            Tambien me gusta jugar ajedrez y aprender nuevas tecnologias en mi tiempo libre. </strong>
                            </p>)
                        }
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
function mapStatetoProps({ language }) {
    return { language };
}
export default connect(mapStatetoProps)(About);