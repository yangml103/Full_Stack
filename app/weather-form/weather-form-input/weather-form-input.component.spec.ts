import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFormInputComponent } from './weather-form-input.component';

describe('WeatherFormInputComponent', () => {
  let component: WeatherFormInputComponent;
  let fixture: ComponentFixture<WeatherFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherFormInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
