import { Component, Inject, AfterViewChecked, ViewChild } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';

import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements AfterViewChecked {

  @ViewChild('container')
  weatherCity: any;
  constructor(
    private _sharedService: SharedService,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {
    this._sharedService.cityChanged$.subscribe(
      (data) => { this.weatherCity = data, this.goWeatherInfo() }
    );
  }
  ngAfterViewChecked() { }

  public goWeatherInfo(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#weatherInfos');
    this.pageScrollService.start(pageScrollInstance);
  };
}
