import React, { Component } from 'react'

import "./Form.css"

export default class Form extends Component {
  render() {
    return (
      <div>
            <form className="align">
                <label>
                 <input type="text" className="format" placeholder = "Name"></input>
                </label>
                <label>
                 <input type="text" className="format" placeholder = "Email"></input>
                </label>
                <label>
                  <input type="text" className="format" placeholder = "Subject"></input>
                </label>
                <label>
                  <input type="text" className="format message" placeholder= "Message"></input>
                </label>
            </form>
      </div>
    )
  }
}
