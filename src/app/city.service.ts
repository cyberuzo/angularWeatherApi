import { Injectable } from '@angular/core';
import { City } from './city';
import { CITIES } from './mock-cities';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

/*const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};*/



@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(

    private messageService: MessageService,
    private httpClient: HttpClient) { }
/*
  private citiesUrl = 'api/cities';  // URL to web api

  /!** Log a CityService message with the MessageService *!/
  private log(message: string) {
    this.messageService.add('CityService: ' + message);
  }*/

  /** GET cities from the server */
  getCities (): Observable<City[]> {
    // TODO: send the message _after_ fetching the cities
    this.messageService.add('CityService: fetched cities');
    return of(CITIES);
  }
  public getWeatherOfCity(city: string) {
    const url = 'http://api.apixu.com/v1/current.json?key=976e53af63324247aac103735181009&q=' + city;
    console.log(url);
    return this.httpClient.get(url);
  }


  /** GET city by id. Will 404 if id not found */
  getCity(id: number): Observable<City> {
    // TODO: send the message _after_ fetching the city
    this.messageService.add(`CityService: fetched city id=${id}`);
    return of(CITIES.find(city => city.id === id));
  }
}
