import React from 'react'


import "./Projectspage.css"
import Aldebaran from "./Aldebaran repo.jpg"
import Calculator from "./Calculator.jpg"
import Delay from "../Animation/Delay"
import ImageBackground from "../Image Backgrounds/ImageBackground"
import PurpleOcean from '../Images/Purple ocean.jpg'
import Knight from "./Knight move.jpg"
import TicTacToe from "./Tic Tac Toe.jpg"
import ProjectButton from "../Projects/Project button/ProjectButton"

export default function Projects(){
    return (
      <React.Fragment>
          <Delay/>
          <ImageBackground img={PurpleOcean}/>
          <div className="Gradient"> </div>
             <div className = "ProjectContent">
                    <ProjectButton ident="MoneyManager" description="MoneyManager" image={Aldebaran} 
                    information="This is a full stack application that helps the user keep track of expenses, 
                    it also has a mortgage calculator to determine what the house payments per month would be 
                    given a down payment, and interest rate. The application also displays whether the user is 
                    overspending given the income, as well as the expenses. Last but not least, it shows the 
                    current value of a stock given by user input." 
                    repository="https://github.com/Tronax1/Money-Manager"/>

                    <ProjectButton ident="aldebaran" description="Aldebaran" image={Aldebaran} 
                    information="This is a discord bot application
                    that plays music from a youtube playlist, it also acts like a basic dictionary
                    and displays your osu! statistics." repository="https://github.com/Tronax1/Aldebaran-"/>

                    <ProjectButton ident="knight" description="Knight's Move Game" image={Knight} 
                    information="This is a player vs AI gamewhere both players move a chess knight 
                    around the board, and whoever runs out of moves looses."
                    repository="https://github.com/Tronax1/Knights-game"/>

                    <ProjectButton ident="calculator" description="Calculator" image={Calculator} 
                    information="This is a scientific calculator that performs the basic arirthmetic 
                    operations as well as additional trigonometric functions such as sine, 
                    cosine and tangent." 
                    repository = "https://github.com/Tronax1/Calculator" / >

                    <ProjectButton ident="tictac" description="Tic Tac Toe" image={TicTacToe} 
                    information="Simple Tic-Tac-Toe game
                    that allows the player to compete against the computer or against another human." 
                    repository = "https://github.com/Tronax1/Tic-Tac-Toe" / >
              </div>
        </React.Fragment>
    );
}
