import React, { Component } from 'react';
import NavBar from '../navBar/NavBar.js';
import WeatherComponent from '../iconWidget/IconWidget';
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
            
            <Route path='/home' component={Home2} />
            <Route path='/current-weather' component={WeatherComponent} />
            <Route path='/sunrise-report' component={SunriseReport} />
          </div>
        </Router>
      </div>
    );
  }
}

class Home2 extends Component {
  render () {
    return (
      <div>
        <Homepage />
      </div>
    );
  }
}
class SunriseReport extends React.Component {
  render () {
    return (
      <div>
        I'm Jesse Lacey and I'm with the Band Brand New
      </div>
    );
  }
}
