import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import {CITIES} from '../mock-cities';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  cities: City[] = [];
  selectedCity;
  currentCity: City = null;
  currentCityWeather;


  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    return this.cityService.getCities()
      .subscribe(cities => {
        this.cities = cities.slice(0, 5);
        const rand = Math.floor(Math.random() * 5);
        this.onSelect(this.cities[rand]);
      });
  }
  onSelect(city: City): void {
    if (this.currentCity !== city) {
      this.cityService.getWeatherOfCity(city.name).subscribe(resp => {
        this.currentCity = city;
        const response = JSON.parse(JSON.stringify(resp));
        this.selectedCity = response.location;
        this.currentCityWeather = response.current;
      });
    }
  }
}
