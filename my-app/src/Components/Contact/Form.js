import React, { Component } from 'react'

import "./Form.css"

export default class Form extends Component {
  render() {
    return (
      <div>
        <h1>Contact me</h1>
            <form>
                <label>
                 Name <input type="text" name="name"></input>
                </label>
                <label>
                Email <input type="text" name="name"></input>
                </label>
                <label>
                Subject <input type="text" name="name"></input>
                </label>
                <label>
                Message <input type="text" name="name"></input>
                </label>
            </form>
      </div>
    )
  }
}
