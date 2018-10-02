import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mine } from '../shared/models/Mine';
import { Bassin } from '../shared/models/Bassin';


@Component({
  selector: 'app-list-bassins',
  templateUrl: './list-bassins.component.html',
  styleUrls: ['./list-bassins.component.scss']
})
export class ListBassinsComponent implements OnInit {

  _bassins: Bassin[];
  bassinSelected: Bassin;
  
  @Output() notify: EventEmitter<Bassin> = new EventEmitter<Bassin>();

  constructor() { }

  ngOnInit() {
  }

  get bassins(): Bassin[] {
    // transform value for display
    return this._bassins;
  }

  @Input()
  set bassins(bs: Bassin[]) {
    console.log('form previous bassins: ', this._bassins);
    console.log('form current bassins: ', bs);
    this._bassins = bs;
  }

  selectBassin(b: Bassin) {
    console.log("select bassin", b);
    this.bassinSelected = b;
    this.notify.emit(this.bassinSelected);
  }

}
