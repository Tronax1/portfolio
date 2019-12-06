import React from 'react'
import { useEffect } from 'react'
import SampleImage from './Images/pangolin6.jpg'
import { useSelector } from 'react-redux'
import Footer from '../Footer/Footer'

import '../../Styles/About.scss'

export default function About(props){

    const Lang = useSelector(state => state.language);
    useEffect(() => window.scrollTo(0, 0), props.location);
        return (
            <div className="page">
                <div className="About-Content">
                    <h1>{Lang ? ("About Me") : ("Acerca de Mi")}</h1>
                    <div className="Content-Flex">
                        <img src={SampleImage} alt="" />
                        {Lang ? 
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