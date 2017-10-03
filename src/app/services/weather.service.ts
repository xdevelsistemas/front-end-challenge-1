import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable'
import {AppConfig} from '../app.constants'
import {IWeather} from '../iterfaces'

@Injectable()
export class WeatherService {
  constructor (private http: Http) {
  }

  getWeatherCity (cidade: string): Observable<IWeather> {
    let strQuery = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='"${cidade}"')and u="c" &format=json`
    return this.http.get(AppConfig.apiWeather + strQuery)
      .map(res => res.json() as IWeather)
      .catch(err => {
        throw new Error(err.message)
      })
  }

  getThisCities (cities: [number]): Observable<IWeather> {
    let strQuery = `select * from weather.forecast where woeid in (${cities}) and u="c" &format=json`
    return this.http.get(AppConfig.apiWeather + strQuery)
      .map(res => res.json() as IWeather)
      .catch(err => {
        throw new Error(err.message)
      })
  }

  getCities () {
    return this.http.get('assets/cidadesbrasil.json')
      .map(res => res.json())
      .catch(err => {
        throw new Error(err.message)
      })
  }

}
