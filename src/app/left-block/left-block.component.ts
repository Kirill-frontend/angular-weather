import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DegreePipe } from '../degree.pipe';
import moment from 'moment';
import { DataWeather } from '../../../types/types';
import { InputLocationComponent } from "../input-location/input-location.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-left-block',
  standalone: true,
  imports: [DegreePipe, InputLocationComponent, NgIf],
  templateUrl: './left-block.component.html',
  styleUrl: './left-block.component.css'
})


export class LeftBlockComponent {
  @Input() weather: DataWeather;
  @Output() city = new EventEmitter<string>();


  constructor() {
  }

  ngOnChanges(changes: any) {
    if (changes['weather']) {
      this.weather = changes.weather.currentValue;
    }
  }

  getDate() {
    return moment().format('h:mm - dddd, D MMMM \‘YY');
  }
  
  getCity(city: string) {
    this.city.emit(city);
  }

}
