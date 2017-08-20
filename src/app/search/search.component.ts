import { Component, ViewEncapsulation } from '@angular/core';

import { Configuration } from '../app.constants'
import { WeatherService } from '../services/weather.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [WeatherService],
  encapsulation: ViewEncapsulation.None
})

export class SearchComponent {
  cities: any[];
  filteredCities: any[];

  constructor(
    private weatherService: WeatherService,
    private _sharedService: SharedService,
  ) { }

  suggestCity(event: any) {
    let query = event.query;
    this.weatherService.getCities().then(cities => {
      this.filteredCities = this.filterCountry(query, cities);
    });
  }

  filterCountry(query: string, cities: any[]): any[] {
    let filtered: any[] = [];
    for (let i = 0; i < cities.length; i++) {
      let city = cities[i];
      if (Configuration.stripAccent(city.nome).toLowerCase().indexOf(Configuration.stripAccent(query).toLowerCase()) == 0) {
        filtered.push(city);
      }
    }
    return filtered;
  }

  getWeatherCity(query: string) {
    this.weatherService.getWeatherCity(query).then(weather => {
      this._sharedService.publishData(weather);
    })
  }
}
