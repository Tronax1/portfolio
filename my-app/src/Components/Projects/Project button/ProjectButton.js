import React, { Component } from 'react'

import "./ProjectButton.css"
import Modal from "../Project_modals/Modal"

export default class ProjectButton extends Component {
 constructor(props) {
     super(props);
     this.state = {
         show: false
     }
 }
 showModal = ()=> {
    this.setState({
        show: !this.state.show
    });
 }
  render() {
    return (
      <div>
          <button id={this.props.ident} className = "Projects" onClick={this.showModal}>
                    {this.props.description}
            </button>
            <Modal onClose={this.showModal} show={this.state.show} img={this.props.image} 
                    info={this.props.information}
                    repo = {this.props.repository} / >
      </div>
    )
  }
}
