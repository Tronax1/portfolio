import React from 'react'
import Delay from "../Animation/Delay"
import ImageBackground from "../Image Backgrounds/ImageBackground"
import OrangeForest from '../Images/Orange Forest.jpg'

import "./Aboutpage.css"

export default function About(){
    return (
      <React.Fragment>
          <Delay/>
          <ImageBackground img={OrangeForest}/>
          <div className="dark"/>
          <div id ="back"/>
          <div id ="front"/>
            <div className="AboutContent">
                < h1 > About me </h1>
                < i className = "fas fa-user-tie" > </i>
                Deserunt occaecat ipsum eu aute laboris sunt duis eiusmod. 
                Sit nulla enim magna anim consequat. Commodo minim ullamco sit consequat 
                eu eu aliquip excepteur pariatur laboris cupidatat consectetur nisi commodo. 
                Id sunt magna ex eu deserunt in irure sit amet ipsum. Fugiat eu eu nostrud 
                consequat duis esse irure amet eu officia aute. Laborum esse aute excepteur 
                pariatur consequat consectetur fugiat.
            </div>
        </React.Fragment>
    );
}