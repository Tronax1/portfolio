import React, { Component } from 'react'
import ImageFormat from '../Elements/ImageFormat'

export default class ImageBackground extends Component {
  render() {
    return (
      <ImageFormat>
        <img src={this.props.img} alt=""/>
      </ImageFormat>
    )
  }
}
