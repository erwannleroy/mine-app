import { environment } from '../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MineListComponent } from './mine-list/mine-list.component';
import { MineMenuComponent } from './mine-menu/mine-menu.component';
import { MineFormComponent } from './mine-form/mine-form.component';
import { GlobalSearchFormComponent } from './global-search-form/global-search-form.component';
import { FormsModule } from '@angular/forms';
import { MineFicheComponent } from './mine-fiche/mine-fiche.component';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { MineStoreComponent } from './mine-store/mine-store.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { routingModule } from './/app-routing.module';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionBassinComponent } from './gestion-bassin/gestion-bassin.component';
import { VisiteComponent } from './visite/visite.component';
import { DataOfflineComponent } from './data-offline/data-offline.component';
import { MenuComponent } from './menu/menu.component';
import { CustomReuseStrategy } from './shared/reuse/CustomReuseStrategy';
import { MineVisiteComponent } from './mine-visite/mine-visite.component';
import { DetailVisiteBassinComponent } from './detail-visite-bassin/detail-visite-bassin.component';
import { FormVisiteMineComponent } from './form-visite-mine/form-visite-mine.component';


@NgModule({
  declarations: [
    AppComponent,
    MineListComponent,
    MineMenuComponent,
    MineFormComponent,
    GlobalSearchFormComponent,
    MineFicheComponent,
    MineStoreComponent,
    LoginComponent,
    GestionBassinComponent,
    VisiteComponent,
    DataOfflineComponent,
    MenuComponent,
    MineVisiteComponent,
    DetailVisiteBassinComponent,
    FormVisiteMineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    routingModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }

