import { Component, OnInit } from '@angular/core';
import {OpenWeatherModel} from '../open-weaather-data.model';
import {OpenUVModel} from '../openuv.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  title = 'Weather Padi';
  uvIndexOpenWeatherMap: OpenWeatherModel;
  uvIndexOpenUV: OpenUVModel;
  userPostion: any;



  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.findMe();
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.userPostion = position;
        this.showUVIndex(position);
        this.showUVIndexOpenUV(position);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
 /* const url = `https://api.openweathermap.org/data/2.5/forecast?id=707860&appid=
      b8899a408d83f4c7f5713167adf464d3`;*/
 showUVIndex(position) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b8899a408d83f4c7f5713167adf464d3`;
    this.httpClient.get<OpenWeatherModel>(url).subscribe(data => {
      this.uvIndexOpenWeatherMap = data;
    });
  }

  showUVIndexOpenUV(position) {
    const timestamp = new Date();
    const url2 = `https://api.openuv.io/api/v1/uv?lat=${position.coords.latitude}
      &lng=${position.coords.longitude}&dt=${timestamp.toISOString()}`;

    const headers = new HttpHeaders({
      'x-access-token': '7f358237f496bba095b9b5f4809843c5'
    });
    this.httpClient.get<OpenUVModel>(url2, {headers}).subscribe(data => {
      this.uvIndexOpenUV = data;
    });
  }

  refresh() {
    this.showUVIndex(this.userPostion);
    this.showUVIndexOpenUV(this.userPostion);
  }

}
