import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../shared/animation';
import { Mine } from '../shared/models/Mine';
import { VisiteMine } from '../shared/models/VisiteMine';
import { BaseService } from '../shared';

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

  constructor(private baseService: BaseService) { }

  ngOnInit() {
  }



  startVisite() {
    console.log("startVisite");
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

  selectMine(m: Mine): void {
    console.log("notify mine ", m);
    this.visiteStarted = false;
    this.visiteExist = false;
    this.mine = m;
    this.baseService.existsVisiteMine(m).then(data => {
      if (data) {
        this.visiteExist = true;
      }
    });
  }

}
