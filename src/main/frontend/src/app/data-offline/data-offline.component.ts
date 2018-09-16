import {Component, OnInit} from '@angular/core';
import {fadeAnimation} from '../shared/animation';
import {BaseService} from '../shared/base/base.service';
import {Mine} from '../shared/models/Mine';
import {MineDAO} from '../shared/models/MineDAO';
import {MineOffline} from '../shared/models/MineOffline';

@Component({
  selector: 'app-data-offline',
  templateUrl: './data-offline.component.html',
  styleUrls: ['./data-offline.component.css'],
  animations: [fadeAnimation] // register the animation
})
export class DataOfflineComponent implements OnInit {

  mines: Array<MineOffline> = [];
  
  constructor(private baseService: BaseService) {}

  ngOnInit() {
    this.listMines();
  }

  listMines() {
    var minesOfflines: Array<MineOffline> = [];
    var minesDAO: Array<MineDAO> = [];
    var mine: MineOffline;
    this.baseService.getMines().then(data => {
      minesDAO = data;
      for (let m of minesDAO) {
        mine = new MineOffline();
        mine.nom = m.nom;
        mine.uptodate = false;
        minesOfflines.push(mine);
      }
    });
    this.mines = minesOfflines;
  }

  update(mine:MineOffline){
    console.log("mise à jour de "+mine.nom);  
  }
  
  delete(mine:MineOffline){
    console.log("suppression de "+mine.nom);  
  }
}
