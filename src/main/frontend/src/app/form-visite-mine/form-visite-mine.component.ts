import { Component, OnInit, Input } from '@angular/core';
import { Mine } from '../shared/models/Mine';

@Component({
  selector: 'app-form-visite-mine',
  templateUrl: './form-visite-mine.component.html',
  styleUrls: ['./form-visite-mine.component.scss']
})
export class FormVisiteMineComponent implements OnInit {

  _mine: Mine;

  constructor() { }

  ngOnInit() {
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

}
