import { Mine } from '../shared/models/Mine';
import { Component, OnInit, Input } from '@angular/core';
import { MineService, BaseService } from '../shared';
import { Bassin } from '../shared/models/Bassin';
import { VisiteMine } from '../shared/models/VisiteMine';

@Component({
  selector: 'app-mine-fiche',
  templateUrl: './mine-fiche.component.html',
  styleUrls: ['./mine-fiche.component.scss']
})
export class MineFicheComponent implements OnInit {

  _mine: Mine;
  localStored: boolean;
  uptodate: boolean;
  currentVisite: VisiteMine;

  constructor(private baseService: BaseService) {
  }

  ngOnInit() {
    console.log("init mine fiche");
    this.baseService.existsMine(this.mine.nom).then(count => {
      this.localStored = count == 1;
      console.log("Localement stockée ? " + this.localStored);
    });
    if (this.localStored) {
      this.uptodate = true;
      var success: boolean = this.baseService.updateMine(this.mine);
      this.uptodate = success;
      console.log("A jour ? " + this.uptodate);
    }
  }

  get mine(): Mine {
    // transform value for display
    return this._mine;
  }

  @Input()
  set mine(m: Mine) {
    console.log('previous mine: ', this._mine);
    console.log('current mine: ', m);
    this._mine = m;
  }

  showHideDetail(v: VisiteMine) {
    console.log("display visite", v);
    if (this.currentVisite == v) {
      this.currentVisite = null;
    } else {
      this.currentVisite = v;
    }
  }

  downloadData() {
    this.baseService.addMine(this.mine);
    this.ngOnInit();
  }
}
