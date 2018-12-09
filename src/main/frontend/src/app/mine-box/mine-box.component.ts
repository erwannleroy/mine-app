import { Component, OnInit, Input } from '@angular/core';
import { Mine } from '../shared/models/Mine';
import { BaseService } from '../shared';
import { updateStyleProp } from '@angular/core/src/render3/styling';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-mine-box',
  templateUrl: './mine-box.component.html',
  styleUrls: ['./mine-box.component.scss']
})
export class MineBoxComponent implements OnInit {

  _mine: Mine;
  localStored: boolean;
  uptodate: boolean;
  style: string = 'mine';
  mineSelected: Mine;

  constructor(private baseService: BaseService, private utilityService: UtilityService) {
    this.utilityService.observeSelectedMine().subscribe(data => {
      console.log("Mine box : " + data.nom);
      this.mineSelected = data;
      this.updateStyle();
    });
    this.initialize();
  }

  ngOnInit() {
  }

  initialize() {
    //console.log("initialize mine fiche");
    if (this.mine) {
      // this.baseService.existsMine(this.mine.nom).then(count => {
      //   this.localStored = count == 1;
      //   //console.log("Localement stockée ? " + this.localStored);
      // });
      // if (this.localStored) {
      //   this.uptodate = true;
      //   var success: boolean = this.baseService.updateMine(this.mine);
      //   this.uptodate = success;
      //   //console.log("A jour ? " + this.uptodate);
      // }
    }
    this.updateStyle();
  }

  updateStyle() {
    console.log("styleClass");
    if (this._mine) {
      if (this._mine == this.mineSelected) {
        this.style = 'mine-selected';
        console.log("==============> updateStyle mine selected : " + this._mine.nom);
      } else {
        // this.baseService.existsMine(this._mine.nom).then(data => {
        //   if (data == 1) {
        //     this.style = 'mine-stored';
        //     console.log("mine stored : " + this._mine.nom);
        //   } else {
            this.style = 'mine';
            console.log("mine normal : " + this._mine.nom);
          }
        
        // );
      
    }
  }

  get mine(): Mine {
    // transform value for display
    return this._mine;
  }

  @Input()
  set mine(m: Mine) {
    console.log('===========> MineBoxComponent mine: ' + m.nom);
    //console.log('previous mine: ', this._mine);
    //console.log('current mine: ', m);
    this._mine = m;
    this.initialize();
  }

}
