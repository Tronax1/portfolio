import React from 'react'

import {NavLink} from 'react-router-dom'
import Delay from "../Animation/Delay"

import "./Homepage.css"
import "./Snow.scss"

export default function Home(){
    return (
      <React.Fragment>
            <Delay/>
            <div className="lockdown">
                <div className="background">
                    < div className = "Snow layer1 a" / >
                    < div className = "Snow layer1" / >
                    < div className = "Snow layer2 a" / >
                    < div className = "Snow layer2" / >
                    < div className = "Snow layer3 a" / >
                    < div className = "Snow layer3" / >
                </div> 
                < div className = "HomeContent">
                     <p>Oh hey, < br / > I didn't see you there <br/> welcome to my life </p>
                </div>
                < NavLink className = "GetStarted" to = "/About" > Get Started </NavLink >
            </div>
        </React.Fragment >
    );
}