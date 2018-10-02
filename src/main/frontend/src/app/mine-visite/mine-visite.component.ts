import { Component, OnInit, Input } from '@angular/core';
import { VisiteMine } from '../shared/models/VisiteMine';
import { VisiteBassin } from '../shared/models/VisiteBassin';
import { Bassin } from '../shared/models/Bassin';

@Component({
  selector: 'app-mine-visite',
  templateUrl: './mine-visite.component.html',
  styleUrls: ['./mine-visite.component.scss']
})
export class MineVisiteComponent implements OnInit {

  visiteBassin: VisiteBassin;
  _visiteMine: VisiteMine;

  constructor() {
  }

  ngOnInit() {
  }

  getBassins(): Bassin[] {
    console.log("getBassins vm : ", this._visiteMine);
    let bassins: Bassin[] = [];
    if (this._visiteMine) {
      for (let vb of this._visiteMine.visitesBassins) {
        bassins.push(vb.bassin);
      }
    }
    return bassins;
  }

  onSelectBassin(b: Bassin) {
    console.log("Sélection du bassin : ", b.nom);
    for (let vb of this._visiteMine.visitesBassins) {
      if (vb.bassin == b) {
        this.displayDetail(vb);
        break;
      }
    }
  }

  displayDetail(vb: VisiteBassin) {
    this.visiteBassin = vb;
    console.log("display visite bassin : ", vb.id);
  }

  get visiteMine(): VisiteMine {
    // transform value for display
    return this._visiteMine;
  }

  @Input()
  set visiteMine(v: VisiteMine) {
    console.log('previous visite mine: ', this._visiteMine);
    console.log('current visite mine: ', v);
    this._visiteMine = v;
  }

}
