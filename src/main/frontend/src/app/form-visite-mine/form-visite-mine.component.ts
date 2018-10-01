import { Component, OnInit, Input } from '@angular/core';
import { Mine } from '../shared/models/Mine';
import { Bassin } from '../shared/models/Bassin';

@Component({
  selector: 'app-form-visite-mine',
  templateUrl: './form-visite-mine.component.html',
  styleUrls: ['./form-visite-mine.component.scss']
})
export class FormVisiteMineComponent implements OnInit {

  _mine: Mine;
  bassin: Bassin;

  constructor() { }

  ngOnInit() {
  }

  get mine(): Mine {
    // transform value for display
    return this._mine;
  }

  @Input()
  set mine(m: Mine) {
    console.log('form previous mine: ', this._mine);
    console.log('form current mine: ', m);
    this._mine = m;
  }

  displayDetail(b: Bassin) {
    console.log("display visite bassin : ", b.id);
    this.bassin = b;
  }

}
