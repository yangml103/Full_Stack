import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {WeatherService} from "../weather.service";

@Component({
  selector: 'app-weather-form-input',
  templateUrl: './weather-form-input.component.html',
  styleUrls: ['./weather-form-input.component.css']
})
export class WeatherFormInputComponent implements OnInit {

  @Output() apiData = new EventEmitter()
 // city: string = "Boston";
  //units: string = "imperial";
//  cityControl2: FormControl = new FormControl('boston', Validators.required);
//  unitsControl2: FormControl = new FormControl('imperial');

  weatherFormGroup = this.form.group({
    cityControl: ['', Validators.required],
    //unitsControl: ['', Validators.required],
    subform: this.form.group({
      detail: ['']
    })
  })


  constructor(private form: FormBuilder, private weatherService: WeatherService) {}


  ngOnInit(): void {

  }

  submit() {
    this.apiData.emit(this.weatherFormGroup.value)
    const data:any = {
      city:this.weatherFormGroup.value.cityControl,
      //units:this.weatherFormGroup.value.unitsControl
    }
    this.weatherService.getWeatherData(data).subscribe()
  }





}
