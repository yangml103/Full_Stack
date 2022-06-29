import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { WeatherFormComponent } from './weather-form/weather-form.component';
import { WeatherFormDataComponent } from './weather-form/weather-form-data/weather-form-data.component';
import { WeatherFormInputComponent } from './weather-form/weather-form-input/weather-form-input.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    WeatherFormComponent,
    WeatherFormDataComponent,
    WeatherFormInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
