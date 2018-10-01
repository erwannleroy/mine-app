import { Component, OnInit, Input } from '@angular/core';
import { Bassin } from '../shared/models/Bassin';

@Component({
  selector: 'app-form-visite-bassin',
  templateUrl: './form-visite-bassin.component.html',
  styleUrls: ['./form-visite-bassin.component.scss']
})
export class FormVisiteBassinComponent implements OnInit {

  _bassin: Bassin;

  constructor() { }

  ngOnInit() {
  }

  get bassin(): Bassin {
    // transform value for display
    return this._bassin;
  }

  @Input()
  set bassin(b: Bassin) {
    console.log('previous mine: ', this._bassin);
    console.log('current mine: ', b);
    this._bassin = b;
  }

}
