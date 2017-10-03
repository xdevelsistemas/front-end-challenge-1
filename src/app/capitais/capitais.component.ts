import {Component, OnInit, ViewEncapsulation} from '@angular/core'
import {WeatherService} from '../services/weather.service'

@Component({
  templateUrl: './capitais.component.html',
  styleUrls: ['./capitais.component.css'],
  providers: [WeatherService],
  encapsulation: ViewEncapsulation.None
})
export class CapitaisComponent implements OnInit {
  cities: object

  constructor (private weatherService: WeatherService) {
  }

  ngOnInit () {
    this.weatherService.getThisCities([455827, 455826, 455825, 455821, 455922])
      .subscribe(cities => this.cities = cities.query.results.channel)
  }

}
