import React, { Component } from 'react';
import NavBar from '../navBar/NavBar.js';
import WeatherComponent from '../Weather';
import Homepage from '../homepage/Homepage';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'; 
export default class App extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            
            <Route path='/home' component={Home} />
            <Route path='/current-weather' component={WeatherComponent} />
            <Route path='/sunrise-report' component={WeatherComponent} />
          </div>
        </Router>
      </div>
    );
  }
}

class Home extends Component {
  render () {
    return (
      <div>
        <Homepage />
      </div>
    );
  }
}

