import {DOCUMENT} from '@angular/common'
import {Component, Inject, ViewChild} from '@angular/core'
import {PageScrollInstance, PageScrollService} from 'ng2-page-scroll'

import {SharedService} from '../services/shared.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent {

  @ViewChild('container')
  weatherCity: any

  constructor (private sharedService: SharedService,
              private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any) {
    this.sharedService.cityChanged$.subscribe(
      (data) => {
        this.weatherCity = data, this.goWeatherInfo()
      }
    )
  }

  public goWeatherInfo (): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#weatherInfos')
    this.pageScrollService.start(pageScrollInstance)
  }
}
