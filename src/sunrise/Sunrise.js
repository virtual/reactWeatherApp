import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Sunrise.css';
import Giphy from '../giphy/Giphy';

export default class Sunrise extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    let sunriseTime = (this.props.weatherData.sys.sunrise);
    sunriseTime = new Date(sunriseTime * 1000);
    let minutesPadded = sunriseTime.getMinutes();
    if (minutesPadded < 10) { minutesPadded = "0" + minutesPadded; }
    let sunriseStr = (sunriseTime.getHours() + ':' + minutesPadded + ' a.m.');
    return (

      <Card>
        <CardBody>
          <CardTitle>{this.props.weatherData.name} The sun is rising {sunriseStr}</CardTitle>
          <CardTitle><Giphy desc={this.props.weatherData.weather[0].description}/></CardTitle>
          <CardSubtitle>{this.props.weatherData.weather[0].description}</CardSubtitle>
        </CardBody>
      </Card>

    );
  }
}
