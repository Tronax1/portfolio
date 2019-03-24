import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./Components//Home Page/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Projects from "./Components/Projects/Projects"
import NavBar from "./Components/NavigationBar/NavBar"
import Resume from "./Components/Resume page/Resume"

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <React.Fragment>
          <NavBar/>
          <Switch>
            < Route path="/" component={Home}  exact/ > 
            < Route path="/About" component={About}/ >
            < Route path="/Contact" component={Contact}/ >
            < Route path="/Projects" component={Projects}/ >
            < Route path = "/Resume"component = {Resume}/ >
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
