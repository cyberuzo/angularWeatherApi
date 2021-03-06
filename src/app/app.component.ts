import {Component, OnInit} from '@angular/core';
import { Http, Response} from '@angular/http';
// import 'rxjs/add/operator/map';
import {OpenUVModel} from './openuv.model';
import {OpenWeatherModel} from './open-weaather-data.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Weather Padi';
  uvIndexOpenWeatherMap: OpenWeatherModel;
  uvIndexOpenUV: OpenUVModel;
  userPostion: any;
  /*
  private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
  data: any = {};*/

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

  showUVIndex(position) {
    const url = `https://api.openweathermap.org/data/2.5/uvi?appid=
      b8899a408d83f4c7f5713167adf464d3&lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
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
    this.httpClient.get<OpenUVModel>(url2, { headers }).subscribe(data => {
      this.uvIndexOpenUV = data;
    });
  }

  refresh() {
    this.showUVIndex(this.userPostion);
    this.showUVIndexOpenUV(this.userPostion);
  }

/*

  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }

  getContacts() {
    return this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })


  }
*/
}

