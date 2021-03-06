import { Component, OnInit, APP_INITIALIZER } from '@angular/core';
import { fadeAnimation } from '../shared/animation';
import { Mine } from '../shared/models/Mine';
import { VisiteMine } from '../shared/models/VisiteMine';
import { BaseService } from '../shared';
import { UtilityService } from '../utility.service';
import { VisiteMineDAO } from '../shared/models/VisiteMineDAO';

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
    this.utilityService.observeSelectedMine().subscribe(data => {
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
      this.baseService.getVisiteMine(this.mine.nom).then(data => {
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
    this.baseService.getMine(this.mine.nom).then(data => {
      if (!data) {
        this.baseService.addMine(this.mine);
      }
    })
    this.baseService.addVisiteMine(this.mine, vm);
    this.utilityService.setSelectedVisiteMine(vm);
  }

  continueVisite() {
    this.visiteStarted = true;
    this.baseService.getVisiteMine(this.mine.nom).then(data => {
      if (data) {
        let vmDAO: VisiteMineDAO = data;
        let vm = this.baseService.convertVisiteMine(vmDAO);
        this.utilityService.setSelectedVisiteMine(vm);
      }
    });

  }



}
