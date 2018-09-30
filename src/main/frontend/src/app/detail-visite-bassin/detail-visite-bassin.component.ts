import { Component, OnInit, Input } from '@angular/core';
import { VisiteBassin } from '../shared/models/VisiteBassin';

@Component({
  selector: 'app-detail-visite-bassin',
  templateUrl: './detail-visite-bassin.component.html',
  styleUrls: ['./detail-visite-bassin.component.scss']
})
export class DetailVisiteBassinComponent implements OnInit {
  
  _vb: VisiteBassin;

  constructor() { }

  ngOnInit() {
  }


  get vb(): VisiteBassin {
    // transform value for display
    return this._vb;
  }
  
  @Input()
  set vb(vb: VisiteBassin) {
    console.log('prev value: ', this._vb);
    console.log('got vb: ', vb);
    this._vb = vb;
  }

}
