import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import SearchBar from './searchBar/SearchBar';
import './iconWidget/IconWidget.css';
import NavBar from './navBar/NavBar.js';
import IconWidget from './iconWidget/IconWidget';
import Sunrise from './sunrise/Sunrise';
var FontAwesome = require('react-fontawesome');

export default class WeatherComponent extends React.Component {
  constructor () {
    super();
    this.state = {
      initialized: false
    };
    this.updateClick = this.updateClick.bind(this);
  }

  updateClick (city) {
    console.log(city);
    this.setState({
      initialized: false
    });
    console.log('uc!', this);
    // wrap your
    // logic fetching all the weather api data into a method.
    var jeanineapi = 'e6ea27b1c535e375f2f3ab9cfeab7df6';
    var markapi = '3d6b633422451393e953dab4052ea0e4';
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + markapi;
    fetch(url).then(function (response) {
      return response.json();
    }).then((weatherObj) => {
      if (weatherObj !== undefined) {
      // console.log(weatherObj)
        this.weatherData = weatherObj;
        this.setState({
          initialized: true
        });
      } else {
        this.updateClick();
      }
    });
  }
  componentDidMount () {
    this.updateClick('Bozeman');
  }

  render () {
    let currentLocation = this.props.location.pathname;
    console.log(currentLocation);

    if (this.state.initialized) {
      if (currentLocation === '/current-weather') {
        return (
          <div>
            <h1>Weather</h1>
            <IconWidget weatherData={this.weatherData} />
            <SearchBar city={this.weatherData.name} updateClick={this.updateClick} />

          </div>
        );
      } else if (currentLocation === '/sunrise-report') {
        return (
          <div>
            <h1>Sunrise!</h1>
            <Sunrise weatherData={this.weatherData} />
            <SearchBar city={this.weatherData.name} updateClick={this.updateClick} />



          </div>
        );
      } else {
        return (
          <div>Invalid request</div>
        );
      }
    } else {
      return (
        <h2>
          Loading...
        </h2>
      );
    }
  }
}
