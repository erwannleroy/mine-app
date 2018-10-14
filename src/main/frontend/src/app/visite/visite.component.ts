import { Component, OnInit, APP_INITIALIZER } from '@angular/core';
import { fadeAnimation } from '../shared/animation';
import { Mine } from '../shared/models/Mine';
import { VisiteMine } from '../shared/models/VisiteMine';
import { BaseService } from '../shared';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-visite',
  templateUrl: './visite.component.html',
  styleUrls: ['./visite.component.scss'],
  animations: [fadeAnimation] // register the animation
})
export class VisiteComponent implements OnInit {

  mine: Mine;
  visiteStarted: boolean;
  visiteExist: boolean;

  constructor(private baseService: BaseService, private utilityService: UtilityService) {
    this.utilityService.getSelectedMine().subscribe(data => {
      this.mine = data;
      this.initialize();
    });
  }

  ngOnInit() {
  }

  initialize() {
    if (this.mine) {
      this.visiteStarted = false;
      this.visiteExist = false
      this.baseService.existsVisiteMine(m).then(data => {
        if (data) {
          this.visiteExist = true;
        }
      });
    }
  }

  startVisite() {
    //console.log("startVisite");
    this.visiteStarted = true;
    let vm: VisiteMine = new VisiteMine();
    vm.nomMine = this.mine.nom;
    this.baseService.existsMine(this.mine.nom).then(data => {
      if (!data) {
        this.baseService.addMine(this.mine);
      }
    })
    this.baseService.addVisiteMine(this.mine, vm);
  }

  continueVisite() {
    this.visiteStarted = true;
  }



}
