import React, { Component } from 'react';
import NavBar from '../navBar/NavBar';
import Homepage from '../homepage/Homepage';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import '../iconWidget/IconWidget.css';
import IconWidget from '../iconWidget/IconWidget';
import Sunrise from '../sunrise/Sunrise';

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      initialized: false,
      weatherData: {}
    };
    this.fetchWeatherData = this.fetchWeatherData.bind(this);
  }
  fetchWeatherData (city) {
    console.log(city);
    this.setState({
      initialized: false
    });
    // wrap your
    // logic fetching all the weather api data into a method.
    // var jeanineapi = 'e6ea27b1c535e375f2f3ab9cfeab7df6';
    var markapi = '3d6b633422451393e953dab4052ea0e4';
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + markapi;
    fetch(url).then(function (response) {
      return response.json();
    }).then((weatherObj) => {
      if (weatherObj !== undefined) {
        this.setState({
          initialized: true,
          weatherData: weatherObj
        });
      } else {
        this.fetchWeatherData();
      }
    });
  }
  componentDidMount () {
    this.fetchWeatherData('Bozeman');
  }
  render () {
    if (this.state.initialized) {
      return (
        <div>
          <Router>
            <div>
              <NavBar weatherData={this.state.weatherData} />
              <Route exact path='/' component={Home} />
              <Route path='/current-weather' render={() => <IconWidget weatherData={this.state.weatherData} fetchWeatherData={this.fetchWeatherData} />} />
              <Route path='/sunrise-report' render={() => <Sunrise weatherData={this.state.weatherData} fetchWeatherData={this.fetchWeatherData} />} />
            </div>
          </Router>
        </div>
      );
    } else {
      return (
        <h2>
          Loading...
        </h2>
      );
    }
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