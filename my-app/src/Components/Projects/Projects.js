import React, { Component } from 'react'

import "./Projectspage.css"
import Modal from "./Project_modals/Modal"

export default class Projects extends Component {
  state = {
    show: false
  }
  showModalBot = () => {
    this.setState({
        ...this.state,
        show: !this.state.show
    });
  }
  showModalMulti = () => {
    this.setState({
        ...this.state,
        show: !this.state.show
    });
  }
  showModalCalc = () => {
    this.setState({
        ...this.state,
        show: !this.state.show
    });
  }
  showModalTicTac = () => {
    this.setState({
        ...this.state,
        show: !this.state.show
    });
  }
  render() {
    return (
      <React.Fragment>
            <div className = "ProjectContent">
                <button className = "Projects" onClick={this.showModalBot}>
                  Discord Bot
                </button>
                <Modal onClose={this.showModalBot} show={this.state.show}>
                  Blah Blah for discord bot
                </Modal>
                <button className = "Projects" onClick={this.showModalMulti}>
                  Array Multiplier
                </button>
                <Modal onClose={this.showModalMulti} show={this.state.show}>
                  Blah Blah for Array Multiplier
                </Modal>
                <button className = "Projects" onClick={this.showModalCalc}>
                  Calculator
                </button>
                <Modal onClose={this.showModalCalc} show={this.state.show}>
                  Blah Blah for calculator
                </Modal>
                <button className = "Projects" onClick={this.showModalTicTac}>
                  Tic-Tac-Toe
                </button>
                <Modal onClose={this.showModalTicTac} show={this.state.show}>
                  Blah Blah for Tic Tac Toe
                </Modal>
            </div>
        </React.Fragment>
    )
  }
}