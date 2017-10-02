import {Component, ViewEncapsulation} from '@angular/core'
import {AppConfig} from '../app.constants'
import {SharedService} from '../services/shared.service'
import {WeatherService} from '../services/weather.service'


interface ISuggestCity {
  query: string
}
interface IFilteredCities {
  nome: string
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [WeatherService],
  encapsulation: ViewEncapsulation.None
})

export class SearchComponent {
  filteredCities: IFilteredCities[]

  constructor (private weatherService: WeatherService, private sharedService: SharedService) {}

  suggestCity (event: ISuggestCity) {
    let query = event.query
    this.weatherService.getCities()
      .subscribe(
        cities => {
          this.filteredCities = this.filterCountry(query, cities)
        })
  }

  filterCountry (query: string, cities: IFilteredCities[]) {
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
          this.sharedService.publishData(weather)
        })
  }
}
