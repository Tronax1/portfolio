import React, { Component } from 'react'
import Form from "./Form"

import "./Contactspage.css"

export default class Contact extends Component {
  render() {
    return (
      <div>
        < div className = "transition-b" /> 
            <div className="ContactsContent" >
              <h1>Contact me</h1>
              <Form/>
            </div>
      </div>
    )
  }
}

