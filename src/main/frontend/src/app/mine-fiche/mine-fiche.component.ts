import { Mine } from '../shared/models/Mine';
import { Component, OnInit } from '@angular/core';
import { MineService, UtilityService, BaseService } from '../shared';
import { Bassin } from '../shared/models/Bassin';

@Component({
  selector: 'app-mine-fiche',
  templateUrl: './mine-fiche.component.html',
  styleUrls: ['./mine-fiche.component.scss']
})
export class MineFicheComponent implements OnInit {

  mine: Mine;
  localStored: boolean;
  uptodate: boolean;

  constructor(private utilityService: UtilityService, private baseService: BaseService) {
    this.utilityService.getSelectedMine().subscribe(data => {
      this.mine = data as Mine;
      console.log('refresh mine-fiche component');
      this.ngOnInit();
    },
      error => console.log(error));
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

  displayBassin(b: Bassin) {
    console.log("display", b);
    this.utilityService.selectBassin(b);
  }

  downloadData() {
    this.baseService.addMine(this.mine);
  }
}
