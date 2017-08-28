import {Component, ViewEncapsulation} from '@angular/core'
import {AppConfig} from '../app.constants'
import {SharedService} from '../services/shared.service'
import {WeatherService} from '../services/weather.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [WeatherService],
  encapsulation: ViewEncapsulation.None
})

export class SearchComponent {
  cities: any[]
  filteredCities: any[]

  constructor (private weatherService: WeatherService, private sharedService: SharedService) {}

  suggestCity (event: any) {
    let query = event.query
    this.weatherService.getCities()
      .subscribe(
        cities => {
          this.filteredCities = this.filterCountry(query, cities)
        })
  }

  filterCountry (query: string, cities: any[]): any[] {
    let filtered: any[] = []
    for (let i = 0; i < cities.length; i++) {
      let city = cities[i]
      if (AppConfig.stripAccent(city.nome).toLowerCase().indexOf(AppConfig.stripAccent(query).toLowerCase()) === 0) {
        filtered.push(city)
      }
    }
    return filtered
  }

  getWeatherCity (query: string) {
    this.weatherService.getWeatherCity(query)
      .subscribe(
        weather => {
          console.log(weather)
          this.sharedService.publishData(weather)
        })
  }
}
