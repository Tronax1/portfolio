import React, { Component } from 'react'
import Form from "./Form"
import Delay from "../Animation/Delay"

import "./Contactspage.css"

export default class Contact extends Component {
  render() {
    return (
      <div>
            <Delay/>
            <div className="ContactsContent" >
              <h1>Contact me</h1>
              <Form/>
            </div>
      </div>
    )
  }
}

