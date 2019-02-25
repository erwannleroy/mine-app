import {JsStoreService, MineService, BaseService} from './shared';
import {fadeAnimation} from './shared/animation';
import {Mine} from './shared/models/Mine';
import {Bassin} from './shared/models/Bassin';
import {Component} from '@angular/core';
import {Network} from '@ngx-pwa/offline';
import { UtilityService } from './utility.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MineService, JsStoreService, BaseService],
  animations: [fadeAnimation] // register the animation
})
export class AppComponent {
  title = 'app';
  text: String;

  constructor(protected network: Network, private utilityService: UtilityService) {
    this.utilityService.observeLog().subscribe(data => {
      console.log("recu log "+data);
      this.text = this.text +"\n"+data;
    });
  }

  effacer() {
    this.text = "";
    this.utilityService.log("");
  }

  isOffline(): Boolean {
//    //console.log("online ? " + this.network.online);
    return !this.network.online;
  }


}
