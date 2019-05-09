import React, { Component } from 'react'


import "./Projectspage.css"
import Modal from "./Project_modals/Modal"
import Aldebaran from "./Aldebaran.jpg"
import Calculator from "./Calculator.jpg"
import Delay from "../Animation/Delay"
import ImageBackground from "../Image Backgrounds/ImageBackground"
import PurpleOcean from '../Images/Purple ocean.jpg'
import Loading from "../Animation/Loading"

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
          <Delay/>
          <Loading/>
          <ImageBackground img={PurpleOcean}/>
          <div className="Gradient"> 
            </div>
             <div className = "ProjectContent">
                  <button id = "aldebaran" className = "Projects" onClick={this.showModal}>
                    Aldebaran
                  </button>
                  <button id = "multiplier" className = "Projects" onClick={this.showModal2}>
                    Array Multiplier
                  </button>
                  <button id = "calculator" className = "Projects" onClick={this.showModal3}>
                    Scientific Calculator
                  </button>
                  <button id = "tictac" className = "Projects" onClick={this.showModal4}>
                    Tic-Tac-Toe
                  </button>
                  <Modal onClose={this.showModal} show={this.state.show} img={Aldebaran} 
                    info="This is a discord bot application
                    that plays music from a youtube playlist, it also acts like a basic dictionary
                    and displays your osu! statistics."
                    repo = "https://github.com/Tronax1/Aldebaran-" / >
                  <Modal onClose={this.showModal2} show={this.state.show2} info="Array Multiplier"/>
                  <Modal onClose={this.showModal3} show={this.state.show3} img={Calculator} 
                  info="This is a scientific calculator that performs the basic arirthmetic operations
                  as well as additional trigonometric functions such as sine, cosine and tangent."
                    repo = "https://github.com/Tronax1/Calculator" / >
                  <Modal onClose={this.showModal4} show={this.state.show4} info="Simple Tic-Tac-Toe game
                  that allows the player to compete against the computer or against another human."
                    repo = "https://github.com/Tronax1/Tic-Tac-Toe" / >
              </div>
        </React.Fragment>
    )
  }
}