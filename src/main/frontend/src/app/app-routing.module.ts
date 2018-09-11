import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {MineFicheComponent} from './mine-fiche/mine-fiche.component';
import {MineFindComponent} from './mine-find/mine-find.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "minefind", component: MineFindComponent}
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

