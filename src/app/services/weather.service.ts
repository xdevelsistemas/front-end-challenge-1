import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import {AppConfig} from '../app.constants'

@Injectable()
export class WeatherService {
  constructor (private http: Http) {}

  getWeatherCity (objCity: any) {
    let city = objCity.nome
    let strQuery = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='` + city + `')and u="c" &format=json`
    return this.http.get(AppConfig.apiWeather + strQuery)
      .map(res => res.json().query.results.channel)
      .catch(err => {
        throw new Error(err.message)
      })
  }

  getThisCities () {
    let cities = [455827, 455826, 455825, 455821, 455922]
    let strQuery = `select * from weather.forecast where woeid in (` + cities + `) and u="c" &format=json`
    return this.http.get(AppConfig.apiWeather + strQuery)
      .map(res => res.json())
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
