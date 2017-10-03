import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {BrowserModule} from '@angular/platform-browser'
import {Ng2PageScrollModule} from 'ng2-page-scroll'
import {AutoCompleteModule} from 'primeng/primeng'
import {MessagesModule} from 'primeng/primeng'
import {DataTableModule} from 'primeng/primeng'
import {SharedService} from './services/shared.service'

import {AppComponent} from './app.component'
import {appRouting} from './app.routing'
import {CapitaisComponent} from './capitais/capitais.component'
import {HomeComponent} from './home/home.component'
import {SearchComponent} from './search/search.component'
import {WeatherComponent} from './weather/weather.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CapitaisComponent,
    SearchComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    HttpModule,
    FormsModule,
    AutoCompleteModule,
    MessagesModule,
    Ng2PageScrollModule,
    DataTableModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
