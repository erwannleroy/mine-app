import { Mine } from '../shared/models/Mine';
import { Component, OnInit, Input } from '@angular/core';
import { MineService, BaseService } from '../shared';
import { Bassin } from '../shared/models/Bassin';
import { VisiteMine } from '../shared/models/VisiteMine';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-mine-fiche',
  templateUrl: './mine-fiche.component.html',
  styleUrls: ['./mine-fiche.component.scss']
})
export class MineFicheComponent implements OnInit {

  mine: Mine;
  localStored: boolean;
  uptodate: boolean;
  currentVisite: VisiteMine;

  constructor(private baseService: BaseService, private utilityService: UtilityService) {
  }

  ngOnInit() {
    this.utilityService.observeSelectedMine().subscribe(data => {
      this.mine = data;
      this.initialize();
    },
      error => console.log(error));
    this.initialize();
  }

  initialize() {
    //console.log("initialize mine fiche");
    if (this.mine) {
      this.baseService.existsMine(this.mine.nom).then(count => {
        this.localStored = count == 1;
        //console.log("Localement stockée ? " + this.localStored);
      });
      if (this.localStored) {
        this.uptodate = true;
        var success: boolean = this.baseService.updateMine(this.mine);
        this.uptodate = success;
        //console.log("A jour ? " + this.uptodate);
      }
    }
  }

  selectVisiteMine(v: VisiteMine) {
    //console.log("display visite", v);
    if (this.currentVisite == v) {
      this.currentVisite = null;
    } else {
      this.currentVisite = v;
    }
    this.utilityService.setVisiteMine(this.currentVisite);
  }

  downloadData() {
    this.baseService.addMine(this.mine);
    this.initialize();
  }
}
