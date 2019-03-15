import React, { Component } from 'react'

import "./Contactspage.css"

export default class Contact extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
            <div className="ContactsContent" >
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
        </React.Fragment>
      </div>
    )
  }
}

