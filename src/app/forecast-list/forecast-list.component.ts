import { HttpClient } from '@angular/common/http';
import { Component, Input, SimpleChanges } from '@angular/core';
import { environment } from '../../../enviroments/enviroment';
import { DegreePipe } from "../degree.pipe";
import { CommonModule, NgFor } from '@angular/common';
import { IForecast, IForecastRequest } from '../../../types/forecast'
import { GetTimeFromStrPipe } from "../get-time-from-str.pipe";

@Component({
  selector: 'app-forecast-list',
  standalone: true,
  imports: [DegreePipe, NgFor, CommonModule, GetTimeFromStrPipe],
  templateUrl: './forecast-list.component.html',
  styleUrl: './forecast-list.component.css'
})
export class ForecastListComponent {
  @Input() coords: {lat: number, lon: number};
  forecasts: IForecast[];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<IForecastRequest>(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.coords.lat}&lon=${this.coords.lon}&appid=${environment.appid}`).subscribe(data => {
      this.forecasts = data.list
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    const {lat, lon} = changes['coords'].currentValue
    this.http.get<IForecastRequest>(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${environment.appid}`).subscribe(data => {
      this.forecasts = data.list
    })
  }

}
