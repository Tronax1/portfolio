import React from 'react';
import { Route, Switch} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import Home from "./Components//Home/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Projects from "./Components/Projects/Projects"
import NavBar from "./Components/NavigationBar/Navbar"
import Resume from "./Components/Resume Page/Resume"

import './App.scss'

export default function App(){
    return (
        <React.Fragment>
          <NavBar/>
          <Route render={({location})=>(
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={450}
                classNames="fade"
              >
                <Switch location={location}>
                  < Route path="/" component={Home} exact />
                  < Route path="/About" component={About} />
                  < Route path="/Contact" component={Contact} />
                  < Route path="/Projects" component={Projects} />
                  < Route path="/Resume" component={Resume} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}/>
        </React.Fragment>
    );
}
