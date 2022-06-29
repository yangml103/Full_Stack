import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-weather-form-data',
  templateUrl: './weather-form-data.component.html',
  styleUrls: ['./weather-form-data.component.css']
})
export class WeatherFormDataComponent implements OnInit {

  @Input() weatherData: any;

  ngOnInit(): void {
    this.weatherData;
  }

}
