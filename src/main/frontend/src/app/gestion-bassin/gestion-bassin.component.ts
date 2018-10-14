import { fadeAnimation } from '../shared/animation';
import { Component, OnInit } from '@angular/core';
import { Mine } from '../shared/models/Mine';

@Component({
  selector: 'app-gestion-bassin',
  templateUrl: './gestion-bassin.component.html',
  styleUrls: ['./gestion-bassin.component.scss'],
  animations: [fadeAnimation] // register the animation
})
export class GestionBassinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
