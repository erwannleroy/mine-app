import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../shared/animation';
import { Mine } from '../shared/models/Mine';

@Component({
  selector: 'app-visite',
  templateUrl: './visite.component.html',
  styleUrls: ['./visite.component.scss'],
  animations: [fadeAnimation] // register the animation
})
export class VisiteComponent implements OnInit {

  mine: Mine;
  visiteStarted: boolean;

  constructor() { }

  ngOnInit() {
  }

 

  startVisite() {
    this.visiteStarted = true;
  }

  onNotify(m:Mine):void {
    console.log("notify mine ",m);
    this.mine = m;
  }

}
