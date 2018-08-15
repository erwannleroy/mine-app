import {Mine} from '../shared/models/Mine';
import {Component, OnInit} from '@angular/core';
import {MineService, UtilityService, BaseService} from '../shared';
import {Bassin} from '../shared/models/Bassin';

@Component({
  selector: 'app-mine-fiche',
  templateUrl: './mine-fiche.component.html',
  styleUrls: ['./mine-fiche.component.css']
})
export class MineFicheComponent implements OnInit {

  mine: Mine;

  constructor(private utilityService: UtilityService, private baseService: BaseService) {
    this.utilityService.getSelectedMine().subscribe(data => {
      this.mine = data as Mine;
      console.log('refresh mine-fiche component');
    },
      error => console.log(error));
  }

  ngOnInit() {

  }

  displayBassin(b: Bassin) {
    console.log("display", b);
    this.utilityService.selectBassin(b);
  }

  downloadData() {
    this.baseService.addMine(this.mine);
  }
}
