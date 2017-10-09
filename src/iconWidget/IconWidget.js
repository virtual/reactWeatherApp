import React, { Component } from 'react';
import { Card, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import './IconWidget.css';
import WeatherIcon from './weatherIcon';
import SearchBar from '../searchBar/SearchBar';

class IconWidget extends Component {
  render () {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{this.props.weatherData.name}</CardTitle>
            <CardTitle>{this.props.weatherData.main.temp}&deg;F</CardTitle>
            <CardSubtitle>{this.props.weatherData.weather[0].description}</CardSubtitle>
            <WeatherIcon desc={this.props.weatherData.weather[0].description} />
          </CardBody>
        </Card>
        <SearchBar fetchWeatherData={this.props.fetchWeatherData} />
      </div>
    );
  }
}
export default IconWidget;
