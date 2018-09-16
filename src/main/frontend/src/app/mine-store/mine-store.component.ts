import {Mine} from '../shared/models/Mine';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mine-store',
  templateUrl: './mine-store.component.html',
  styleUrls: ['./mine-store.component.scss']
})
export class MineStoreComponent implements OnInit {

  mines: Mine[];

  constructor() {}

  ngOnInit() {
  }



}
