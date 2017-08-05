import React, { Component } from 'react';
import axios from 'axios';
import WeatherIcon from './components/WeatherIcon.js';

class App extends Component
{
  constructor(props) {
    super(props);
    //Set info about Open Weather
    this.APIKEY = '';
    this.APIURL = props.apikey;
     this.state = {weather:'',city:'Loading',temp:0};
     this.getWeatherData = this.getWeatherData.bind(this);
  }
  componentDidMount(){
    // Get location if it's actived on host (HTML 5)
      if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(this.getWeatherData);
     }
  }
  getWeatherData(position){
    let self = this;
    let apiUrl = this.APIURL;
    let apiKey = this.APIKEY;
    axios.get(apiUrl+'?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&units=metric&lang=fr&APPID='+apiKey)
    .then(function (response) {
      let data = response.data;
     self.setState(
       {
         city: data.name,
         temp:data.main.temp,
         id: data.weather[0].id,
         weather:data.weather[0].main,
         description: data.weather[0].description
       }
     );
    });
  }
  render() {
    return (
      <div id="reactweather" style={{'background-color':'#304860','width':'175px','border-radius':'5px','padding':'8px 8px 8px 8px'}}>
      <div style={{'color':'red','font-size':'32px'}}>
      <div><WeatherIcon weather={this.state.weather} id={this.state.id} style={{'margin-right':'10px'}} />
      {Math.round(this.state.temp)} <i className="wi wi-celsius"></i></div>
      </div>
      <div>{this.state.description}</div>
      <span>{this.state.city}</span>
      </div>
    );
  }
}

export default App;
