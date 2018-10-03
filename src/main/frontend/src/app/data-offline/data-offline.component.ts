import {Component, OnInit} from '@angular/core';
import {fadeAnimation} from '../shared/animation';
import {BaseService} from '../shared/base/base.service';
import {Mine} from '../shared/models/Mine';
import {MineDAO} from '../shared/models/MineDAO';
import {MineOffline} from '../shared/models/MineOffline';

@Component({
  selector: 'app-data-offline',
  templateUrl: './data-offline.component.html',
  styleUrls: ['./data-offline.component.scss'],
  animations: [fadeAnimation] // register the animation
})
export class DataOfflineComponent implements OnInit {

  mines: Array<Mine> = [];

  constructor(private baseService: BaseService) {}

  ngOnInit() {
    this.listMines();
  }

  listMines() {
    this.baseService.getMines().then(data =>  {
      let minesDAO: Array<MineDAO> = data;
      this.mines = this.baseService.convertMines(minesDAO);
    });
  }

  update(mine:Mine){
    console.log("mise à jour de "+mine.nom);
  }

  delete(mine:Mine){
    console.log("suppression de "+mine.nom);
    this.baseService.deleteMine(mine.nom);
    this.ngOnInit();
  }
}
