import React, { Component } from 'react'

import "./Form.css"

export default class Form extends Component {
  render() {
    return (
      <div>
            <form className="align">
                <label>
                 <input type="text" id = "name"className="format" placeholder = "Name"/>
                </label>
                <label>
                 <input type="text" id = "email" className="format" placeholder = "Email"/>
                </label>
                <label>
                  <input type="text" id = "subject" className="format" placeholder = "Subject"/>
                </label>
                <label>
                  <input type="text" id = "message" className="format message" placeholder= "Message"/>
                </label>
                <label>
                  <button id ="submit" className="submitForm">Submit</button>
                </label>
            </form>
      </div>
    )
  }
}
