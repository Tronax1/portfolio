import React, { Component } from 'react'

import "./ImageBackground.css"

export default class ImageBackground extends Component {
  render() {
    return (
      <div className="actual-img">
        <img src={this.props.img} alt=""/>
      </div>
    )
  }
}
