import { environment } from '../environments/environment.prod';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {MineListComponent} from './mine-list/mine-list.component';
import {MineMenuComponent} from './mine-menu/mine-menu.component';
import {MineFormComponent} from './mine-form/mine-form.component';
import {ReleveBassinFormComponent} from './releve-bassin-form/releve-bassin-form.component';
import {GlobalSearchFormComponent} from './global-search-form/global-search-form.component';
import {FormsModule} from '@angular/forms';
import {MineFicheComponent} from './mine-fiche/mine-fiche.component';
import {BassinHistoriqueComponent} from './bassin-historique/bassin-historique.component';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {MineStoreComponent} from './mine-store/mine-store.component';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    MineListComponent,
    MineMenuComponent,
    MineFormComponent,
    ReleveBassinFormComponent,
    GlobalSearchFormComponent,
    MineFicheComponent,
    BassinHistoriqueComponent,
    MineStoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
