import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CapitaisComponent } from './capitais/capitais.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'capitais', component: CapitaisComponent },
  // { path: '**', component: NotFoundComponent },
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
