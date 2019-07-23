import React, { Component } from 'react'
import ImageFormat from '../Elements/ImageFormat'

export default class ImageBackground extends Component {
  render() {
    return (
      <ImageFormat image={this.props.img}>
      </ImageFormat>
    )
  }
}
