import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http:HttpClient) { }


  getWeatherData(data:any) {
    const url:any = "http://localhost:3000/current"
    return this.http.post(url,data)

  }

}
