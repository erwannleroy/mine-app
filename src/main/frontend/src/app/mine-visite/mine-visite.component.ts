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

  displayDetail(vb: VisiteBassin) {
    console.log("display visite bassin : ", vb.id);
    this.visiteBassin = vb;
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
