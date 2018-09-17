import {CityService} from '../city.service';
import {City} from '../city';
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})



export class CitiesComponent implements OnInit {
  selectedCity: City;
  cities: City[] = [];



  constructor() { }

  ngOnInit() {
  }

  onSelect(city: City): void {
    this.selectedCity = city;
  }


}

/*

import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: City[];
  selectedCity: City;

  getCities(): void {
    this.cityService.getCities()
      .subscribe(cities => this.cities = cities);
  }


  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.getCities();
  }

  onSelect(city: City): void {
    this.selectedCity = city;
  }
}
*/
