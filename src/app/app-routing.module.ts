import { NgModule } from '@angular/core';
import { CitiesComponent } from './cities/cities.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CityDetailComponent } from './city-detail/city-detail.component';


import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {WeatherComponent} from './weather/weather.component';
import {MainComponent} from './main/main.component';
import {DisplayComponent} from './display/display.component';

const routes: Routes = [
  { path: 'cities', component: CitiesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'detail/:id', component: CityDetailComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'weatherdetail', component: WeatherComponent },
  {path: 'main', component: MainComponent },
  {path: 'display', component: DisplayComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
