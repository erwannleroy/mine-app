import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../shared/animation';

@Component({
  selector: 'app-visite',
  templateUrl: './visite.component.html',
  styleUrls: ['./visite.component.scss'],
  animations: [fadeAnimation] // register the animation
})
export class VisiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
