import {ModuleWithProviders} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {CapitaisComponent} from './capitais/capitais.component'
import {HomeComponent} from './home/home.component'

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'capitais', component: CapitaisComponent}
  // { path: '**', component: NotFoundComponent },
]

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes)
