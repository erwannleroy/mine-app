import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mine } from '../shared/models/Mine';
import { Bassin } from '../shared/models/Bassin';
import { UtilityService } from '../utility.service';
import { VisiteBassin } from '../shared/models/VisiteBassin';
import { ViewState } from '@angular/core/src/view';


@Component({
  selector: 'app-list-bassins-visites',
  templateUrl: './list-bassins-visites.component.html',
  styleUrls: ['./list-bassins-visites.component.scss']
})
export class ListBassinsVisitesComponent implements OnInit {

  @Input()
  bassinsVisites: VisiteBassin[];

  bassinVisiteSelected: VisiteBassin;

  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
  }

  selectBassinVisite(vb: VisiteBassin) {
    console.log("select visite bassin", vb);
    this.bassinVisiteSelected = vb;
    this.utilityService.setSelectedVisiteBassin(vb);
    this.utilityService.setSelectedBassin(vb.bassin);
  }

}
