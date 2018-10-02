import { Component, OnInit, Input } from '@angular/core';
import { Bassin } from '../shared/models/Bassin';
import { VisiteBassin } from '../shared/models/VisiteBassin';
import { Mine } from '../shared/models/Mine';
import { BaseService } from '../shared';
import { VisiteMine } from '../shared/models/VisiteMine';

@Component({
  selector: 'app-form-visite-bassin',
  templateUrl: './form-visite-bassin.component.html',
  styleUrls: ['./form-visite-bassin.component.scss']
})
export class FormVisiteBassinComponent implements OnInit {

  _bassin: Bassin;
  _mine: Mine;
  _enEau: boolean;

  constructor(private baseService: BaseService) {
  }

  ngOnInit() {
    let vms: Array<VisiteMine> = this.baseService.selectVisiteMine(this.mine);
    if (vms.length == 1) {
      let vm: VisiteMine = vms[0];

      let trouve: boolean = false;
      let i: number = 0;
      let vb: VisiteBassin;

      while (!trouve && i < vm.visitesBassins.length) {
        vb = vm.visitesBassins[i];
        trouve = vb.bassin == this.bassin;
      }

      if (!trouve) {
        this._enEau = false;
      } else {
        this._enEau = vb.enEau;
      }

    }
  }

  get bassin(): Bassin {
    // transform value for display
    return this._bassin;
  }

  @Input()
  set bassin(b: Bassin) {
    console.log('previous bassin: ', this._bassin);
    console.log('current bassin: ', b);
    this._bassin = b;
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

  get enEau() {
    return this._enEau;
  }
  set enEau(b: boolean) {
    console.log("set en eau");
    this._enEau = b;
    this.updateModel();
  }

  updateModel() {
    console.log("avant selectVisiteMine");
    let vms: Array<VisiteMine> = this.baseService.selectVisiteMine(this.mine);
    console.log("après selectVisiteMine");
    if (vms.length == 1) {
      let vm: VisiteMine = vms[0];

      let trouve: boolean = false;
      let i: number = 0;
      let vb: VisiteBassin;

      while (!trouve && i < vm.visitesBassins.length) {
        vb = vm.visitesBassins[i];
        trouve = vb.bassin == this.bassin;
      }

      if (!trouve) {
        vb = new VisiteBassin();
        vb.bassin = this.bassin;
        vm.visitesBassins.push(vb);
      }

      vb.enEau = this.enEau;

      this.baseService.updateVisiteMine(this.mine, vm);
    }

    else {
      console.log("oups ...");
    }
  }

}
