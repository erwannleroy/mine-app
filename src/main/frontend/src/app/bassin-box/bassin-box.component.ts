import { Component, OnInit, Input } from '@angular/core';
import { Bassin } from '../shared/models/Bassin';
import { BaseService } from '../shared';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-bassin-box',
  templateUrl: './bassin-box.component.html',
  styleUrls: ['./bassin-box.component.scss']
})
export class BassinBoxComponent implements OnInit {

  _bassin: Bassin;
  visiteFilled: boolean;
  style: string = 'bassin';
  bassinSelected: Bassin;

  constructor(private baseService: BaseService, private utilityService: UtilityService) {
    this.utilityService.getSelectedBassin().subscribe(data => {
      this.bassinSelected = data;
      this.updateStyle();
    });
    this.initialize();
  }

  ngOnInit() {
  }

  initialize() {
    //console.log("initialize mine fiche");
    if (this._bassin) {
     /* this.baseService.existsVisiteForBassin(this._bassin).then(count => {
        //this.visiteFilled = count == 1;
        //console.log("Localement stockée ? " + this.localStored);
      });*/

    }
    this.updateStyle();
  }



  updateStyle() {
    console.log("styleClass");
    if (this._bassin) {
      if (this._bassin == this.bassinSelected) {
        this.style = 'bassin-selected';
        console.log("==============> updateStyle bassin selected : " + this._bassin.nom);
      } else {
        this.baseService.existsMine(this._bassin.nom).then(data => {
          if (data == 1) {
            this.style = 'bassin-visited';
            console.log("mine stored : " + this._bassin.nom);
          } else {
            this.style = 'bassin';
            console.log("mine normal : " + this._bassin.nom);
          }
        });
      }
    }
  }

  get bassin(): Bassin {
    // transform value for display
    return this._bassin;
  }

  @Input()
  set bassin(b: Bassin) {
    console.log('===========> BassinBoxComponent bassin: ' + b.nom);
    //console.log('previous mine: ', this._mine);
    //console.log('current mine: ', m);
    this._bassin = b;
    this.initialize();
  }

}
