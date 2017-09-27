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
  filteredCities: any[]

  constructor (private weatherService: WeatherService, private sharedService: SharedService) {}

  suggestCity (event: any) {
    let query = event.query
    this.weatherService.getCities()
      .subscribe(
        cidades => {
          this.filteredCities = this.filterCountry(query, cidades)
        })
  }

  filterCountry (query: string, cidades: any) {
    let filtered: any[] = []
    for (let i = 0; i < cidades.length; i++) {
      let city = cidades[i]
      if (AppConfig.stripAccent(city.nome).toLowerCase().indexOf(AppConfig.stripAccent(query).toLowerCase()) === 0) {
        filtered.push(city)
      }
    }
    return filtered
  }

  getWeatherCity (cidade: any) {
    let nome = cidade.nome
    this.weatherService.getWeatherCity(nome)
      .subscribe(
        weather => {
          console.log(weather)
          this.sharedService.publishData(weather)
        })
  }
}
