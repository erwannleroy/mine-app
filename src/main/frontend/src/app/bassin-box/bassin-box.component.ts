import { Component, OnInit, Input } from '@angular/core';
import { Bassin } from '../shared/models/Bassin';
import { BaseService } from '../shared';
import { UtilityService } from '../utility.service';
import { VisiteBassin } from '../shared/models/VisiteBassin';
import { Router } from '@angular/router';
import { VisiteMine } from '../shared/models/VisiteMine';
import { VisiteMineDAO } from '../shared/models/VisiteMineDAO';

@Component({
  selector: 'app-bassin-box',
  templateUrl: './bassin-box.component.html',
  styleUrls: ['./bassin-box.component.scss']
})
export class BassinBoxComponent implements OnInit {

  _bassin: Bassin;
  _vb: VisiteBassin;
  bassinFilled: boolean;
  style: string = 'bassin';
  bassinSelected: Bassin;
  vbSelected: VisiteBassin;

  constructor(public router: Router, private baseService: BaseService, private utilityService: UtilityService) {
  }

  ngOnInit() {
    if (this.router.url == '/visite') {
      this.utilityService.observeSelectedBassin().subscribe(data => {
        console.log("bassin box, change bassin " + data.id);
        this.bassinSelected = data;
        this.updateStyleForBassin();
      });
    }
    if (this.router.url == '/gestionbassin') {
      this.utilityService.observeSelectedVisiteBassin().subscribe(data => {
        console.log("bassin box, change bassin " + data.id);
        this.vbSelected = data;
        this.updateStyleForVisiteBassin();
      });
    }
  }




  updateStyleForVisiteBassin() {
    console.log("styleClass");
    if (this._vb) {
      if (this._vb == this.vbSelected) {
        this.style = 'bassin-selected';
        console.log("==============> updateStyle vb selected : " + this._vb.bassin.nom);
      } else {
        this.style = 'bassin';
        console.log("bassin normal : " + this._vb.bassin.id);
      }
    }
  }

  updateStyleForBassin() {
    //console.log("styleClass");
    if (this._bassin) {
      if (this._bassin == this.bassinSelected) {
        this.style = 'bassin-selected';
        //console.log("==============> updateStyle vb selected : " + this._bassin.nom);
      } else {
        this.baseService.getVisiteMine(this.utilityService.getSelectedMine().nom).then(data => {
          //console.log("Nb de visite du bassin " + this._bassin.id + " : " + data);
          if (data) {
            let vm: VisiteMineDAO = data;
            console.log("bassin already visited", vm.content, this._bassin.id.toString());
            if (vm.content.includes(this._bassin.id.toString())) {
              this.style = 'bassin-stored';
              console.log("bassin stored : " + this._bassin.id);
            }
            else {
              this.style = 'bassin';
              console.log("bassin normal : " + this._bassin.id);
            }
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
    this.updateStyleForBassin();
  }

  get vb(): VisiteBassin {
    // transform value for display
    return this._vb;
  }

  @Input()
  set vb(vb: VisiteBassin) {
    console.log('===========> BassinBoxComponent vb: ' + vb.bassin.nom);
    //console.log('previous mine: ', this._mine);
    //console.log('current mine: ', m);
    this._vb = vb;
    this.updateStyleForVisiteBassin();
  }
}
