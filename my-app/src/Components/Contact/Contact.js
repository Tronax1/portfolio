import React, { Component } from 'react'
import Form from "./Form"
import Delay from "../Animation/Delay"
import ImageBackground from "../Image Backgrounds/ImageBackground"
import Cloudy from '../Images/Cloudy Mountain.jpg'
import Loading from "../Animation/Loading"

import "./Contactspage.css"
import "./Contactspage.scss"

export default class Contact extends Component {
  render() {
    return (
      <div>
            <Delay/>
            <Loading/>
            <ImageBackground img={Cloudy}/>
            <div id="fog"/>
            <div className="ContactsContent" >
              <h1>Contact me</h1>
              <Form/>
            <div className="Social-Media">
              < a  rel="noopener noreferrer"
                target="_blank" href="https://www.linkedin.com/in/jorgevillarrealgongora/">
                <i className="fab fa-linkedin fa-4x"></i>
              </a>
              < a  rel="noopener noreferrer"
                target="_blank" href="https://github.com/Tronax1">
              <i className="fab fa-github fa-4x"></i>
              </a>
            </div>
            </div>
      </div>
    )
  }
}

