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
            </div>
      </div>
    )
  }
}

