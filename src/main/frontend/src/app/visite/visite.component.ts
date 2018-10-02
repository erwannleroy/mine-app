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

  constructor(private baseService: BaseService) { }

  ngOnInit() {
  }



  startVisite() {
    this.visiteStarted = true;
    let vm: VisiteMine = new VisiteMine();
    this.baseService.addVisiteMine(this.mine, vm);
  }

  onNotify(m: Mine): void {
    console.log("notify mine ", m);
    this.mine = m;
  }

}
