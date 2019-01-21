import React from 'react'
import {NavLink} from 'react-router-dom'

import Mountain from './SnowMountains.jpg'

import "./Homepage.css"
import "./Snow.scss"

const Home = () => {
    return (
        <React.Fragment>
            <div className="background">
                < div className = "Snow layer1 a" / >
                < div className = "Snow layer1" / >
                < div className = "Snow layer2 a" / >
                < div className = "Snow layer2" / >
                < div className = "Snow layer3 a" / >
                < div className = "Snow layer3" / >
            </div> 
            < div className = "HomeContent" > Oh hey I didn't see you there, welcome to my life </div>
            < NavLink className = "GetStarted" to = "/About" > Get Started </NavLink >
            <img src={Mountain} alt=""/>
        </React.Fragment >
    );
}

export default Home;