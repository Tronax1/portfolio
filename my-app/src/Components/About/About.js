import React, { Component } from 'react'
import SampleImage from './pangolin6.jpg'
import {connect} from 'react-redux'

import '../../Styles/About.css'

class About extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                {this.props.language ? (<div className="About-Content">
                    <h1>About Me</h1>
                    <img src={SampleImage} alt="" />
                    <p><strong>I am a self taught web developer with a strong background in object oriented programming.
                        I also like to play chess and learn new technologies during my free time.</strong>
                    </p>
                </div>) : (<div className="About-Content">
                    <h1>Acerca de Mi</h1>
                    <img src={SampleImage} alt="" />
                    <p><strong>Soy un desarrollador web autodidacto con conocimientos en programación orientada a objetos. 
                        Tambien me gusta jugar ajedrez y aprender nuevas tecnologias en mi tiempo libre. </strong>
                    </p>
                </div>)}
                
            </div>
        )
    }
}
function mapStatetoProps({ language }) {
    return { language };
}
export default connect(mapStatetoProps)(About);