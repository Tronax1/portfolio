import React, { Component } from 'react'

import "./Form.css"

export default class Form extends Component {
  render() {
    return (
      <div>
            <form className="align">
                <label>
                 <input type="text" className="format" placeholder = "Name"/>
                </label>
                <label>
                 <input type="text" className="format" placeholder = "Email"/>
                </label>
                <label>
                  <input type="text" className="format" placeholder = "Subject"/>
                </label>
                <label>
                  <input type="text" className="format message" placeholder= "Message"/>
                </label>
                <label>
                  <button className="submitForm">Submit</button>
                </label>
            </form>
      </div>
    )
  }
}
