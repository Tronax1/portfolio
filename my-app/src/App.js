import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Projects from "./Components/Projects"
import NavBar from "./Components/NavigationBar/NavBar"


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
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
