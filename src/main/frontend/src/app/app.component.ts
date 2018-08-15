import {UtilityService, JsStoreService, MineService, BaseService} from './shared';
import {Mine} from './shared/models/Mine';
import {Bassin} from './shared/models/Bassin';
import {Component} from '@angular/core';
import { Network } from '@ngx-pwa/offline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MineService, UtilityService, JsStoreService, BaseService]
})
export class AppComponent {
  title = 'app';
  
  
  constructor( protected network: Network)  { }
  
  isOffline() : Boolean {
    console.log("online ? "+this.network.online);
    return !this.network.online;
  }


}
