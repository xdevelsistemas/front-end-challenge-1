import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getWeatherCity(objCity: any) {
    let city = objCity.nome;
    let strQuery = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='` + city + `')and u="c" &format=json`;
    return this.http.get('https://query.yahooapis.com/v1/public/yql?q=' + strQuery)
      .toPromise()
      .then(res => <any>res.json())
      .then(data => { return data['query']['results']['channel']; });
  }

  getThisCities() {
    let cities = [455827, 455826, 455825, 455821, 455922];
    let strQuery = `select * from weather.forecast where woeid in (` + cities + `) and u="c" &format=json`;
    return this.http.get('https://query.yahooapis.com/v1/public/yql?q=' + strQuery)
      .toPromise()
      .then(res => <any>res.json())
      .then(data => { return data['query']['results']['channel']; });
  }

  getCities() {
    return this.http.get('assets/cidadesbrasil.json')
      .toPromise()
      .then(res => <any[]>res.json())
      .then(data => { return data; });
  }

}
