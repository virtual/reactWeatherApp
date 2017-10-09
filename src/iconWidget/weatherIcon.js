import React, { Component } from 'react';
import './IconWidget.css';
var FontAwesome = require('react-fontawesome');

export default class WeatherIcon extends Component {
  render () {
    console.log(this.props);
    var rainArr = ['thunderstorm with light rain', 'thunderstorm with rain', 'thunderstorm with heavy rain', 'light thunderstorm', 'thunderstorm', 'heavy thunderstorm', 'ragged thunderstorm', 'thunderstorm with light drizzle', 'thunderstorm with drizzle', 'thunderstorm with heavy drizzle', 'light intensity drizzle', 'drizzle', 'heavy intensity drizzle', 'light intensity drizzle rain', 'drizzle rain', 'heavy intensity drizzle rain', 'shower rain and drizzle', 'heavy shower rain and drizzle', 'shower drizzle', 'light rain', 'moderate rain', 'heavy intensity rain', 'very heavy rain', 'extreme rain', 'freezing rain', 'light intensity shower rain', 'shower rain', 'heavy intensity shower rain', 'ragged shower rain', 'light snow', 'snow', 'heavy snow', 'sleet', 'shower sleet', 'light rain and snow', 'rain and snow', 'light shower snow', 'shower snow', 'heavy shower snow', 'mist', 'smoke', 'haze', 'sand, dust whirls', 'fog', 'sand', 'dust', 'volcanic ash', 'squalls', 'tornado'];
    // var clearArr = ['clear sky', 'calm', 'light breeze', 'gentle breeze', 'moderate breeze', 'fresh breeze'];
    var cloudArr = ['few clouds', 'scattered clouds', 'broken clouds', 'overcast clouds', 'tornado', 'tropical storm', 'hurricane', 'cold', 'hot', 'windy', 'hail', 'strong breeze', 'high wind, near gale', 'gale', 'severe gale', 'storm', 'violent storm', 'hurricane'];
    let icon = 'sun-o';
    // check what desc is and use matching icon
    var description = this.props.desc;
    if (rainArr.indexOf(description) !== -1) {
      icon = 'umbrella';
    } else if (cloudArr.indexOf(description) !== -1) {
      icon = 'cloud';
    }
    return (
      <div className='weather-icon'>
        <FontAwesome
          name={icon}
          
        />
      </div>
    );
  }
} 