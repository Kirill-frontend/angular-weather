import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftBlockComponent } from "./left-block/left-block.component";
import { RightBlockComponent } from "./right-block/right-block.component";
import { DataWeather } from '../../types/types';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/enviroment';
import { CommonModule } from '@angular/common';
import { ICity } from '../../types/city';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeftBlockComponent, RightBlockComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [],
})

export class AppComponent {

  title = 'angular-course-2';
  data!: DataWeather;
  @Output() outCity = new EventEmitter<string>();



  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getUserLocation();
  }

  changeCity(city: string) {
    this.http.get<ICity[]>(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${environment.appid}`).subscribe((data) => {
      const {lat, lon} = data[0]
      this.fetchWeather({ latitude: lat, longitude: lon})
    })

  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        this.fetchWeather(coords)
      });
    } else {
      console.log("User not allow")
    }
  }

  fetchWeather(coords: { latitude: number, longitude: number}) {
    this.http.get<DataWeather>(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${environment.appid}`).subscribe((data: DataWeather) => { this.data = data })
  }

}