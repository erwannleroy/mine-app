import { fadeAnimation } from '../shared/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mine-find',
  templateUrl: './mine-find.component.html',
  styleUrls: ['./mine-find.component.css'],
  animations: [fadeAnimation] // register the animation
})
export class MineFindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
