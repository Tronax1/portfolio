import React, { Component } from 'react'

import "./Projectspage.css"
import Modal from "./Project_modals/Modal"

export default class Projects extends Component {
    constructor(props){
      super(props);
      this.state = {
        show: false,
        show2: false,
        show3: false,
        show4: false
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
     showModal3 = () => {
       this.setState({
         show3: !this.state.show3
       });
     }
     showModal4 = () => {
       this.setState({
         show4: !this.state.show4
       });
     }
  render() {
    return (
      <React.Fragment>
          <div className="Gradient">
              <div className = "ProjectContent">
                  <button className = "Projects" onClick={this.showModal}>
                    Discord Bot
                  </button>
                  <button className = "Projects" onClick={this.showModal2}>
                    Array Multiplier
                  </button>
                  <button className = "Projects" onClick={this.showModal3}>
                    Scientific Calculator
                  </button>
                  <button className = "Projects" onClick={this.showModal4}>
                    Tic-Tac-Toe
                  </button>
                  <Modal onClose={this.showModal} show={this.state.show} info="DiscordBot"/>
                  <Modal onClose={this.showModal2} show={this.state.show2} info="Array Multiplier"/>
                  <Modal onClose={this.showModal3} show={this.state.show3} info="Scientific Calculator"/>
                  <Modal onClose={this.showModal4} show={this.state.show4} info="Tic-Tac-Toe"/>
              </div>
            </div>
        </React.Fragment>
    )
  }
}