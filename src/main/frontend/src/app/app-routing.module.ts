import {AppComponent} from './app.component';
import { DataOfflineComponent } from './data-offline/data-offline.component';
import { GestionBassinComponent } from './gestion-bassin/gestion-bassin.component';
import {LoginComponent} from './login/login.component';
import {MineFicheComponent} from './mine-fiche/mine-fiche.component';
import { VisiteComponent } from './visite/visite.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "gestionbassin", component: GestionBassinComponent},
  {path: "visite", component: VisiteComponent},
  {path: "dataoffline", component: DataOfflineComponent}
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

