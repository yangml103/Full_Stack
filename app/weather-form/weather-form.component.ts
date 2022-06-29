import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent implements OnInit {

  weatherData:any

  constructor() { }

  ngOnInit(): void {
  }

  setWeatherData(data:any) {
    this.weatherData = data
  }

}
