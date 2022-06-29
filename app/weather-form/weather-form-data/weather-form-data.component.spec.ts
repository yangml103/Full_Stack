import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFormDataComponent } from './weather-form-data.component';

describe('WeatherFormDataComponent', () => {
  let component: WeatherFormDataComponent;
  let fixture: ComponentFixture<WeatherFormDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherFormDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
