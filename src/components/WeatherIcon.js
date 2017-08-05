import React, { Component } from 'react';
import '../styles/weather-icons.min.css';

export default class WeatherIcon extends Component
{
  constructor(props){
    super(props);
    // Bind this to function
    this.getIconFromWeather = this.getIconFromWeather.bind(this);
  }
  getIconFromWeather(){
    let prefix = 'wi wi-';
    //Define if it's the day or night
    if (!(this.props.id > 699 && this.props.id < 800) && !(this.props.id > 899 && this.props.id < 1000)) {
     prefix += 'night-';
    } else {
      prefix += 'dayt-';
    }
    return prefix+this.props.weather.toLowerCase();
  }
  render(){
    return (
    <i style={this.props.style} className={this.getIconFromWeather()}></i>
  )

  }
}
