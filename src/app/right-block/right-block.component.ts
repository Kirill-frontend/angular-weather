import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DegreePipe } from '../degree.pipe';
import { DataWeather } from '../../../types/types';
import { InputLocationComponent } from "../input-location/input-location.component";
import { ForecastListComponent } from "../forecast-list/forecast-list.component";
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-right-block',
  standalone: true,
  imports: [DegreePipe, InputLocationComponent, ForecastListComponent, NgIf],
  templateUrl: './right-block.component.html',
  styleUrl: './right-block.component.css'
})
export class RightBlockComponent {
  @Input() weather: DataWeather 
  @Output() city = new EventEmitter<string>();


  ngOnChanges(changes: any) {
    if (changes['weather']) {
      this.weather = changes.weather.currentValue;
    }
  }

  getCity(city: string) {
    this.city.emit(city);
  }

}
