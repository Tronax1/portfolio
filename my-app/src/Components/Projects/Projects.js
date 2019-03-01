import React, { Component } from 'react'

import "./Projectspage.css"
import Modal from "./Project_modals/Modal"

export default class Projects extends Component {
    constructor(props){
      super(props);
      this.state = {
        show: false,
        show2: false
      }
    }
   
    showModal = () => {
      this.setState({
          show: !this.state.show
      });
    }
     showModal2 = () => {
       this.setState({
         show2: !this.state.show2
       });
     }
  render() {
    return (
      <React.Fragment>
            <div className = "ProjectContent">
                <button className = "Projects" onClick={this.showModal}>
                  Discord Bot
                </button>
                <Modal onClose={this.showModal} show={this.state.show} info="sdfsdf"/>
                <button className = "Projects" onClick={this.showModal2}>
                  Array Multiplier
                </button>
                <Modal onClose={this.showModal2} show={this.state.show2} info="Test"/>
            </div>
        </React.Fragment>
    )
  }
}