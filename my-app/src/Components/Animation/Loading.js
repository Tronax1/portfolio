import React, { Component } from 'react'

import './Loading.css'

export default class Loading extends Component {
  render() {
    return (
      < div className = "Loading-background" >
        < div className = "lds-dual-ring" > </div>
      </div>
    )
  }
}
